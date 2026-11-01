import { useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router';

import FilterSelect from '../../../components/ui/FilterSelect';
import Stat from '../../../components/ui/Stat';

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const categories = [
  { value: 'all', label: 'همه دسته‌بندی‌ها' },
  { value: 'python', label: 'پایتون' },
  { value: 'frontend', label: 'فرانت‌اند' },
  { value: 'backend', label: 'بک‌اند' },
  { value: 'design', label: 'طراحی' },
  { value: 'data', label: 'علم داده' },
];

const courses = [
  {
    id: 1,
    title: 'دوره جامع پایتون از صفر تا پیشرفته',
    instructor: 'مریم احمدی',
    category: 'پایتون',
    categoryClass: 'bg-[#DCE5F4] text-[#193B73]',
    status: 'فعال',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    price: '۱,۲۰۰,۰۰۰',
    students: 245,
    lessons: 42,
    duration: '۳۲ ساعت',
    cover: '/images/aws.avif',
  },
  {
    id: 2,
    title: 'دوره React پیشرفته با پروژه عملی',
    instructor: 'داود بهمنی',
    category: 'فرانت‌اند',
    categoryClass: 'bg-[#FFF3DC] text-[#B07D00]',
    status: 'فعال',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    price: '۱,۵۰۰,۰۰۰',
    students: 189,
    lessons: 36,
    duration: '۲۸ ساعت',
    cover: '/images/react.png',
  },
  {
    id: 3,
    title: 'دوره UI/UX از مبتدی تا حرفه‌ای',
    instructor: 'سارا محمدی',
    category: 'طراحی',
    categoryClass: 'bg-[#FCE7F3] text-[#BE185D]',
    status: 'فعال',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    price: '۸۵۰,۰۰۰',
    students: 320,
    lessons: 28,
    duration: '۲۲ ساعت',
    cover: '/images/tailwind.jpg',
  },
  {
    id: 4,
    title: 'دوره Node.js و ساخت REST API',
    instructor: 'علی رضایی',
    category: 'بک‌اند',
    categoryClass: 'bg-[#EDE9FE] text-[#5B21B6]',
    status: 'در حال تدوین',
    statusClass: 'bg-[#FFF3DC] text-[#B07D00]',
    price: '۱,۳۰۰,۰۰۰',
    students: 156,
    lessons: 30,
    duration: '۲۵ ساعت',
    cover: '/images/nodejs.jpg',
  },
  {
    id: 5,
    title: 'دوره تحلیل داده با Python و Pandas',
    instructor: 'زهرا نوری',
    category: 'علم داده',
    categoryClass: 'bg-[#DCFCE7] text-[#15803D]',
    status: 'فعال',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    price: '۱,۱۰۰,۰۰۰',
    students: 98,
    lessons: 24,
    duration: '۲۰ ساعت',
    cover: '/images/graph.png',
  },
  {
    id: 6,
    title: 'دوره Django برای توسعه وب',
    instructor: 'مریم احمدی',
    category: 'پایتون',
    categoryClass: 'bg-[#DCE5F4] text-[#193B73]',
    status: 'غیرفعال',
    statusClass: 'bg-[#FEE2E2] text-[#B91C1C]',
    price: '۱,۴۰۰,۰۰۰',
    students: 67,
    lessons: 32,
    duration: '۲۶ ساعت',
    cover: '/images/django.jpg',
  },
];

export default function PanelAdminCourses() {
  const [onlyActive, setOnlyActive] = useState(false);

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
            مدیریت دوره‌ها
          </h1>
          <p className="pt-8 text-[12px] text-[#8A96B0]">
            ایجاد، ویرایش و مدیریت تمام دوره‌های پلتفرم آموزش کدکدا
          </p>
        </div>

        <Link
          to="/panel-admin/newCourse"
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
          افزودن دوره جدید
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
            placeholder="جستجوی دوره، مدرس یا دسته‌بندی..."
            className="w-full bg-transparent text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] outline-none"
          />
        </div>

        <div className="flex flex-col gap-12 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => setOnlyActive((prev) => !prev)}
            className={`inline-flex cursor-pointer items-center gap-8 rounded-xl px-16 py-10 text-[11px] font-bold whitespace-nowrap transition duration-200 ${
              onlyActive
                ? 'text-primary-600 bg-[#DCE5F4] shadow-[inset_-2px_-2px_3px_0px_#FFFFFFCC,_inset_2px_2px_4px_0px_#A3B1C666]'
                : 'bg-[#EDF1F8] text-[#8A96B0] shadow-[-3px_-3px_7px_0px_#FFFFFFE5,_4px_4px_10px_0px_#A3B1C673] hover:text-[#1C2B4A]'
            }`}
          >
            <span
              className={`h-10 w-10 rounded-full transition duration-200 ${
                onlyActive
                  ? 'bg-[#22C55E] shadow-[0_0_6px_0_#22C55EAA]'
                  : 'bg-[#A3B1C6]'
              }`}
            ></span>
            فقط دوره‌های فعال
          </button>

          <div className="sm:w-200">
            <FilterSelect options={categories} />
          </div>
        </div>
      </motion.div>

      <motion.section
        initial="hidden"
        animate="show"
        className="mt-25 grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3"
      >
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            variants={cardAnim}
            transition={{
              duration: 0.45,
              delay: i * 0.06,
              ease: 'easeOut',
            }}
            whileHover={{ y: -4 }}
            className="flex flex-col gap-16 rounded-2xl bg-[#EDF1F8] p-16 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
          >
            <div className="relative h-140 w-full overflow-hidden rounded-xl shadow-[inset_1px_1px_4px_0px_#FFFFFF40,_3px_3px_8px_0px_#193B734D]">
              <img
                src={course.cover}
                alt={course.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />

              <span
                className={`absolute top-10 right-10 rounded-full px-10 py-2 text-[10px] font-bold shadow-[0_0_8px_0_#00000026] ${course.statusClass}`}
              >
                {course.status}
              </span>
            </div>

            <span
              className={`w-fit rounded-full px-10 py-2 text-[10px] font-bold ${course.categoryClass}`}
            >
              {course.category}
            </span>

            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] font-black text-[#1C2B4A]">
                {course.title}
              </h3>
              <p className="text-[11px] text-[#8A96B0]">
                مدرس: <span className="font-bold">{course.instructor}</span>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 rounded-lg bg-[#E4E9F2] p-10 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
              <Stat label="دانشجو" value={course.students} />
              <Stat label="جلسات" value={course.lessons} />
              <Stat label="مدت" value={course.duration} />
            </div>

            <div className="flex items-center justify-between border-t border-t-[#A3B1C640] pt-12">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-[#8A96B0]">قیمت</span>
                <span className="text-primary-600 text-sm font-black">
                  {course.price}{' '}
                  <span className="text-[10px] font-bold text-[#8A96B0]">
                    تومان
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-8">
                <Link
                  to="/panel-admin/editCourse"
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
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}
