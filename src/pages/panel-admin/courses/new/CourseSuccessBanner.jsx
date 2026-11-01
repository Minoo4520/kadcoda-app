import { motion } from 'framer-motion';
import { Link } from 'react-router';

export default function CourseSuccessBanner({ courseId, courseTitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
    >
      <div className="flex flex-wrap items-center gap-16">
        <div className="flex h-56 w-56 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#15803D] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="currentColor"
            className="h-28 w-28"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-black text-[#1C2B4A]">
            دوره با موفقیت ایجاد شد
          </h1>
          <p className="mt-4 text-[12px] text-[#8A96B0]">
            شناسه:{' '}
            <span className="text-primary-600 font-black">#{courseId}</span> ·{' '}
            {courseTitle}
          </p>
        </div>
        <Link
          to="/panel/admin/courses"
          className="text-primary-600 hidden rounded-full bg-[#DCE5F4] px-14 py-8 text-[11px] font-bold transition hover:brightness-105 sm:inline-flex"
        >
          بازگشت به دوره‌ها
        </Link>
      </div>
    </motion.div>
  );
}
