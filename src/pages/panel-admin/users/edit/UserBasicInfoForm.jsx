import { motion } from 'framer-motion';

import Field from '../../../../components/ui/Field';
import FilterSelect from '../../../../components/ui/FilterSelect';
import SectionHeader from '../../../../components/ui/SectionHeader';

const inputClass =
  'w-full rounded-xl bg-[#E4E9F2] px-12 py-10 text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] outline-none transition';

export default function UserBasicInfoForm({ form, setForm, roleOptions }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
      className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
    >
      <SectionHeader title="اطلاعات پایه" />
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <Field label="نام و نام خانوادگی" required>
          <input
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="نام کامل کاربر"
            className={inputClass}
          />
        </Field>
        <Field label="ایمیل" required>
          <input
            type="email"
            dir="ltr"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="user@example.com"
            className={inputClass}
          />
        </Field>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
        <Field label="شماره موبایل" required>
          <input
            type="tel"
            dir="ltr"
            value={form.mobile}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, mobile: e.target.value }))
            }
            placeholder="09123456789"
            className={inputClass}
          />
        </Field>
        <Field label="نقش کاربر">
          <FilterSelect
            options={roleOptions}
            value={form.role}
            onChange={(v) => setForm((prev) => ({ ...prev, role: v }))}
          />
        </Field>
      </div>
      <Field
        label="بیوگرافی"
        className="mt-20"
        hint="توضیح کوتاه درباره کاربر (حداکثر ۲ خط)"
      >
        <textarea
          rows={3}
          value={form.bio}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, bio: e.target.value }))
          }
          placeholder="توضیح کوتاه درباره کاربر..."
          className={`${inputClass} resize-none`}
        />
      </Field>
    </motion.div>
  );
}
