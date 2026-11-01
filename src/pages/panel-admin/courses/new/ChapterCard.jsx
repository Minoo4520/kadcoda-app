import { AnimatePresence, motion } from 'framer-motion';

import Field from '../../../../components/ui/Field';
import FileInput from '../../../../components/ui/FileInput';
import ToggleSwitch from '../../../../components/ui/ToggleSwitch';
import { inputClass } from './constants';

export default function ChapterCard({
  chapter,
  index,
  isOpen,
  onToggle,
  episodeForm,
  setEpisodeForm,
  episodeVideoName,
  setEpisodeVideoName,
  onAddEpisode,
}) {
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
        <button
          type="button"
          onClick={onToggle}
          className={`inline-flex cursor-pointer items-center gap-8 rounded-xl px-14 py-8 text-[11px] font-bold whitespace-nowrap transition duration-200 ${
            isOpen
              ? 'bg-[#FEE2E2] text-[#B91C1C]'
              : 'text-primary-600 bg-[#DCE5F4]'
          } shadow-[inset_-2px_-2px_3px_0px_#FFFFFFCC,_inset_2px_2px_4px_0px_#A3B1C666]`}
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
              d={isOpen ? 'M6 18 18 6M6 6l12 12' : 'M12 4.5v15m7.5-7.5h-15'}
            />
          </svg>
          {isOpen ? 'بستن' : 'افزودن اپیزود'}
        </button>
      </div>

      {chapter.episodes.length > 0 && (
        <div className="mt-16 flex flex-col gap-8">
          {chapter.episodes.map((ep) => (
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
                  className={`rounded-full px-10 py-2 text-[10px] font-bold ${
                    ep.video
                      ? 'bg-[#DCE5F4] text-[#193B73]'
                      : 'bg-[#FFF3DC] text-[#B07D00]'
                  }`}
                >
                  {ep.video ? 'ویدیو دارد' : 'بدون ویدیو'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-16 rounded-xl bg-[#E4E9F2] p-16 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
              <h4 className="mb-14 text-[11px] font-black text-[#1C2B4A]">
                اپیزود جدید · ترتیب #{chapter.episodes.length + 1}
              </h4>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <Field label="عنوان اپیزود" required>
                  <input
                    type="text"
                    value={episodeForm.title}
                    onChange={(e) =>
                      setEpisodeForm((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="مثلاً معرفی دوره و نصب پایتون"
                    className={inputClass}
                  />
                </Field>
                <Field label="مدت زمان">
                  <input
                    type="text"
                    value={episodeForm.duration}
                    onChange={(e) =>
                      setEpisodeForm((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    placeholder="مثلاً ۱۲ دقیقه"
                    className={inputClass}
                  />
                </Field>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
                <Field label="فایل ویدیو">
                  <FileInput
                    fileName={episodeVideoName}
                    accept="video/*"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) {
                        setEpisodeVideoName(f.name);
                        setEpisodeForm((prev) => ({ ...prev, video: f }));
                      }
                    }}
                  />
                </Field>
                <ToggleSwitch
                  checked={episodeForm.is_free}
                  onChange={(v) =>
                    setEpisodeForm((prev) => ({ ...prev, is_free: v }))
                  }
                  label="اپیزود رایگان"
                  description="بدون خرید دوره هم قابل تماشا باشد"
                />
              </div>
              <div className="mt-14 flex justify-end">
                <button
                  type="button"
                  onClick={onAddEpisode}
                  disabled={!episodeForm.title.trim()}
                  className={`to-primary-600 inline-flex items-center gap-8 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-16 py-10 text-[11px] font-black whitespace-nowrap text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 hover:brightness-110 ${
                    !episodeForm.title.trim()
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
                  افزودن اپیزود
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
