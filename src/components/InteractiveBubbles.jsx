import React, { useEffect, useRef } from 'react';

export default function InteractiveBubbles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;
      // Accumulate scroll velocity, capped for smoothness
      scrollVelocity = Math.max(-35, Math.min(35, scrollVelocity + delta * 0.25));
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Brand-inspired iridescent bubble colors (Sky Blue, Brand Yellow, Crisp White, Mint)
    const palette = [
      { stroke: 'rgba(8, 121, 206, 0.25)', fill: 'rgba(234, 245, 255, 0.22)', highlight: 'rgba(255, 255, 255, 0.65)' },
      { stroke: 'rgba(255, 185, 0, 0.28)', fill: 'rgba(255, 249, 230, 0.20)', highlight: 'rgba(255, 255, 255, 0.7)' },
      { stroke: 'rgba(56, 189, 248, 0.24)', fill: 'rgba(224, 242, 254, 0.18)', highlight: 'rgba(255, 255, 255, 0.6)' },
      { stroke: 'rgba(21, 148, 71, 0.18)', fill: 'rgba(236, 253, 245, 0.16)', highlight: 'rgba(255, 255, 255, 0.55)' }
    ];

    class Bubble {
      constructor(isBurst = false) {
        this.reset(true, isBurst);
      }

      reset(initial = false, isBurst = false) {
        this.radius = isBurst ? Math.random() * 10 + 4 : Math.random() * 22 + 8;
        this.x = Math.random() * width;
        this.y = initial
          ? Math.random() * height
          : scrollVelocity < 0
            ? -this.radius - Math.random() * 50
            : height + this.radius + Math.random() * 80;
        this.baseSpeedY = Math.random() * 0.7 + 0.35;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.wobbleAngle = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
        this.color = palette[Math.floor(Math.random() * palette.length)];
        this.isBurst = isBurst;
        this.life = isBurst ? 1.0 : 999;
      }

      update(vel) {
        this.wobbleAngle += this.wobbleSpeed;
        const wobbleX = Math.sin(this.wobbleAngle) * 0.45;

        // Normal upward float + strong reactive response to rapid scrolling
        const speedMultiplier = 1 + Math.abs(vel) * 0.18;
        const scrollPush = vel * (this.radius * 0.025);

        this.y -= this.baseSpeedY * speedMultiplier + scrollPush;
        this.x += this.vx + wobbleX;

        // Subtle interactive mouse repulsion
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110 && dist > 0) {
          const force = (110 - dist) / 110;
          this.x += (dx / dist) * force * 2.2;
          this.y += (dy / dist) * force * 2.2;
        }

        if (this.isBurst) {
          this.life -= 0.012;
        }

        // Wrap around screen
        if (this.y < -this.radius * 2 - 40) {
          if (this.isBurst) return false;
          this.y = height + this.radius * 2;
          this.x = Math.random() * width;
        } else if (this.y > height + this.radius * 2 + 60) {
          if (this.isBurst) return false;
          this.y = -this.radius * 2;
          this.x = Math.random() * width;
        }

        if (this.x < -this.radius) this.x = width + this.radius;
        if (this.x > width + this.radius) this.x = -this.radius;

        return this.life > 0;
      }

      draw(ctx, vel) {
        const alpha = this.isBurst ? Math.max(0, this.life) : 1;
        ctx.save();
        ctx.globalAlpha = alpha;

        // Subtle stretch on rapid scroll
        const stretch = Math.min(1.25, 1 + Math.abs(vel) * 0.008);
        ctx.translate(this.x, this.y);
        ctx.scale(1 / Math.sqrt(stretch), stretch);

        // Outer translucent bubble body
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color.fill;
        ctx.fill();

        ctx.lineWidth = 1.2;
        ctx.strokeStyle = this.color.stroke;
        ctx.stroke();

        // Specular soap bubble highlight dot
        ctx.beginPath();
        ctx.arc(-this.radius * 0.32, -this.radius * 0.32, this.radius * 0.24, 0, Math.PI * 2);
        ctx.fillStyle = this.color.highlight;
        ctx.fill();

        ctx.restore();
      }
    }

    const baseCount = window.innerWidth < 768 ? 18 : 34;
    const bubbles = Array.from({ length: baseCount }, () => new Bubble(false));
    let burstBubbles = [];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn extra fizzy micro-bubbles when scrolling rapidly
      if (Math.abs(scrollVelocity) > 4 && burstBubbles.length < 45) {
        const spawnCount = Math.min(3, Math.floor(Math.abs(scrollVelocity) / 4));
        for (let i = 0; i < spawnCount; i++) {
          burstBubbles.push(new Bubble(true));
        }
      }

      // Update & draw base bubbles
      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].update(scrollVelocity);
        bubbles[i].draw(ctx, scrollVelocity);
      }

      // Update & draw rapid-scroll burst bubbles
      burstBubbles = burstBubbles.filter((b) => {
        const alive = b.update(scrollVelocity);
        if (alive) b.draw(ctx, scrollVelocity);
        return alive;
      });

      // Smoothly decay scroll velocity back to normal calm state
      scrollVelocity *= 0.91;
      if (Math.abs(scrollVelocity) < 0.05) scrollVelocity = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-30"
      aria-hidden="true"
    />
  );
}
