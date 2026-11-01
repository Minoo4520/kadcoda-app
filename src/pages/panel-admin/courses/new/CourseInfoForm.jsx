import { useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router';

import Field from '../../../../components/ui/Field';
import FileInput from '../../../../components/ui/FileInput';
import FilterSelect from '../../../../components/ui/FilterSelect';
import SectionHeader from '../../../../components/ui/SectionHeader';
import ToggleSwitch from '../../../../components/ui/ToggleSwitch';
import {
  categoryOptions,
  inputClass,
  levelOptions,
  slugify,
  statusOptions,
  teacherOptions,
} from './constants';

export default function CourseInfoForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: '',
    slug: '',
    description: '',
    cover_img: null,
    cover_video: null,
    duration: '',
    status: 'draft',
    level: '',
    has_support: false,
    is_active: true,
    price: '',
    discount_price: '',
    category_id: '',
    teacher_id: '',
  });
  const [slugTouched, setSlugTouched] = useState(false);
  const [coverImgName, setCoverImgName] = useState('');
  const [coverVideoName, setCoverVideoName] = useState('');

  const canSubmit =
    form.title.trim() !== '' &&
    form.slug.trim() !== '' &&
    form.description.trim() !== '' &&
    form.level !== '' &&
    form.price.toString().trim() !== '';

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
    onSubmit?.(form);
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
          ساخت دوره جدید
          <span className="bg-secondary-300 absolute top-2 -left-10 h-16 w-4 rounded-full shadow-[0px_0px_6px_0px_#F7B928AA]"></span>
        </h1>
        <p className="pt-8 text-[12px] text-[#8A96B0]">
          اطلاعات دوره را وارد کنید و در مرحله بعد محتوای آن را بسازید
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
          <Field label="عنوان دوره" required>
            <input
              type="text"
              value={form.title}
              onChange={handleTitleChange}
              placeholder="مثلاً دوره جامع پایتون"
              className={inputClass}
            />
          </Field>
          <Field
            label="اسلاگ (Slug)"
            required
            hint="در URL دوره استفاده می‌شود"
          >
            <input
              type="text"
              dir="ltr"
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                setForm((prev) => ({ ...prev, slug: e.target.value }));
              }}
              placeholder="python-complete-course"
              className={inputClass}
            />
          </Field>
        </div>
        <Field label="توضیحات" required className="mt-20">
          <textarea
            rows={5}
            value={form.description}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="توضیحات کامل دوره، سرفصل‌ها، مخاطب هدف..."
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
        <SectionHeader title="جزئیات دوره" />
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
          <Field label="سطح دوره" required>
            <FilterSelect
              options={levelOptions}
              onChange={(v) => setForm((prev) => ({ ...prev, level: v }))}
            />
          </Field>
          <Field label="مدت زمان">
            <input
              type="text"
              value={form.duration}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, duration: e.target.value }))
              }
              placeholder="مثلاً ۲۸ ساعت"
              className={inputClass}
            />
          </Field>
          <Field label="وضعیت">
            <FilterSelect
              options={statusOptions}
              onChange={(v) => setForm((prev) => ({ ...prev, status: v }))}
            />
          </Field>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
          <Field label="قیمت (تومان)" required>
            <input
              type="number"
              value={form.price}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, price: e.target.value }))
              }
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
              onChange={(e) =>
                setForm((prev) => ({ ...prev, discount_price: e.target.value }))
              }
              placeholder="۹۸۰۰۰۰"
              className={inputClass}
            />
          </Field>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
          <Field label="دسته‌بندی">
            <FilterSelect
              options={categoryOptions}
              onChange={(v) => setForm((prev) => ({ ...prev, category_id: v }))}
            />
          </Field>
          <Field label="مدرس">
            <FilterSelect
              options={teacherOptions}
              onChange={(v) => setForm((prev) => ({ ...prev, teacher_id: v }))}
            />
          </Field>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <SectionHeader title="رسانه و تنظیمات" />
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <Field label="تصویر کاور" hint="JPG یا PNG، حداکثر ۲ مگابایت">
            <FileInput
              fileName={coverImgName}
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setCoverImgName(f.name);
                  setForm((prev) => ({ ...prev, cover_img: f }));
                }
              }}
            />
          </Field>
          <Field label="ویدیو کاور" hint="ویدیوی معرفی کوتاه دوره">
            <FileInput
              fileName={coverVideoName}
              accept="video/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setCoverVideoName(f.name);
                  setForm((prev) => ({ ...prev, cover_video: f }));
                }
              }}
            />
          </Field>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
          <ToggleSwitch
            checked={form.has_support}
            onChange={(v) => setForm((prev) => ({ ...prev, has_support: v }))}
            label="پشتیبانی دارد"
            description="امکان ارسال تیکت برای دانشجویان"
          />
          <ToggleSwitch
            checked={form.is_active}
            onChange={(v) => setForm((prev) => ({ ...prev, is_active: v }))}
            label="دوره فعال باشد"
            description="در صورت غیرفعال بودن نمایش داده نمی‌شود"
          />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col-reverse gap-12 sm:flex-row sm:justify-end">
        <Link
          to="/panel/admin/courses"
          className="rounded-xl bg-[#EDF1F8] px-20 py-12 text-center text-[11px] font-bold text-[#8A96B0] shadow-[-3px_-3px_7px_0px_#FFFFFFE5,_4px_4px_10px_0px_#A3B1C673] transition duration-200 hover:text-[#1C2B4A]"
        >
          انصراف
        </Link>
        <button
          type="submit"
          disabled={!canSubmit}
          className={`to-primary-600 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-20 py-12 text-[11px] font-black text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 ${
            canSubmit
              ? 'cursor-pointer hover:brightness-110'
              : 'cursor-not-allowed opacity-50'
          }`}
        >
          ایجاد دوره و ادامه ←
        </button>
      </div>
    </form>
  );
}
