import { motion } from 'framer-motion';

import ChapterCard from '../../../../components/ui/ChapterCard';
import SectionHeader from '../../../../components/ui/SectionHeader';

const inputClass =
  'w-full rounded-xl bg-[#E4E9F2] px-12 py-10 text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] outline-none transition';

export default function CourseChaptersSection({
  chapters,
  newChapterTitle,
  onNewChapterTitleChange,
  onAddChapter,
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <SectionHeader title="محتوای دوره" />

        <div className="flex flex-col gap-12 sm:flex-row">
          <input
            type="text"
            value={newChapterTitle}
            onChange={(e) => onNewChapterTitleChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                onAddChapter();
              }
            }}
            placeholder={`عنوان فصل ${chapters.length + 1}...`}
            className={`${inputClass} flex-1`}
          />
          <button
            type="button"
            onClick={onAddChapter}
            disabled={!newChapterTitle.trim()}
            className={`to-primary-600 inline-flex items-center justify-center gap-8 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-20 py-10 text-[11px] font-black whitespace-nowrap text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 hover:brightness-110 ${
              !newChapterTitle.trim()
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-16 w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            افزودن فصل
          </button>
        </div>
        <p className="mt-8 text-[10px] text-[#8A96B0]">
          ترتیب فصل به‌صورت خودکار تعیین می‌شود (فصل {chapters.length + 1})
        </p>
      </motion.div>

      {chapters.length > 0 && (
        <div className="mt-20 flex flex-col gap-20">
          {chapters.map((chapter, idx) => (
            <ChapterCard key={chapter.id} chapter={chapter} index={idx} />
          ))}
        </div>
      )}
    </>
  );
}
