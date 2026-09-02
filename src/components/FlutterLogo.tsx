import React from 'react';

interface FlutterLogoProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const FlutterLogo: React.FC<FlutterLogoProps> = ({
  size = 20,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 166 202"
      fill="none"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Official Flutter Brand Logo */}
      <path d="M102.4 0L0 102.4L31.6 134L165.7 0H102.4Z" fill="#54C5F8" />
      <path d="M102.4 83.2L30.9 154.7L62.5 186.3L165.7 83.2H102.4Z" fill="#54C5F8" />
      <path d="M102.4 186.3H165.7L119.5 140.1L87.9 171.8L102.4 186.3Z" fill="#02569B" />
      <path d="M87.9 171.8L119.5 140.1L87.9 108.5L56.3 140.1L87.9 171.8Z" fill="#0175C2" />
    </svg>
  );
};
