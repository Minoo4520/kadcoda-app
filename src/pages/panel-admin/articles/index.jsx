import { useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router';

import Stat from '../../../components/ui/Stat';

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const articles = [
  {
    id: 1,
    title: 'چطور پایتون را در ۳۰ روز یاد بگیریم؟',
    excerpt:
      'مسیر یادگیری پایتون از صفر با تمرین عملی، منابع رایگان و برنامه‌ی روزانه.',
    author: 'مریم احمدی',
    category: 'پایتون',
    categoryClass: 'bg-[#DCE5F4] text-[#193B73]',
    status: 'منتشر شده',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    views: '۴,۲۱۰',
    date: '۱۴۰۳/۰۵/۱۲',
    readTime: '۸ دقیقه',
    gradient: 'from-[#1E4D9C] to-primary-600',
  },
  {
    id: 2,
    title: '۱۰ تکنیک حرفه‌ای برای بهینه‌سازی React',
    excerpt:
      'با useMemo، useCallback و React.memo سرعت اپلیکیشن خود را چند برابر کنید.',
    author: 'داود بهمنی',
    category: 'فرانت‌اند',
    categoryClass: 'bg-[#FFF3DC] text-[#B07D00]',
    status: 'منتشر شده',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    views: '۳,۱۵۰',
    date: '۱۴۰۳/۰۵/۱۰',
    readTime: '۱۲ دقیقه',
    gradient: 'from-[#7F1D1D] to-[#EF4444]',
  },
  {
    id: 3,
    title: 'اصول طراحی UI از دیدگاه تجربه کاربری',
    excerpt: 'چگونه با رعایت اصول UX، محصولی بسازیم که کاربران عاشقش شوند.',
    author: 'سارا محمدی',
    category: 'طراحی',
    categoryClass: 'bg-[#FCE7F3] text-[#BE185D]',
    status: 'منتشر شده',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    views: '۵,۸۹۰',
    date: '۱۴۰۳/۰۵/۰۸',
    readTime: '۱۰ دقیقه',
    gradient: 'from-[#BE185D] to-[#F472B6]',
  },
  {
    id: 4,
    title: 'راهنمای ساخت REST API با Node.js',
    excerpt: 'قدم به قدم یک API امن و مقیاس‌پذیر با Express و MongoDB بسازید.',
    author: 'علی رضایی',
    category: 'بک‌اند',
    categoryClass: 'bg-[#EDE9FE] text-[#5B21B6]',
    status: 'پیش‌نویس',
    statusClass: 'bg-[#FFF3DC] text-[#B07D00]',
    views: '—',
    date: '۱۴۰۳/۰۵/۰۷',
    readTime: '۱۵ دقیقه',
    gradient: 'from-[#5B21B6] to-[#8B5CF6]',
  },
  {
    id: 5,
    title: 'تحلیل داده با Pandas؛ از صفر تا پروژه واقعی',
    excerpt: 'مهم‌ترین دستورات Pandas که برای تحلیل هر دیتاستی نیاز دارید.',
    author: 'زهرا نوری',
    category: 'علم داده',
    categoryClass: 'bg-[#DCFCE7] text-[#15803D]',
    status: 'منتشر شده',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    views: '۲,۳۴۰',
    date: '۱۴۰۳/۰۵/۰۵',
    readTime: '۹ دقیقه',
    gradient: 'from-[#15803D] to-[#22C55E]',
  },
  {
    id: 6,
    title: 'Django یا FastAPI؟ کدام را انتخاب کنیم',
    excerpt: 'مقایسه‌ی جامع دو فریمورک محبوب پایتون برای توسعه وب.',
    author: 'مریم احمدی',
    category: 'پایتون',
    categoryClass: 'bg-[#DCE5F4] text-[#193B73]',
    status: 'آرشیو شده',
    statusClass: 'bg-[#ECEFF4] text-[#8A96B0]',
    views: '۹۸۰',
    date: '۱۴۰۳/۰۴/۲۸',
    readTime: '۱۱ دقیقه',
    gradient: 'from-[#1E4D9C] to-primary-600',
  },
];

export default function PanelAdminArticles() {
  const [onlyPublished, setOnlyPublished] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="relative text-lg font-black text-[#1C2B4A]">
            مدیریت مقالات
          </h1>
          <p className="pt-8 text-[12px] text-[#8A96B0]">
            ایجاد، ویرایش و مدیریت تمام مقالات پلتفرم آموزش کدکدا
          </p>
        </div>

        <Link
          to="/panel-admin/newArticles"
          type="button"
          className="to-primary-600 inline-flex w-fit cursor-pointer items-center gap-8 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-16 py-10 text-[11px] font-black whitespace-nowrap text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 hover:brightness-110"
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
          افزودن مقاله جدید
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="mt-20 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex items-center gap-8 rounded-xl bg-[#E4E9F2] px-12 py-8 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] lg:w-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-16 w-16 shrink-0 text-[#8A96B0]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
            />
          </svg>
          <input
            type="text"
            placeholder="جستجوی مقاله، نویسنده یا دسته‌بندی..."
            className="w-full bg-transparent text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] outline-none"
          />
        </div>

        <div className="flex flex-col gap-12 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => setOnlyPublished((prev) => !prev)}
            className={`inline-flex cursor-pointer items-center gap-8 rounded-xl px-16 py-10 text-[11px] font-bold whitespace-nowrap transition duration-200 ${
              onlyPublished
                ? 'text-primary-600 bg-[#DCE5F4] shadow-[inset_-2px_-2px_3px_0px_#FFFFFFCC,_inset_2px_2px_4px_0px_#A3B1C666]'
                : 'bg-[#EDF1F8] text-[#8A96B0] shadow-[-3px_-3px_7px_0px_#FFFFFFE5,_4px_4px_10px_0px_#A3B1C673] hover:text-[#1C2B4A]'
            }`}
          >
            <span
              className={`h-10 w-10 rounded-full transition duration-200 ${
                onlyPublished
                  ? 'bg-[#22C55E] shadow-[0_0_6px_0_#22C55EAA]'
                  : 'bg-[#A3B1C6]'
              }`}
            ></span>
            فقط مقالات منتشر شده
          </button>
        </div>
      </motion.div>

      <motion.section
        initial="hidden"
        animate="show"
        className="mt-25 grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3"
      >
        {articles.map((article, i) => (
          <motion.article
            key={article.id}
            variants={cardAnim}
            transition={{
              duration: 0.45,
              delay: i * 0.06,
              ease: 'easeOut',
            }}
            whileHover={{ y: -4 }}
            className="flex flex-col gap-16 rounded-2xl bg-[#EDF1F8] p-16 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
          >
            <div
              className={`relative flex h-140 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${article.gradient} shadow-[inset_1px_1px_4px_0px_#FFFFFF40,_3px_3px_8px_0px_#193B734D]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-56 w-56 text-white/90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>

              <span
                className={`absolute top-10 right-10 rounded-full px-10 py-2 text-[10px] font-bold shadow-[0_0_8px_0_#00000026] ${article.statusClass}`}
              >
                {article.status}
              </span>
            </div>
            ={' '}
            <span
              className={`w-fit rounded-full px-10 py-2 text-[10px] font-bold ${article.categoryClass}`}
            >
              {article.category}
            </span>
            <div className="flex flex-col gap-6">
              <h3 className="line-clamp-2 text-[13px] font-black text-[#1C2B4A]">
                {article.title}
              </h3>
              <p className="line-clamp-2 text-[11px] leading-relaxed text-[#8A96B0]">
                {article.excerpt}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 rounded-lg bg-[#E4E9F2] p-10 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
              <Stat label="بازدید" value={article.views} />
              <Stat label="زمان خواندن" value={article.readTime} />
              <Stat label="تاریخ" value={article.date} />
            </div>
            <div className="flex items-center justify-between border-t border-t-[#A3B1C640] pt-12">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-[#8A96B0]">نویسنده</span>
                <span className="text-primary-600 text-[11px] font-black">
                  {article.author}
                </span>
              </div>

              <div className="flex items-center gap-8">
                <Link
                  to="/panel-admin/editArticle"
                  type="button"
                  aria-label="ویرایش"
                  className="to-primary-600 flex h-32 w-32 cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-[#1E4D9C] text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 hover:brightness-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-16 w-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125"
                    />
                  </svg>
                </Link>

                <button
                  type="button"
                  aria-label="حذف"
                  className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-lg bg-[#FEE2E2] text-[#B91C1C] shadow-[inset_-2px_-2px_3px_0px_#FFFFFFCC,_inset_2px_2px_4px_0px_#A3B1C666] transition duration-200 hover:brightness-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-16 w-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.section>
    </>
  );
}
