import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'دوره TypeScript',
    description: 'تسلط بر TypeScript برای توسعه پروژه‌های بزرگ و حرفه‌ای.',
    image: '/images/typescript.png',
    slug: 'typescript-course',
    hours: 16,
    price: '1,650,000 تومان',
  },
  {
    id: 3,
    title: 'دوره Node.js',
    description: 'توسعه بک‌اند با Node.js، Express و ساخت REST API.',
    image: '/images/nodejs.jpg',
    slug: 'nodejs-course',
    hours: 28,
    price: '2,650,000 تومان',
  },
  {
    id: 7,
    title: 'دوره MongoDB',
    description: 'کار با MongoDB و طراحی دیتابیس برای پروژه‌های واقعی.',
    image: '/images/mongodb.png',
    slug: 'mongodb-course',
    hours: 14,
    price: '1,450,000 تومان',
  },
  {
    id: 8,
    title: 'دوره Git و GitHub',
    description: 'مدیریت نسخه، همکاری تیمی و کار حرفه‌ای با Git و GitHub.',
    image: '/images/git.jpg',
    slug: 'git-course',
    hours: 10,
    price: '950,000 تومان',
  },
];

export default function OfflineCourses() {
  return (
    <section className="py-56 md:py-72 lg:py-96">
      <div className="container">
        <div className="mb-30">
          <h2 className="text-3xl font-black text-gray-900">دوره های حضوری</h2>
          <p className="mt-6 text-gray-500">
            جدیدترین دوره‌های حضوری برگزار شده
          </p>
        </div>

        <div className="block sm:hidden">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1.2}
            spaceBetween={16}
            centeredSlides={false}
            className="offline-slider !px-4"
            dir="rtl"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course} slide={true} isPresential />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden grid-cols-2 gap-12 sm:grid sm:grid-cols-2 sm:gap-32 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} isPresential />
          ))}
        </div>

        <div className="mt-32 flex w-full items-center justify-center">
          <button className="shadow-primary-900/30 hover:bg-primary-900 hover:text-primary-50 cursor-pointer rounded-md px-10 py-12 text-sm shadow-xs transition duration-300">
            مشاهده همه دوره ها
          </button>
        </div>
      </div>
    </section>
  );
}
