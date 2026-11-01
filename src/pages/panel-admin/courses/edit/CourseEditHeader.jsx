import { motion } from 'framer-motion';

export default function CourseEditHeader({ courseId, updatedAt }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col gap-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 className="relative text-lg font-black text-[#1C2B4A]">
          ویرایش دوره
        </h1>
        <p className="pt-8 text-[12px] text-[#8A96B0]">
          شناسه دوره:{' '}
          <span className="text-primary-600 font-black">#{courseId}</span> ·
          آخرین به‌روزرسانی: {updatedAt}
        </p>
      </div>

      <span className="w-fit rounded-full bg-[#FFF3DC] px-14 py-6 text-[10px] font-bold text-[#B07D00] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
        حالت ویرایش
      </span>
    </motion.div>
  );
}
