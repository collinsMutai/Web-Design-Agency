import React, { useEffect, useRef, useState } from "react";

// Sun SVG component
const Sun = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 64 64"
    fill="orange"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="14" fill="orange" />
    {[...Array(8)].map((_, i) => {
      const angle = (i * 45) * (Math.PI / 180);
      const x1 = 32 + Math.cos(angle) * 20;
      const y1 = 32 + Math.sin(angle) * 20;
      const x2 = 32 + Math.cos(angle) * 28;
      const y2 = 32 + Math.sin(angle) * 28;
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="orange"
          strokeWidth="3"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

// Moon SVG component
const Moon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="14" fill="#F0E68C" />
    <circle cx="40" cy="28" r="14" fill="black" />
  </svg>
);

// SVG Star shape component
const StarShape = ({ size = 20, color = "white" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

// Single floating star component that bounces around the screen
const FloatingStar = ({ size, color, initialX, initialY }) => {
  const starRef = useRef(null);

  const position = useRef({ x: initialX, y: initialY });
  const velocity = useRef({
    x: (Math.random() - 0.5) * 0.5,
    y: (Math.random() - 0.5) * 0.5,
  });

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const star = starRef.current;
      if (!star) return;

      const { x, y } = position.current;
      const { x: vx, y: vy } = velocity.current;

      const nextX = x + vx;
      const nextY = y + vy;

      const maxX = window.innerWidth - size;
      const maxY = window.innerHeight - size;

      if (nextX <= 0 || nextX >= maxX) velocity.current.x = -vx;
      if (nextY <= 0 || nextY >= maxY) velocity.current.y = -vy;

      position.current.x += velocity.current.x;
      position.current.y += velocity.current.y;

      star.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [size]);

  return (
    <div
      ref={starRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        pointerEvents: "none",
        willChange: "transform",
      }}
    >
      <StarShape size={size} color={color} />
    </div>
  );
};

const MaintenancePage = () => {
  const [isDay, setIsDay] = useState(true);
  const celestialRef = useRef(null);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDay(hour >= 6 && hour < 18);
  }, []);

  useEffect(() => {
    let animationFrameId;
    let start;

    const amplitude = 10;
    const period = 4000;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const offsetY = amplitude * Math.sin((2 * Math.PI * elapsed) / period);

      if (celestialRef.current) {
        celestialRef.current.style.transform = `translateY(${offsetY}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDay]);

  // Only show stars if it's night
  const stars = isDay
    ? []
    : Array.from({ length: 25 }).map(() => ({
        size: 10 + Math.random() * 15,
        color: "#fff",
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * window.innerHeight,
      }));

  const styles = {
    container: {
      position: "fixed",
      inset: 0,
      backgroundColor: isDay ? "#87CEEB" : "#0b0c1a",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: isDay ? "#333" : "#ddd",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center",
      padding: "20px",
    },
    celestialWrapper: {
      position: "fixed",
      top: "20px",
      right: "20px",
      width: "80px",
      height: "80px",
      willChange: "transform",
      zIndex: 1000,
    },
    messageBox: {
      backgroundColor: isDay
        ? "rgba(255, 255, 255, 0.85)"
        : "rgba(20, 20, 40, 0.85)",
      borderRadius: "12px",
      padding: "40px 60px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      maxWidth: "600px",
      backdropFilter: "blur(8px)",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "20px",
    },
    subheading: {
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
  };

  return (
    <div style={styles.container}>
      {/* Render stars only at night */}
      {stars.map(({ size, color, initialX, initialY }, idx) => (
        <FloatingStar
          key={idx}
          size={size}
          color={color}
          initialX={initialX}
          initialY={initialY}
        />
      ))}

      <div ref={celestialRef} style={styles.celestialWrapper}>
        {isDay ? <Sun /> : <Moon />}
      </div>

      <div style={styles.messageBox}>
        <h1 style={styles.heading}>🚧 We'll be back soon!</h1>
        <p style={styles.subheading}>
          Sorry for the inconvenience — we're performing some maintenance at the
          moment.
          <br />
          Thanks for your patience!
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
