import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

export default function ChapterCard({ chapter, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      className="rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
    >
      <div className="flex flex-wrap items-center justify-between gap-12">
        <div className="flex items-center gap-12">
          <span className="text-primary-600 flex h-44 w-44 items-center justify-center rounded-xl bg-[#DCE5F4] text-sm font-black shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
            {chapter.sort_order}
          </span>
          <div>
            <h3 className="text-sm font-black text-[#1C2B4A]">
              {chapter.title}
            </h3>
            <p className="mt-2 text-[10px] text-[#8A96B0]">
              {chapter.episodes.length} اپیزود
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button
            type="button"
            aria-label="ویرایش فصل"
            className="to-primary-600 flex h-32 w-32 cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-[#1E4D9C] text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 hover:brightness-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-16 w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`inline-flex cursor-pointer items-center gap-8 rounded-xl px-14 py-8 text-[11px] font-bold whitespace-nowrap transition duration-200 ${
              isOpen
                ? 'bg-[#FEE2E2] text-[#B91C1C]'
                : 'text-primary-600 bg-[#DCE5F4]'
            } shadow-[inset_-2px_-2px_3px_0px_#FFFFFFCC,_inset_2px_2px_4px_0px_#A3B1C666]`}
          >
            <motion.svg
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-14 w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </motion.svg>
            {isOpen ? 'بستن' : 'مشاهده اپیزودها'}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-16 flex flex-col gap-8">
              {chapter.episodes.length === 0 ? (
                <p className="rounded-lg bg-[#E4E9F2] p-14 text-center text-[11px] text-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
                  هنوز اپیزودی برای این فصل ثبت نشده است
                </p>
              ) : (
                chapter.episodes.map((ep) => (
                  <div
                    key={ep.id}
                    className="flex flex-wrap items-center justify-between gap-12 rounded-lg bg-[#E4E9F2] p-12 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]"
                  >
                    <div className="flex items-center gap-10">
                      <span className="text-[10px] font-black text-[#8A96B0]">
                        #{ep.sort_order}
                      </span>
                      <div className="flex flex-col gap-2">
                        <span className="text-[11px] font-bold text-[#1C2B4A]">
                          {ep.title}
                        </span>
                        <span className="text-[10px] text-[#8A96B0]">
                          {ep.duration || 'بدون مدت'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      {ep.is_free && (
                        <span className="rounded-full bg-[#DCFCE7] px-10 py-2 text-[10px] font-bold text-[#15803D]">
                          رایگان
                        </span>
                      )}
                      <span
                        className={`rounded-full px-10 py-2 text-[10px] font-bold ${ep.video ? 'bg-[#DCE5F4] text-[#193B73]' : 'bg-[#FFF3DC] text-[#B07D00]'}`}
                      >
                        {ep.video ? 'ویدیو دارد' : 'بدون ویدیو'}
                      </span>
                      <button
                        type="button"
                        aria-label="ویرایش اپیزود"
                        className="hover:text-primary-600 flex h-28 w-28 cursor-pointer items-center justify-center rounded-lg bg-[#EDF1F8] text-[#8A96B0] shadow-[-2px_-2px_6px_0px_#FFFFFFE5,_3px_3px_8px_0px_#A3B1C673] transition duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.8}
                          stroke="currentColor"
                          className="h-14 w-14"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}

              <button
                type="button"
                className="text-primary-600 mt-6 inline-flex w-fit items-center gap-8 rounded-lg bg-[#DCE5F4] px-14 py-8 text-[10px] font-bold shadow-[inset_-2px_-2px_3px_0px_#FFFFFFCC,_inset_2px_2px_4px_0px_#A3B1C666] transition duration-200 hover:brightness-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-14 w-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                افزودن اپیزود جدید
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
