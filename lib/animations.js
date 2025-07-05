import { motion } from 'framer-motion';

export const fadeIn = (direction = 'up', delay = 0.2) => ({
  hidden: {
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    opacity: 0,
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay = 0) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: 'easeOut',
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay: delay,
      duration: duration,
      ease: 'easeOut',
    },
  },
});

export const fadeInOut = (duration = 0.5) => ({
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration } 
  },
  exit: { 
    opacity: 0,
    transition: { duration } 
  },
});

export const AnimatedText = ({ text, className, delay = 0.05, ...props }) => {
  const letters = Array.from(text);

  return (
    <div className={`flex flex-wrap ${className}`} {...props}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * delay,
            type: 'spring',
            stiffness: 100,
            damping: 12,
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};

export const AnimatedSection = ({ children, className, delay = 0.1, ...props }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.section>
);

export default {
  fadeIn,
  staggerContainer,
  textVariant,
  slideIn,
  zoomIn,
  fadeInOut,
  AnimatedText,
  AnimatedSection,
};
