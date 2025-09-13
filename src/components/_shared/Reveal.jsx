import { motion } from 'framer-motion';

export default function Reveal({ children, delay=0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: .98, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: .7, ease: [0.2,0.65,0.2,1], delay }}
      viewport={{ once: true, amount: .2 }}
    >
      {children}
    </motion.div>
  );
}
