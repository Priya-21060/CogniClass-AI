import React from 'react';
import { motion } from 'framer-motion';

/**
 * Smooth Page Transition Wrapper component using Framer Motion.
 */
export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
