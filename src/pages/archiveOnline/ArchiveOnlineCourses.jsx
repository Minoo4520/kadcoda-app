import { Button } from '@base-ui/react';

import CourseCard from '../homepage/CourseCard';

const courses = [
  {
    id: 10,
    title: 'دوره Django (پایتون)',
    description: 'توسعه وب حرفه‌ای با جنگو، ساخت API و پروژه فروشگاهی کامل.',
    image: '/images/django.jpg',
    slug: 'django-course',
    hours: 30,
    price: '2,850,000 تومان',
  },
  {
    id: 11,
    title: 'دوره Vue.js',
    description:
      'آموزش جامع Vue.js از مفاهیم پایه تا Composition API و پروژه‌های واقعی.',
    image: '/images/vue.webp',
    slug: 'vue-course',
    hours: 18,
    price: '1,750,000 تومان',
  },
  {
    id: 12,
    title: 'دوره Docker و DevOps',
    description: 'کانتینر سازی، داکر کومپوز و استقرار برنامه‌ها روی سرور.',
    image: '/images/docker.png',
    slug: 'docker-course',
    hours: 16,
    price: '1,950,000 تومان',
  },
  {
    id: 13,
    title: 'دوره GraphQL',
    description: 'جایگزین قدرتمند REST، ساخت Query و Mutation پیشرفته.',
    image: '/images/graph.png',
    slug: 'graphql-course',
    hours: 14,
    price: '1,850,000 تومان',
  },
  {
    id: 14,
    title: 'دوره زبان Go (گولنگ)',
    description: 'توسعه نرم‌افزارهای هم‌روند و با کارایی بالا با زبان گو.',
    image: '/images/golang.jpg',
    slug: 'go-course',
    hours: 22,
    price: '2,250,000 تومان',
  },
  {
    id: 15,
    title: 'دوره Rust',
    description: 'برنامه‌نویسی سیستمی و امن با زبان راست به همراه پروژه عملی.',
    image: '/images/rust.png',
    slug: 'rust-course',
    hours: 26,
    price: '2,450,000 تومان',
  },
  {
    id: 16,
    title: 'دوره AWS (خدمات ابری)',
    description: 'کار با EC2، S3، Lambda و مدیریت زیرساخت در فضای ابری آمازون.',
    image: '/images/aws.avif',
    slug: 'aws-course',
    hours: 20,
    price: '2,150,000 تومان',
  },
  {
    id: 17,
    title: 'دوره لینوکس و خط فرمان',
    description:
      'مدیریت سرور، اسکریپت‌نویسی Bash و عیب‌یابی سیستم‌های لینوکسی.',
    image: '/images/linux.png',
    slug: 'linux-course',
    hours: 12,
    price: '1,250,000 تومان',
  },
  {
    id: 18,
    title: 'دوره علوم داده با پایتون',
    description:
      'تحلیل داده، Pandas، NumPy و مصورسازی با Matplotlib و Seaborn.',
    image: '/images/pandas.png',
    slug: 'data-science-course',
    hours: 32,
    price: '2,950,000 تومان',
  },
];

export default function ArchiveOnlineCourses() {
  return (
    <section className="pt-28 pb-32 md:py-45 lg:pr-40">
      <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            mobileHorizontal={true}
            isPresential={true}
          />
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
