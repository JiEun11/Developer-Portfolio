import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        const target = e.target as HTMLElement;
        if (target.closest('a, button, [data-interactive]')) {
          cursorRef.current.classList.add('hover');
        } else {
          cursorRef.current.classList.remove('hover');
        }
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
