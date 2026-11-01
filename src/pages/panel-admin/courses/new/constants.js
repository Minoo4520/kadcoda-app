export const levelOptions = [
  { value: '', label: 'انتخاب سطح دوره' },
  { value: 'beginner', label: 'مبتدی' },
  { value: 'intermediate', label: 'متوسط' },
  { value: 'advanced', label: 'پیشرفته' },
];

export const statusOptions = [
  { value: 'draft', label: 'پیش‌نویس' },
  { value: 'published', label: 'منتشر شده' },
  { value: 'archived', label: 'آرشیو شده' },
];

export const categoryOptions = [
  { value: '', label: 'انتخاب دسته‌بندی' },
  { value: '1', label: 'پایتون' },
  { value: '2', label: 'فرانت‌اند' },
  { value: '3', label: 'بک‌اند' },
  { value: '4', label: 'طراحی' },
  { value: '5', label: 'علم داده' },
];

export const teacherOptions = [
  { value: '', label: 'انتخاب مدرس' },
  { value: '1', label: 'مریم احمدی' },
  { value: '2', label: 'داود بهمنی' },
  { value: '3', label: 'سارا محمدی' },
  { value: '4', label: 'علی رضایی' },
];

export const inputClass =
  'w-full rounded-xl bg-[#E4E9F2] px-12 py-10 text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] outline-none transition';

export const slugify = (text) =>
  text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\u0600-\u06FF-]/g, '');
