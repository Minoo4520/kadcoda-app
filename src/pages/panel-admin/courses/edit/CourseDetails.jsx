import { motion } from 'framer-motion';

import Field from '../../../../components/ui/Field';
import FilterSelect from '../../../../components/ui/FilterSelect';
import SectionHeader from '../../../../components/ui/SectionHeader';

const inputClass =
  'w-full rounded-xl bg-[#E4E9F2] px-12 py-10 text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] outline-none transition';

const levelOptions = [
  { value: '', label: 'انتخاب سطح دوره' },
  { value: 'beginner', label: 'مبتدی' },
  { value: 'intermediate', label: 'متوسط' },
  { value: 'advanced', label: 'پیشرفته' },
];

const statusOptions = [
  { value: 'draft', label: 'پیش‌نویس' },
  { value: 'published', label: 'منتشر شده' },
  { value: 'archived', label: 'آرشیو شده' },
];

const categoryOptions = [
  { value: '', label: 'انتخاب دسته‌بندی' },
  { value: '1', label: 'پایتون' },
  { value: '2', label: 'فرانت‌اند' },
  { value: '3', label: 'بک‌اند' },
  { value: '4', label: 'طراحی' },
  { value: '5', label: 'علم داده' },
];

const teacherOptions = [
  { value: '', label: 'انتخاب مدرس' },
  { value: '1', label: 'مریم احمدی' },
  { value: '2', label: 'داود بهمنی' },
  { value: '3', label: 'سارا محمدی' },
  { value: '4', label: 'علی رضایی' },
];

export default function CourseDetails({ form, onChange }) {
  const set = (key) => (v) => onChange((prev) => ({ ...prev, [key]: v }));

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,6px_6px_16px_0px_#A3B1C680]"
    >
      <SectionHeader title="جزئیات دوره" />
      <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
        <Field label="سطح دوره" required>
          <FilterSelect
            options={levelOptions}
            value={form.level}
            onChange={set('level')}
          />
        </Field>
        <Field label="مدت زمان">
          <input
            type="text"
            value={form.duration}
            onChange={(e) => set('duration')(e.target.value)}
            placeholder="مثلاً ۲۸ ساعت"
            className={inputClass}
          />
        </Field>
        <Field label="وضعیت">
          <FilterSelect
            options={statusOptions}
            value={form.status}
            onChange={set('status')}
          />
        </Field>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
        <Field label="قیمت (تومان)" required>
          <input
            type="number"
            value={form.price}
            onChange={(e) => set('price')(e.target.value)}
            placeholder="۱۲۰۰۰۰۰"
            className={inputClass}
          />
        </Field>
        <Field
          label="قیمت با تخفیف (تومان)"
          hint="در صورت خالی بودن، بدون تخفیف نمایش داده می‌شود"
        >
          <input
            type="number"
            value={form.discount_price}
            onChange={(e) => set('discount_price')(e.target.value)}
            placeholder="۹۸۰۰۰۰"
            className={inputClass}
          />
        </Field>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
        <Field label="دسته‌بندی">
          <FilterSelect
            options={categoryOptions}
            value={form.category_id}
            onChange={set('category_id')}
          />
        </Field>
        <Field label="مدرس">
          <FilterSelect
            options={teacherOptions}
            value={form.teacher_id}
            onChange={set('teacher_id')}
          />
        </Field>
      </div>
    </motion.div>
  );
}
