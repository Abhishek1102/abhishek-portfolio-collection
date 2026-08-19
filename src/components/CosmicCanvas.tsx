import React, { useEffect, useRef } from 'react';

export const CosmicCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Stars particle array
    const starCount = Math.floor((width * height) / 4000);
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      twinkleSpeed: number;
      color: string;
      vx: number;
      vy: number;
    }> = [];

    const starColors = ['#ffffff', '#38bdf8', '#8b5cf6', '#ec4899', '#f59e0b', '#c084fc'];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        baseAlpha: Math.random() * 0.7 + 0.3,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      });
    }

    // Black Hole Accretion Disk Spiral Particles
    const accretionParticleCount = 180;
    const accretionParticles: Array<{
      angle: number;
      radius: number;
      speed: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    const accretionColors = [
      '#8b5cf6', '#38bdf8', '#ec4899', '#f59e0b', '#a855f7', '#06b6d4', '#ffffff'
    ];

    for (let i = 0; i < accretionParticleCount; i++) {
      accretionParticles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 180 + 45,
        speed: (Math.random() * 0.02 + 0.008) * (Math.random() < 0.5 ? 1 : -1),
        size: Math.random() * 2.5 + 1,
        color: accretionColors[Math.floor(Math.random() * accretionColors.length)],
        alpha: Math.random() * 0.8 + 0.2,
      });
    }

    // Shooting stars / Comets
    const comets: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      active: boolean;
    }> = [];

    const spawnComet = () => {
      if (Math.random() < 0.025 && comets.length < 4) {
        comets.push({
          x: Math.random() * width * 1.2 - width * 0.1,
          y: Math.random() * height * 0.4,
          length: Math.random() * 90 + 60,
          speed: Math.random() * 9 + 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          alpha: 1,
          active: true,
        });
      }
    };

    let rotationAngle = 0;

    // Render loop
    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      rotationAngle += 0.005;

      ctx.clearRect(0, 0, width, height);

      // Deep space background gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height * 0.35,
        50,
        width / 2,
        height * 0.5,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#0c0728');
      bgGrad.addColorStop(0.4, '#070918');
      bgGrad.addColorStop(1, '#030712');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < star.baseAlpha * 0.3) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // --- BLACK HOLE ANIMATION SYSTEM ---
      const bhX = width * 0.5;
      const bhY = Math.min(380, height * 0.35);
      const eventHorizonRadius = 45;

      // 1. Accretion Disk Outer Glow Rings
      const glowGrad = ctx.createRadialGradient(bhX, bhY, 10, bhX, bhY, 260);
      glowGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
      glowGrad.addColorStop(0.15, 'rgba(139, 92, 246, 0.45)');
      glowGrad.addColorStop(0.35, 'rgba(56, 189, 248, 0.35)');
      glowGrad.addColorStop(0.6, 'rgba(236, 72, 153, 0.2)');
      glowGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(bhX, bhY, 260, 0, Math.PI * 2);
      ctx.fill();

      // 2. Swirling Accretion Particles
      accretionParticles.forEach((p) => {
        p.angle += p.speed;
        p.radius -= 0.15; // Spiral inward toward black hole

        // Respawn at outer edge when pulled into singularity
        if (p.radius < eventHorizonRadius) {
          p.radius = Math.random() * 150 + 100;
          p.angle = Math.random() * Math.PI * 2;
        }

        // Elliptical rotation perspective for 3D depth
        const px = bhX + Math.cos(p.angle) * p.radius * 1.6;
        const py = bhY + Math.sin(p.angle) * (p.radius * 0.5);

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // 3. Black Hole Event Horizon Void Core
      ctx.beginPath();
      ctx.arc(bhX, bhY, eventHorizonRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.shadowColor = '#8b5cf6';
      ctx.shadowBlur = 40;
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow

      // Event Horizon Gravitational Lens Ring
      ctx.beginPath();
      ctx.arc(bhX, bhY, eventHorizonRadius + 3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.7)';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(bhX, bhY, eventHorizonRadius + 8, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // --- SPAWN & RENDER COMETS / SHOOTING STARS ---
      spawnComet();
      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        if (!c.active) continue;

        const endX = c.x + Math.cos(c.angle) * c.length;
        const endY = c.y + Math.sin(c.angle) * c.length;

        const cometGrad = ctx.createLinearGradient(c.x, c.y, endX, endY);
        cometGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        cometGrad.addColorStop(0.3, 'rgba(56, 189, 248, 0.7)');
        cometGrad.addColorStop(1, 'rgba(139, 92, 246, 0)');

        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = cometGrad;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed;
        c.alpha -= 0.012;

        if (c.alpha <= 0 || c.x > width || c.y > height) {
          comets.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
};
