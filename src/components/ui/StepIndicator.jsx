import { motion } from 'framer-motion';

export default function StepIndicator({ current, steps }) {
  return (
    <div className="relative flex items-start justify-between">
      <div className="pointer-events-none absolute top-18 right-[calc(100%/6)] left-[calc(100%/6)] flex items-center justify-between">
        {steps.slice(0, -1).map((s) => (
          <div
            key={s.num}
            className={`h-4 flex-1 rounded-full transition-colors duration-300 ${
              current > s.num ? 'bg-[#22C55E]' : 'bg-[#A3B1C6]'
            }`}
          />
        ))}
      </div>

      {steps.map((s) => {
        const done = current > s.num;
        const active = current === s.num;
        return (
          <div
            key={s.num}
            className="relative z-10 flex flex-1 flex-col items-center gap-6"
          >
            <motion.span
              animate={{ scale: active ? 1.05 : 1 }}
              transition={{ duration: 0.25 }}
              className={`flex h-36 w-36 items-center justify-center rounded-full text-[11px] font-black transition-colors duration-300 ${
                done
                  ? 'bg-[#22C55E] text-white shadow-[0_0_8px_0_#22C55E66]'
                  : active
                    ? 'to-primary-600 bg-gradient-to-br from-[#1E4D9C] text-white shadow-[3px_3px_8px_0px_#193B734D]'
                    : 'bg-[#E4E9F2] text-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]'
              }`}
            >
              {done ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-16 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              ) : (
                s.num
              )}
            </motion.span>
            <span
              className={`text-center text-[10px] font-bold ${
                active || done ? 'text-[#1C2B4A]' : 'text-[#8A96B0]'
              }`}
            >
              {s.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
