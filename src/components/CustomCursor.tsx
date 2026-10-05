import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices or fine pointer absent
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check cursor data attribute on hovered target or parents
      const target = e.target as HTMLElement | null;
      const cursorElem = target?.closest('[data-cursor]') as HTMLElement | null;
      if (cursorElem) {
        setCursorText(cursorElem.getAttribute('data-cursor'));
        setIsHovered(true);
      } else {
        const isInteractive = target?.closest('button, a, input, textarea, [role="button"]');
        if (isInteractive) {
          setCursorText(null);
          setIsHovered(true);
        } else {
          setCursorText(null);
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Follower Badge / Pill */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`flex items-center justify-center transition-all duration-200 ${
          cursorText
            ? 'px-3 py-1.5 rounded-full bg-brand-500 text-white font-mono text-xs font-semibold shadow-glow tracking-wider'
            : isHovered
            ? 'w-10 h-10 rounded-full bg-brand-500/15 border border-brand-500/40 backdrop-blur-xs'
            : 'w-7 h-7 rounded-full border border-slate-400/40'
        }`}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="select-none uppercase text-[10px]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Dot */}
      {!cursorText && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className={`w-1.5 h-1.5 rounded-full ${
            isHovered ? 'bg-brand-500 scale-125' : 'bg-slate-900'
          } transition-transform duration-150`}
        />
      )}
    </div>
  );
};
