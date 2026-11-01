import { useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router';

import ChapterCard from '../../../../components/ui/ChapterCard';
import Field from '../../../../components/ui/Field';
import FileInput from '../../../../components/ui/FileInput';
import FilterSelect from '../../../../components/ui/FilterSelect';
import SectionHeader from '../../../../components/ui/SectionHeader';
import ToggleSwitch from '../../../../components/ui/ToggleSwitch';

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

const mockCourse = {
  id: 2,
  title: 'دوره React پیشرفته با پروژه عملی',
  slug: 'advanced-react-course',
  description:
    'در این دوره به‌صورت عمیق به مباحث پیشرفته React می‌پردازیم: Hooks پیشرفته، Context، Redux Toolkit، React Query، تست‌نویسی و در نهایت ساخت یک پروژه‌ی واقعی.',
  cover_img: null,
  cover_img_name: 'react-advanced-cover.jpg',
  cover_video: null,
  cover_video_name: 'react-advanced-intro.mp4',
  duration: '۲۸ ساعت',
  status: 'published',
  level: 'advanced',
  has_support: true,
  is_active: true,
  price: '1500000',
  discount_price: '1200000',
  category_id: '2',
  teacher_id: '2',
  updated_at: '۱۴۰۳/۰۵/۱۰',
  chapters: [
    {
      id: 101,
      title: 'مقدمه و آشنایی با معماری React',
      sort_order: 1,
      episodes: [
        {
          id: 1001,
          title: 'معرفی دوره و پیش‌نیازها',
          duration: '۸ دقیقه',
          video: 'intro.mp4',
          is_free: true,
          sort_order: 1,
        },
        {
          id: 1002,
          title: 'ساختار پروژه و تنظیمات اولیه',
          duration: '۱۴ دقیقه',
          video: 'setup.mp4',
          is_free: false,
          sort_order: 2,
        },
      ],
    },
    {
      id: 102,
      title: 'Hooks پیشرفته',
      sort_order: 2,
      episodes: [
        {
          id: 1003,
          title: 'useReducer در عمل',
          duration: '۲۲ دقیقه',
          video: 'use-reducer.mp4',
          is_free: false,
          sort_order: 1,
        },
        {
          id: 1004,
          title: 'Custom Hooks و الگوهای رایج',
          duration: '۱۸ دقیقه',
          video: 'custom-hooks.mp4',
          is_free: false,
          sort_order: 2,
        },
      ],
    },
  ],
};

const inputClass =
  'w-full rounded-xl bg-[#E4E9F2] px-12 py-10 text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] outline-none transition';

export default function PanelAdminCourseEdit() {
  const [form, setForm] = useState({
    title: mockCourse.title,
    slug: mockCourse.slug,
    description: mockCourse.description,
    cover_img: mockCourse.cover_img,
    cover_video: mockCourse.cover_video,
    duration: mockCourse.duration,
    status: mockCourse.status,
    level: mockCourse.level,
    has_support: mockCourse.has_support,
    is_active: mockCourse.is_active,
    price: mockCourse.price,
    discount_price: mockCourse.discount_price,
    category_id: mockCourse.category_id,
    teacher_id: mockCourse.teacher_id,
  });
  const [slugTouched, setSlugTouched] = useState(true);
  const [coverImgName, setCoverImgName] = useState(mockCourse.cover_img_name);
  const [coverVideoName, setCoverVideoName] = useState(
    mockCourse.cover_video_name,
  );
  const [chapters, setChapters] = useState(mockCourse.chapters);
  const [newChapterTitle, setNewChapterTitle] = useState('');

  const canSubmit =
    form.title.trim() !== '' &&
    form.slug.trim() !== '' &&
    form.description.trim() !== '' &&
    form.level !== '' &&
    form.price.toString().trim() !== '';

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

  const addChapter = () => {
    if (!newChapterTitle.trim()) return;
    setChapters((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newChapterTitle.trim(),
        sort_order: prev.length + 1,
        episodes: [],
      },
    ]);
    setNewChapterTitle('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    console.log('Update course payload:', { ...form, chapters });
  };

  return (
    <form onSubmit={handleSubmit}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="relative text-lg font-black text-[#1C2B4A]">
            ویرایش دوره
          </h1>
          <p className="pt-8 text-[12px] text-[#8A96B0]">
            شناسه دوره:{' '}
            <span className="text-primary-600 font-black">
              #{mockCourse.id}
            </span>{' '}
            · آخرین به‌روزرسانی: {mockCourse.updated_at}
          </p>
        </div>

        <span className="w-fit rounded-full bg-[#FFF3DC] px-14 py-6 text-[10px] font-bold text-[#B07D00] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
          حالت ویرایش
        </span>
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
              placeholder="عنوان دوره"
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
              value={form.level}
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
              value={form.status}
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
                setForm((prev) => ({
                  ...prev,
                  discount_price: e.target.value,
                }))
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
              value={form.category_id}
              onChange={(v) => setForm((prev) => ({ ...prev, category_id: v }))}
            />
          </Field>
          <Field label="مدرس">
            <FilterSelect
              options={teacherOptions}
              value={form.teacher_id}
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
          <Field
            label="تصویر کاور"
            hint={
              coverImgName
                ? 'برای تغییر، فایل جدید انتخاب کنید'
                : 'JPG یا PNG، حداکثر ۲ مگابایت'
            }
          >
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
          <Field
            label="ویدیو کاور"
            hint={
              coverVideoName
                ? 'برای تغییر، فایل جدید انتخاب کنید'
                : 'ویدیوی معرفی کوتاه دوره'
            }
          >
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

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <SectionHeader title="محتوای دوره" />

        <div className="flex flex-col gap-12 sm:flex-row">
          <input
            type="text"
            value={newChapterTitle}
            onChange={(e) => setNewChapterTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addChapter();
              }
            }}
            placeholder={`عنوان فصل ${chapters.length + 1}...`}
            className={`${inputClass} flex-1`}
          />
          <button
            type="button"
            onClick={addChapter}
            disabled={!newChapterTitle.trim()}
            className={`to-primary-600 inline-flex items-center justify-center gap-8 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-20 py-10 text-[11px] font-black whitespace-nowrap text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 hover:brightness-110 ${!newChapterTitle.trim() ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-16 w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            افزودن فصل
          </button>
        </div>
        <p className="mt-8 text-[10px] text-[#8A96B0]">
          ترتیب فصل به‌صورت خودکار تعیین می‌شود (فصل {chapters.length + 1})
        </p>
      </motion.div>

      {chapters.length > 0 && (
        <div className="mt-20 flex flex-col gap-20">
          {chapters.map((chapter, idx) => (
            <ChapterCard key={chapter.id} chapter={chapter} index={idx} />
          ))}
        </div>
      )}

      <div className="mt-20 flex flex-col-reverse gap-12 sm:flex-row sm:justify-end">
        <Link
          to="/panel-admin/courses"
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
          ذخیره تغییرات
        </button>
      </div>
    </form>
  );
}
