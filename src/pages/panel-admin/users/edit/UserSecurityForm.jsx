import { motion } from 'framer-motion';

import Field from '../../../../components/ui/Field';
import SectionHeader from '../../../../components/ui/SectionHeader';

const inputClass =
  'w-full rounded-xl bg-[#E4E9F2] px-12 py-10 text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] outline-none transition';

export default function UserSecurityForm({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  passwordsMismatch,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
    >
      <SectionHeader title="امنیت و رمز عبور" />
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <Field
          label="رمز عبور جدید"
          hint="در صورت خالی گذاشتن، رمز عبور فعلی تغییر نمی‌کند"
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={inputClass}
          />
        </Field>
        <Field label="تکرار رمز عبور جدید">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className={`${inputClass} ${
              passwordsMismatch ? 'ring-opacity-50 ring-2 ring-[#B91C1C]' : ''
            }`}
          />
          {passwordsMismatch && (
            <span className="text-[10px] font-bold text-[#B91C1C]">
              رمزهای عبور یکسان نیستند
            </span>
          )}
        </Field>
      </div>
    </motion.div>
  );
}
