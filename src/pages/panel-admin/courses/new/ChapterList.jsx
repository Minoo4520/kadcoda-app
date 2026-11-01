import { motion } from 'framer-motion';

import ChapterCard from './ChapterCard';

export default function ChapterList({
  chapters,
  openChapter,
  onToggleChapter,
  episodeForm,
  setEpisodeForm,
  episodeVideoName,
  setEpisodeVideoName,
  onAddEpisode,
}) {
  if (chapters.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mt-20 flex flex-col items-center justify-center rounded-2xl bg-[#EDF1F8] p-40 text-center shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <div className="flex h-72 w-72 items-center justify-center rounded-xl bg-[#E4E9F2] text-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-36 w-36"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
        <h3 className="mt-16 text-sm font-black text-[#1C2B4A]">
          هنوز فصلی اضافه نکرده‌اید
        </h3>
        <p className="mt-4 text-[11px] text-[#8A96B0]">
          اولین فصل دوره را با فرم بالا اضافه کنید
        </p>
      </motion.div>
    );
  }

  return (
    <div className="mt-20 flex flex-col gap-20">
      {chapters.map((chapter, idx) => (
        <ChapterCard
          key={chapter.id}
          chapter={chapter}
          index={idx}
          isOpen={openChapter === chapter.id}
          onToggle={() => onToggleChapter(chapter.id)}
          episodeForm={episodeForm}
          setEpisodeForm={setEpisodeForm}
          episodeVideoName={episodeVideoName}
          setEpisodeVideoName={setEpisodeVideoName}
          onAddEpisode={() => onAddEpisode(chapter.id)}
        />
      ))}
    </div>
  );
}
