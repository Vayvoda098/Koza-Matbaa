import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className,
  delay = 0,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars', // 'chars' or 'words'
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  onLetterAnimationComplete,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const splitText = splitType === 'chars' ? text.split('') : text.split(' ');
    const elements = splitText.map((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      if (splitType === 'words' && index < splitText.length - 1) {
        span.textContent += ' '; // Add space back for words
      }
      span.style.display = 'inline-block'; // Ensure each char/word is a block for animation
      return span;
    });

    textRef.current.innerHTML = ''; // Clear existing content
    elements.forEach(el => textRef.current.appendChild(el));

    gsap.fromTo(
      elements,
      { ...from, display: 'inline-block' },
      {
        ...to,
        duration: duration,
        ease: ease,
        stagger: 0.05,
        delay: delay / 1000, // Convert ms to seconds
        scrollTrigger: {
          trigger: textRef.current,
          start: `top bottom+=${rootMargin}`,
          toggleActions: 'play none none none',
          onComplete: onLetterAnimationComplete,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [text, className, delay, duration, ease, splitType, from, to, threshold, rootMargin, textAlign, onLetterAnimationComplete]);

  return (
    <div ref={textRef} className={className} style={{ textAlign }}></div>
  );
};

export default SplitText;
