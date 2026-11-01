import { motion } from 'framer-motion';

import Field from '../../../../components/ui/Field';
import SectionHeader from '../../../../components/ui/SectionHeader';

const inputClass =
  'w-full rounded-xl bg-[#E4E9F2] px-12 py-10 text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] outline-none transition';

export default function CourseBasicInfo({ form, slugTouched, onChange }) {
  const slugify = (text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\u0600-\u06FF-]/g, '');

  const handleTitleChange = (e) => {
    const title = e.target.value;
    onChange((prev) => ({
      ...prev,
      title,
      slug: slugTouched ? prev.slug : slugify(title),
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
      className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
    >
      <SectionHeader title="اطلاعات پایه" />
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <Field label="عنوان دوره" required>
          <input
            type="text"
            value={form.title}
            onChange={handleTitleChange}
            placeholder="عنوان دوره"
            className={inputClass}
          />
        </Field>
        <Field label="اسلاگ (Slug)" required hint="در URL دوره استفاده می‌شود">
          <input
            type="text"
            dir="ltr"
            value={form.slug}
            onChange={(e) =>
              onChange((prev) => ({ ...prev, slug: e.target.value }))
            }
            placeholder="course-slug"
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="توضیحات" required className="mt-20">
        <textarea
          rows={5}
          value={form.description}
          onChange={(e) =>
            onChange((prev) => ({ ...prev, description: e.target.value }))
          }
          placeholder="توضیحات کامل دوره، سرفصل‌ها، مخاطب هدف..."
          className={`${inputClass} resize-none`}
        />
      </Field>
    </motion.div>
  );
}
