import { Button } from '@base-ui/react';

import CourseCard from '../homepage/CourseCard';

const courses = [
  {
    id: 1,
    title: 'دوره جامع React',
    description:
      'آموزش کامل React از مقدماتی تا پیشرفته همراه با پروژه‌های واقعی.',
    image: '/images/react.png',
    slug: 'react-course',
    hours: 18,
    price: '1,950,000 تومان',
  },
  {
    id: 2,
    title: 'دوره Next.js',
    description:
      'ساخت پروژه‌های مدرن با Next.js، SSR، App Router و API Routes.',
    image: '/images/next.png',
    slug: 'nextjs-course',
    hours: 22,
    price: '2,350,000 تومان',
  },
  {
    id: 3,
    title: 'دوره Tailwind CSS',
    description: 'طراحی رابط کاربری حرفه‌ای با Tailwind CSS و پروژه عملی.',
    image: '/images/tailwind.jpg',
    slug: 'tailwind-course',
    hours: 12,
    price: '1,250,000 تومان',
  },
  {
    id: 4,
    title: 'دوره JavaScript پیشرفته',
    description:
      'یادگیری مفاهیم پیشرفته جاوااسکریپت همراه با مثال‌های کاربردی.',
    image: '/images/javascript.jpg',
    slug: 'javascript-course',
    hours: 25,
    price: '2,150,000 تومان',
  },
  {
    id: 5,
    title: 'دوره TypeScript',
    description: 'تسلط بر TypeScript برای توسعه پروژه‌های بزرگ و حرفه‌ای.',
    image: '/images/typescript.png',
    slug: 'typescript-course',
    hours: 16,
    price: '1,650,000 تومان',
  },
  {
    id: 6,
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
  {
    id: 9,
    title: 'دوره TypeScript',
    description: 'تسلط بر TypeScript برای توسعه پروژه‌های بزرگ و حرفه‌ای.',
    image: '/images/typescript.png',
    slug: 'typescript-course',
    hours: 16,
    price: '1,800,000 تومان',
  },
];

export default function ArchiveCourses() {
  return (
    <section className="py-45 pr-40">
      <div className="grid grid-cols-2 gap-24 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="flex w-full items-center justify-center">
        <Button className="bg-primary-500 hover:bg-primary-600 text-primary-100 my-auto mt-40 cursor-pointer rounded-sm px-24 py-12 hover:text-white">
          مشاهده بیشتر
        </Button>
      </div>
    </section>
  );
}
