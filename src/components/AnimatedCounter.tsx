import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string; // e.g. "5,500+", "2+", "4+", "100%"
  duration?: number; // ms
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  className,
  style
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Extract numeric part and non-numeric prefix/suffix
  // e.g. "5,500+" -> numeric: 5500, suffix: "+"
  const parseValue = (val: string) => {
    const rawDigits = val.replace(/[^0-9]/g, '');
    const targetNum = parseInt(rawDigits, 10) || 0;
    const hasPlus = val.includes('+');
    const hasPercent = val.includes('%');
    const hasComma = val.includes(',');
    
    let suffix = '';
    if (hasPlus) suffix += '+';
    if (hasPercent) suffix += '%';

    return { targetNum, hasComma, suffix };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const { targetNum, hasComma, suffix } = parseValue(value);
    if (targetNum === 0) {
      setDisplayValue(value);
      return;
    }

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease out expo formula for smooth counting deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNum = Math.floor(easeProgress * targetNum);

      const formattedNum = hasComma ? currentNum.toLocaleString('en-US') : currentNum.toString();
      setDisplayValue(`${formattedNum}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        const finalFormatted = hasComma ? targetNum.toLocaleString('en-US') : targetNum.toString();
        setDisplayValue(`${finalFormatted}${suffix}`);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasAnimated, value, duration]);

  return (
    <span ref={elementRef} className={className} style={style}>
      {hasAnimated ? displayValue : '0'}
    </span>
  );
};
