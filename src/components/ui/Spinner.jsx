import { motion } from 'framer-motion';

export default function Spinner() {
  return (
    <motion.span
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      className="h-16 w-16 rounded-full border-2 border-white/40 border-t-white"
    />
  );
}
