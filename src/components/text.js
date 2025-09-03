import React from 'react';
import BlurText from "./BlurText";

const MovingText = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <BlurText
      text="Isn't this so cool?!"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className="text-2xl mb-8"
    />
  );
};

export default MovingText;
