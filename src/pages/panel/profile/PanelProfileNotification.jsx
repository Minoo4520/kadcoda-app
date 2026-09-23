import { useState } from 'react';

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

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={[
        'relative inline-flex h-24 w-42 cursor-pointer items-center rounded-full transition-colors duration-300',
        checked
          ? 'bg-primary-600 shadow-[0px_2px_8px_0px_#193B7359]'
          : 'bg-[#DCE5F0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C680]',
      ].join(' ')}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute h-16 w-16 rounded-full bg-white shadow-[0px_1px_3px_0px_#00000033]"
        style={{ left: checked ? 22 : 4, top: 4 }}
      />
    </button>
  );
}

export default function PanelProfileNotification() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [courseNotif, setCourseNotif] = useState(true);

  return (
    <motion.div
      variants={slideFromLeft}
      initial="hidden"
      animate="show"
      className="rounded-2xl bg-[#EDF1F8] px-26 py-25 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          variants={textDrop}
          className="flex items-center justify-between border-b border-b-[#A3B1C64D] py-16"
        >
          <div>
            <p className="text-sm font-black text-[#1C2B4A]">اعلان‌های ایمیل</p>
            <p className="pt-2 text-xs text-[#8A96B0]">
              دریافت خبرنامه از طریق ایمیل
            </p>
          </div>
          <Toggle checked={emailNotif} onChange={setEmailNotif} />
        </motion.div>

        <motion.div
          variants={textDrop}
          className="flex items-center justify-between border-b border-b-[#A3B1C64D] py-16"
        >
          <div>
            <p className="text-sm font-black text-[#1C2B4A]">
              اعلان‌های پیامکی
            </p>
            <p className="pt-2 text-xs text-[#8A96B0]">
              پیامک برای تیکت‌های مهم
            </p>
          </div>
          <Toggle checked={smsNotif} onChange={setSmsNotif} />
        </motion.div>

        <motion.div
          variants={textDrop}
          className="flex items-center justify-between py-16"
        >
          <div>
            <p className="text-sm font-black text-[#1C2B4A]">
              اعلان‌های بروزرسانی دوره
            </p>
            <p className="pt-2 text-xs text-[#8A96B0]">
              آگاهی از بروزرسانی محتوای دوره‌ها
            </p>
          </div>
          <Toggle checked={courseNotif} onChange={setCourseNotif} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
