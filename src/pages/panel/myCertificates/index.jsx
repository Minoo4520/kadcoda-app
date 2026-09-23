import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const textDrop = {
  hidden: { opacity: 0, y: -25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25,
    },
  },
};

export default function PanelCertificates() {
  return (
    <>
      <motion.section initial="hidden" animate="show" variants={textContainer}>
        <motion.h2
          variants={textDrop}
          className="text-xl font-black text-[#1C2B4A]"
        >
          گواهی‌نامه‌ها
        </motion.h2>
        <motion.p
          variants={textDrop}
          className="pt-4 text-xs font-normal text-[#8A96B0]"
        >
          2 گواهی دریافت شده
        </motion.p>
      </motion.section>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-39 flex flex-col gap-20"
      >
        <motion.div
          variants={slideFromLeft}
          className="flex items-center justify-between rounded-2xl bg-[#EDF1F8] p-12 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:p-20"
        >
          <div className="flex items-center gap-8 sm:gap-16">
            <motion.div
              variants={textDrop}
              className="flex h-44 w-44 items-center justify-center rounded-xl shadow-[-2px_-2px_6px_0px_#FFFFFFE5,_3px_3px_8px_0px_#A3B1C673]"
            >
              <img src="/icons/medal-brown.svg" alt="medal" />
            </motion.div>

            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h3
                variants={textDrop}
                className="text-xs font-black text-[#1C2B4A] sm:text-sm"
              >
                گواهی تکمیل دوره React پیشرفته
              </motion.h3>

              <motion.p
                variants={textDrop}
                className="pt-4 text-right text-[10px] text-[#8A96B0] sm:text-left sm:text-xs"
              >
                ۱۴۰۳/۰۵/۱۲ · RC-4892
              </motion.p>

              <motion.span
                variants={textDrop}
                className="inline-block rounded-full bg-[#FFF3DC] px-10 py-2 text-[10px] font-bold text-[#B07D00]"
              >
                عالی
              </motion.span>
            </motion.div>
          </div>

          <motion.div variants={textDrop}>
            <button className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-br from-[#1E4D9C] to-[#193B73] px-5 py-10 shadow-[-2px_-2px_6px_0px_#FFFFFF80,_4px_4px_12px_0px_#193B7359] transition duration-200 hover:-translate-y-3 sm:gap-6 sm:px-20">
              <span className="text-[10px] font-bold text-white sm:text-xs">
                دانلود PDF
              </span>
              <img src="/icons/download.svg" alt="download" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideFromLeft}
          className="flex items-center justify-between rounded-2xl bg-[#EDF1F8] p-12 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:p-20"
        >
          <div className="flex items-center gap-8 sm:gap-16">
            <motion.div
              variants={textDrop}
              className="flex h-44 w-44 items-center justify-center rounded-xl shadow-[-2px_-2px_6px_0px_#FFFFFFE5,_3px_3px_8px_0px_#A3B1C673]"
            >
              <img src="/icons/medal-brown.svg" alt="medal" />
            </motion.div>

            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h3
                variants={textDrop}
                className="text-xs font-black text-[#1C2B4A] sm:text-sm"
              >
                گواهی تکمیل دوره RUST مقدماتی
              </motion.h3>

              <motion.p
                variants={textDrop}
                className="pt-4 text-right text-[10px] text-[#8A96B0] sm:text-left sm:text-xs"
              >
                1404/12/01 · RC-4490
              </motion.p>

              <motion.span
                variants={textDrop}
                className="bg-success-200 text-success-700 inline-block rounded-full px-10 py-2 text-[10px] font-bold"
              >
                خوب
              </motion.span>
            </motion.div>
          </div>

          <motion.div variants={textDrop}>
            <button className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-br from-[#1E4D9C] to-[#193B73] px-5 py-10 shadow-[-2px_-2px_6px_0px_#FFFFFF80,_4px_4px_12px_0px_#193B7359] transition duration-200 hover:-translate-y-3 sm:gap-6 sm:px-20">
              <span className="text-[10px] font-bold text-white sm:text-xs">
                دانلود PDF
              </span>
              <img src="/icons/download.svg" alt="download" />
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.5 }}
        className="mt-20"
      >
        <div className="flex flex-col items-center justify-center gap-20 rounded-2xl bg-[#EDF1F8] p-26 shadow-[inset_-3px_-3px_8px_0px_#FFFFFFD9,_inset_4px_4px_10px_0px_#A3B1C68C]">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex h-40 w-40 items-center justify-center rounded-full shadow-[-2px_-2px_5px_0px_#FFFFFFE5,_3px_3px_8px_0px_#A3B1C673]"
          >
            <img src="/icons/medal-active.svg" alt="medal" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.95 }}
          >
            <p className="text-xs text-[#8A96B0]">
              دوره‌ها را تکمیل کنید تا گواهی دریافت کنید
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
