import { motion } from 'framer-motion';

import StepDot from '../../../../components/ui/StepDot';

export default function CourseStepper({ step }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-20 flex items-center justify-center gap-16"
    >
      <StepDot
        number={1}
        label="اطلاعات دوره"
        active={step === 'course'}
        done={step === 'content'}
      />
      <div
        className={`h-4 w-60 rounded-full transition ${
          step === 'content' ? 'bg-[#22C55E]' : 'bg-[#A3B1C6]'
        }`}
      />
      <StepDot
        number={2}
        label="محتوای دوره"
        active={step === 'content'}
        done={false}
      />
    </motion.div>
  );
}
