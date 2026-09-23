import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
    transition: { staggerChildren: 0.08, delayChildren: 0.25 },
  },
};

const formVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    height: 0,
    marginTop: 0,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    x: 0,
    height: 'auto',
    marginTop: 30,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -100,
    height: 0,
    marginTop: 0,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

export default function PanelSupport() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <motion.section
        initial="hidden"
        animate="show"
        variants={textContainer}
        className="mt-20 flex items-center justify-between"
      >
        <motion.div variants={textContainer} initial="hidden" animate="show">
          <motion.h2
            variants={textDrop}
            className="text-xl font-black text-[#1C2B4A]"
          >
            پشتیبانی
          </motion.h2>
          <motion.p
            variants={textDrop}
            className="pt-2 text-xs font-normal text-[#8A96B0]"
          >
            2 تیکت فعال
          </motion.p>
        </motion.div>

        <motion.div variants={textDrop}>
          <button
            onClick={() => setIsFormOpen((p) => !p)}
            className="to-primary-600 cursor-pointer rounded-xl bg-gradient-to-br from-[#1E4D9C] px-20 py-10 text-xs font-bold text-white shadow-[-2px_-2px_6px_0px_#FFFFFF80,_4px_4px_12px_0px_#193B7359] transition duration-300 hover:-translate-y-3"
          >
            {isFormOpen ? 'بستن' : 'تیکت جدید'}
          </button>
        </motion.div>
      </motion.section>

      <AnimatePresence initial={false}>
        {isFormOpen && (
          <motion.section
            key="ticket-form"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden rounded-2xl bg-[#EDF1F8] p-20 shadow-[inset_-3px_-3px_8px_0px_#FFFFFFD9,_inset_4px_4px_10px_0px_#A3B1C68C]"
          >
            <h3 className="text-sm font-black text-[#1C2B4A]">تیکت جدید</h3>

            <div className="flex flex-col gap-6 pt-12">
              <p className="text-[11px] font-bold text-[#8A96B0]">موضوع</p>
              <input
                type="text"
                className="rounded-xl py-10 pr-16 pl-40 text-right text-xs text-[#0e1727dc] shadow-[inset_-2px_-2px_5px_0px_#FFFFFFD9,_inset_3px_3px_7px_0px_#A3B1C680] placeholder:text-right placeholder:text-xs placeholder:text-[#1C2B4A80] sm:text-sm sm:placeholder:text-sm"
                placeholder="موضوع مشکل یا سوال..."
              />
            </div>

            <div className="flex flex-col gap-6 pt-12">
              <p className="text-[11px] font-bold text-[#8A96B0]">توضیحات</p>
              <textarea
                className="min-h-88 rounded-xl px-16 py-10 text-right text-xs text-[#0e1727dc] shadow-[inset_-2px_-2px_5px_0px_#FFFFFFD9,_inset_3px_3px_7px_0px_#A3B1C680] placeholder:text-right placeholder:text-xs placeholder:text-[#1C2B4A80] sm:text-sm sm:placeholder:text-sm"
                placeholder="توضیحات..."
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-12">
              <button className="col-span-2 cursor-pointer rounded-xl bg-[linear-gradient(135deg,_#1E4D9C_0%,_#193B73_100%)] px-20 py-10 text-xs text-white shadow-[-2px_-2px_6px_0px_#FFFFFF80,_4px_4px_12px_0px_#193B7359] transition duration-300 hover:-translate-y-3 sm:col-span-1">
                ارسال تیکت
              </button>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-primary-600 col-span-2 cursor-pointer rounded-xl bg-[#E8EDF5] px-20 py-10 text-xs shadow-[-3px_-3px_8px_0px_#FFFFFFD9,_4px_4px_10px_0px_#A3B1C673] transition duration-300 hover:-translate-y-3 sm:col-span-1"
              >
                انصراف
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-21 flex flex-col gap-20"
      >
        <Link to="#">
          <motion.div
            variants={slideFromLeft}
            className="flex items-center justify-between rounded-2xl bg-[#EDF1F8] p-10 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
          >
            <div className="flex items-center gap-14">
              <motion.div
                variants={textDrop}
                className="h-8 w-8 rounded-full bg-[#EF4444] shadow-[0px_0px_5px_0px_#EF444488]"
              ></motion.div>
              <motion.div
                variants={textContainer}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-12"
              >
                <motion.p
                  variants={textDrop}
                  className="text-xs font-bold text-[#1C2B4A]"
                >
                  مشکل در پخش ویدیوی جلسه ۷
                </motion.p>
                <motion.span
                  variants={textDrop}
                  className="text-[11px] text-[#8A96B0]"
                >
                  ۱۴۰۳/۰۶/۱۰ · ۲ ساعت پیش
                </motion.span>
              </motion.div>
            </div>
            <motion.div variants={textDrop}>
              <span className="text-primary-600 rounded-full bg-[#DCE5F4] px-10 py-2 text-[10px] font-bold">
                در حال برسی
              </span>
            </motion.div>
          </motion.div>
        </Link>

        <Link to="#">
          <motion.div
            variants={slideFromLeft}
            className="flex items-center justify-between rounded-2xl bg-[#EDF1F8] p-10 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
          >
            <div className="flex items-center gap-14">
              <motion.div
                variants={textDrop}
                className="h-8 w-8 rounded-full bg-[#5AF2CA] shadow-[0px_0px_5px_0px_#5AF2CA]"
              ></motion.div>
              <motion.div
                variants={textContainer}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-12"
              >
                <motion.p
                  variants={textDrop}
                  className="text-xs font-bold text-[#1C2B4A]"
                >
                  سوال درباره محتوای فصل سوم
                </motion.p>
                <motion.span
                  variants={textDrop}
                  className="text-[11px] text-[#8A96B0]"
                >
                  ۱۴۰۳/۰۶/۰۵ · ۳ روز پیش
                </motion.span>
              </motion.div>
            </div>
            <motion.div variants={textDrop}>
              <span className="text-primary-600 rounded-full bg-[#DCE5F4] px-10 py-2 text-[10px] font-bold">
                در حال برسی
              </span>
            </motion.div>
          </motion.div>
        </Link>
      </motion.section>
    </>
  );
}
