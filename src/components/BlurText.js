import React, { useEffect, useRef } from 'react';
import { animate } from 'motion';

const BlurText = ({ text, className, delay = 0, animateBy = 'words', direction = 'top', onAnimationComplete }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = animateBy === 'words' ? text.split(' ') : text.split('');
    container.innerHTML = '';

    items.forEach((item, index) => {
      const span = document.createElement('span');
      span.textContent = item;
      span.style.display = 'inline-block';
      span.style.marginRight = animateBy === 'words' ? '0.25em' : '0';
      container.appendChild(span);

      const animation = animate(
        span,
        {
          opacity: [0, 1],
          y: [direction === 'top' ? -20 : 20, 0],
          filter: ['blur(10px)', 'blur(0px)'],
        },
        {
          delay: delay + index * 0.1,
          duration: 0.5,
        }
      );

      if (index === items.length - 1 && onAnimationComplete) {
        animation.finished.then(onAnimationComplete);
      }
    });
  }, [text, delay, animateBy, direction, onAnimationComplete]);

  return <div ref={containerRef} className={className}></div>;
};

export default BlurText;
