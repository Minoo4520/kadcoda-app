import { useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router';

import Field from '../../../../components/ui/Field';
import FileInput from '../../../../components/ui/FileInput';
import FilterSelect from '../../../../components/ui/FilterSelect';
import SectionHeader from '../../../../components/ui/SectionHeader';
import ToggleSwitch from '../../../../components/ui/ToggleSwitch';

const statusOptions = [
  { value: 'draft', label: 'پیش‌نویس' },
  { value: 'published', label: 'منتشر شده' },
  { value: 'archived', label: 'آرشیو شده' },
];

const categoryOptions = [
  { value: '', label: 'انتخاب دسته‌بندی' },
  { value: 'python', label: 'پایتون' },
  { value: 'frontend', label: 'فرانت‌اند' },
  { value: 'backend', label: 'بک‌اند' },
  { value: 'design', label: 'طراحی' },
  { value: 'data', label: 'علم داده' },
];

const inputClass =
  'w-full rounded-xl bg-[#E4E9F2] px-12 py-10 text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] outline-none transition';

export default function PanelAdminArticleCreate() {
  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    cover: null,
    category_id: '',
    status: 'draft',
    tags: '',
    is_published: true,
  });
  const [slugTouched, setSlugTouched] = useState(false);
  const [coverName, setCoverName] = useState('');

  const canSubmit =
    form.title.trim() !== '' &&
    form.slug.trim() !== '' &&
    form.excerpt.trim() !== '' &&
    form.content.trim() !== '' &&
    form.category_id !== '';

  const slugify = (text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\u0600-\u06FF-]/g, '');

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setForm((prev) => ({
      ...prev,
      title,
      slug: slugTouched ? prev.slug : slugify(title),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    console.log('Article payload:', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <h1 className="relative text-lg font-black text-[#1C2B4A]">
          افزودن مقاله جدید
        </h1>
        <p className="pt-8 text-[12px] text-[#8A96B0]">
          اطلاعات مقاله را وارد کنید و در صورت نیاز پیش‌نویس ذخیره نمایید
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
        className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <SectionHeader title="اطلاعات پایه" />
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <Field label="عنوان مقاله" required>
            <input
              type="text"
              value={form.title}
              onChange={handleTitleChange}
              placeholder="مثلاً ۱۰ تکنیک حرفه‌ای برای بهینه‌سازی React"
              className={inputClass}
            />
          </Field>
          <Field
            label="اسلاگ (Slug)"
            required
            hint="در URL مقاله استفاده می‌شود"
          >
            <input
              type="text"
              dir="ltr"
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                setForm((prev) => ({ ...prev, slug: e.target.value }));
              }}
              placeholder="react-optimization-techniques"
              className={inputClass}
            />
          </Field>
        </div>
        <Field
          label="خلاصه مقاله"
          required
          className="mt-20"
          hint="حداکثر ۲ خط، در کارت مقاله نمایش داده می‌شود"
        >
          <textarea
            rows={3}
            value={form.excerpt}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, excerpt: e.target.value }))
            }
            placeholder="خلاصه‌ای کوتاه از محتوای مقاله..."
            className={`${inputClass} resize-none`}
          />
        </Field>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <SectionHeader title="محتوای مقاله" />
        <Field
          label="متن مقاله"
          required
          hint="متن اصلی مقاله را وارد کنید (Markdown یا HTML پشتیبانی می‌شود)"
        >
          <textarea
            rows={14}
            value={form.content}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, content: e.target.value }))
            }
            placeholder="متن کامل مقاله را اینجا بنویسید..."
            className={`${inputClass} resize-y`}
          />
        </Field>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <SectionHeader title="تنظیمات و رسانه" />
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <Field label="تصویر کاور" hint="JPG یا PNG، حداکثر ۲ مگابایت">
            <FileInput
              fileName={coverName}
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setCoverName(f.name);
                  setForm((prev) => ({ ...prev, cover: f }));
                }
              }}
            />
          </Field>
          <Field label="دسته‌بندی" required>
            <FilterSelect
              options={categoryOptions}
              onChange={(v) => setForm((prev) => ({ ...prev, category_id: v }))}
            />
          </Field>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
          <Field label="وضعیت انتشار">
            <FilterSelect
              options={statusOptions}
              onChange={(v) => setForm((prev) => ({ ...prev, status: v }))}
            />
          </Field>
          <Field label="برچسب‌ها" hint="با کاما جدا کنید">
            <input
              type="text"
              value={form.tags}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, tags: e.target.value }))
              }
              placeholder="react, performance, frontend"
              className={inputClass}
            />
          </Field>
        </div>

        <div className="mt-20">
          <ToggleSwitch
            checked={form.is_published}
            onChange={(v) => setForm((prev) => ({ ...prev, is_published: v }))}
            label="مقاله منتشر شود"
            description="در صورت خاموش بودن به‌عنوان پیش‌نویس ذخیره می‌شود"
          />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col-reverse gap-12 sm:flex-row sm:justify-end">
        <Link
          to="/panel/admin/articles"
          className="rounded-xl bg-[#EDF1F8] px-20 py-12 text-center text-[11px] font-bold text-[#8A96B0] shadow-[-3px_-3px_7px_0px_#FFFFFFE5,_4px_4px_10px_0px_#A3B1C673] transition duration-200 hover:text-[#1C2B4A]"
        >
          انصراف
        </Link>
        <button
          type="button"
          className="cursor-pointer rounded-xl bg-[#EDF1F8] px-20 py-12 text-[11px] font-bold text-[#8A96B0] shadow-[-3px_-3px_7px_0px_#FFFFFFE5,_4px_4px_10px_0px_#A3B1C673] transition duration-200 hover:text-[#1C2B4A]"
        >
          ذخیره پیش‌نویس
        </button>
        <button
          type="submit"
          disabled={!canSubmit}
          className={`to-primary-600 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-20 py-12 text-[11px] font-black text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 ${canSubmit ? 'cursor-pointer hover:brightness-110' : 'cursor-not-allowed opacity-50'}`}
        >
          انتشار مقاله
        </button>
      </div>
    </form>
  );
}
