import { motion } from 'framer-motion';

const rowAnim = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export default function FinanceStats({ transactionsCount, discountsCount }) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-20 sm:grid-cols-2"
    >
      <motion.div
        variants={rowAnim}
        className="flex items-center justify-between rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <div className="flex flex-col gap-4">
          <span className="text-[12px] font-bold text-[#8A96B0]">
            تعداد تراکنش‌ها
          </span>
          <span className="text-primary-600 text-2xl font-black">
            {transactionsCount}
          </span>
        </div>
        <div className="to-primary-600 flex h-56 w-56 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E4D9C] text-white shadow-[3px_3px_8px_0px_#193B734D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-24 w-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
        </div>
      </motion.div>

      <motion.div
        variants={rowAnim}
        className="flex items-center justify-between rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <div className="flex flex-col gap-4">
          <span className="text-[12px] font-bold text-[#8A96B0]">
            تعداد کدهای تخفیف
          </span>
          <span className="text-secondary-400 text-2xl font-black">
            {discountsCount}
          </span>
        </div>
        <div className="flex h-56 w-56 items-center justify-center rounded-xl bg-gradient-to-br from-[#B07D00] to-[#F7B928] text-white shadow-[3px_3px_8px_0px_#193B734D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-24 w-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6Z"
            />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
}
