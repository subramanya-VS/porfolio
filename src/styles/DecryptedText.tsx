import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover';
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 25,
  maxIterations = 20,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()',
  className = '',
  encryptedClassName = '',
  parentClassName = '',
  animateOn = 'hover',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // To ensure "view" triggers once.
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animateOn === 'view') {
      const observerCallback = ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true); // Trigger animation.
          setHasAnimated(true); // Prevent further triggering.
        }
      };

      const observerOptions = {
        threshold: 0.1,
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const currentRef = containerRef.current;
      if (currentRef) observer.observe(currentRef);

      return () => {
        if (currentRef) observer.unobserve(currentRef);
      };
    }
  }, [animateOn, hasAnimated]);

  useEffect(() => {
    if (!isHovering) return;

    const interval = setInterval(() => {
      setRevealedIndices((prevIndices) => {
        const nextIndex = getNextIndex(prevIndices);
        if (nextIndex === null) {
          clearInterval(interval);
          return prevIndices;
        }

        const updatedIndices = new Set(prevIndices);
        updatedIndices.add(nextIndex);
        return updatedIndices;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [isHovering]);

  const getNextIndex = (revealed: Set<number>): number | null => {
    const length = text.length;

    switch (revealDirection) {
      case 'start':
        for (let i = 0; i < length; i++) {
          if (!revealed.has(i)) return i;
        }
        break;

      case 'end':
        for (let i = length - 1; i >= 0; i--) {
          if (!revealed.has(i)) return i;
        }
        break;

      case 'center': {
        const middle = Math.floor(length / 2);
        const offset = Math.floor(revealed.size / 2);
        const nextIndex =
          revealed.size % 2 === 0
            ? middle + offset
            : middle - offset - 1;

        if (nextIndex >= 0 && nextIndex < length && !revealed.has(nextIndex)) {
          return nextIndex;
        }

        for (let i = 0; i < length; i++) {
          if (!revealed.has(i)) return i;
        }
        break;
      }

      default:
        return null;
    }

    return null; // No indices left.
  };

  const getScrambledChar = (originalChar: string): string => {
    if (originalChar === ' ') return ' '; // Preserve spaces.
    if (useOriginalCharsOnly) return originalChar;
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const generateScrambledText = (): string => {
    return text
      .split('')
      .map((char, index) =>
        revealedIndices.has(index) ? char : getScrambledChar(char)
      )
      .join('');
  };

  useEffect(() => {
    if (isHovering) {
      const interval = setInterval(() => {
        setDisplayText(generateScrambledText());
        if (revealedIndices.size === text.length) {
          clearInterval(interval);
          setDisplayText(text); // Final reveal.
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [revealedIndices, isHovering]);

  const hoverProps =
    animateOn === 'hover'
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
        }
      : {};

  return (
    <motion.div
      ref={containerRef}
      className={parentClassName}
      {...hoverProps}
    >
      <span>
        {displayText.split('').map((char, index) => (
          <span
            key={index}
            className={
              revealedIndices.has(index) ? className : encryptedClassName
            }
          >
            {char}
          </span>
        ))}
      </span>
    </motion.div>
  );
};

export default DecryptedText;
