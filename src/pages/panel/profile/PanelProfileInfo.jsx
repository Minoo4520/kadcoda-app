import { motion } from 'framer-motion';

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const fieldContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function PanelProfileInfo() {
  return (
    <motion.div
      variants={slideFromLeft}
      initial="hidden"
      animate="show"
      className="rounded-2xl bg-[#EDF1F8] px-20 py-15 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:px-55 sm:py-35"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <div className="grid grid-cols-1 gap-21 sm:grid-cols-2">
          <motion.div variants={fieldContainer} className="flex flex-col gap-6">
            <motion.p
              variants={textDrop}
              className="text-[11px] font-bold text-[#8A96B0]"
            >
              نام و نام خانوادگی
            </motion.p>
            <motion.input
              variants={textDrop}
              type="text"
              className="rounded-xl px-16 py-10 text-sm text-[#1C2B4A] shadow-[inset_-2px_-2px_5px_0px_#FFFFFFD9,_inset_3px_3px_7px_0px_#A3B1C680] placeholder:text-[#1C2B4A80]"
              value="رضا کریمی"
              placeholder="نام و نام خانوادگی"
              readOnly
            />
          </motion.div>

          <motion.div variants={fieldContainer} className="flex flex-col gap-6">
            <motion.p
              variants={textDrop}
              className="text-[11px] font-bold text-[#8A96B0]"
            >
              آدرس ایمیل
            </motion.p>
            <motion.input
              variants={textDrop}
              type="email"
              placeholder="example@gmail.com"
              className="rounded-xl px-16 py-10 text-sm text-[#1C2B4A] shadow-[inset_-2px_-2px_5px_0px_#FFFFFFD9,_inset_3px_3px_7px_0px_#A3B1C680] placeholder:text-[#1C2B4A80]"
              value="reza.karimi@email.com"
              readOnly
            />
          </motion.div>
        </div>

        <motion.div
          variants={fieldContainer}
          className="mt-21 grid grid-cols-1 gap-21 sm:grid-cols-2"
        >
          <motion.div variants={fieldContainer} className="flex flex-col gap-6">
            <motion.p
              variants={textDrop}
              className="text-[11px] font-bold text-[#8A96B0]"
            >
              شماره تلفن
            </motion.p>
            <motion.input
              variants={textDrop}
              type="tel"
              className="rounded-xl px-16 py-10 text-right text-sm text-[#1C2B4A] shadow-[inset_-2px_-2px_5px_0px_#FFFFFFD9,_inset_3px_3px_7px_0px_#A3B1C680] placeholder:text-[#1C2B4A80]"
              value="۰۹۱۲۳۴۵۶۷۸۹"
              readOnly
            />
          </motion.div>

          <motion.div variants={fieldContainer} className="flex flex-col gap-6">
            <motion.p
              variants={textDrop}
              className="text-[11px] font-bold text-[#8A96B0]"
            >
              وب‌سایت
            </motion.p>
            <motion.input
              variants={textDrop}
              type="email"
              className="rounded-xl px-16 py-10 text-sm text-[#1C2B4A] shadow-[inset_-2px_-2px_5px_0px_#FFFFFFD9,_inset_3px_3px_7px_0px_#A3B1C680] placeholder:text-[#1C2B4A80]"
              placeholder="https://example.com"
              readOnly
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fieldContainer}
          className="mt-21 flex flex-col gap-6 pt-16"
        >
          <motion.p
            variants={textDrop}
            className="text-[11px] font-bold text-[#8A96B0]"
          >
            بیوگرافی
          </motion.p>
          <motion.textarea
            variants={textDrop}
            className="min-h-80 rounded-xl px-16 py-10 text-right text-sm text-[#1C2B4A] shadow-[inset_-2px_-2px_5px_0px_#FFFFFFD9,_inset_3px_3px_7px_0px_#A3B1C680] placeholder:text-[#1C2B4A80]"
            value="علاقه‌مند به یادگیری و توسعه مهارت‌های دیجیتال"
            readOnly
          />
        </motion.div>

        <motion.div
          variants={textDrop}
          className="mt-21 flex flex-row-reverse border-t border-t-[#A3B1C64D] pt-8"
        >
          <button className="cursor-pointer rounded-xl bg-[linear-gradient(135deg,_#1E4D9C_0%,_#193B73_100%)] px-20 py-10 text-xs font-bold text-white shadow-[-2px_-2px_6px_0px_#FFFFFF80,_4px_4px_12px_0px_#193B7359] transition duration-300 hover:-translate-y-3">
            ذخیره تغییرات
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
