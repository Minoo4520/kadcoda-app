import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Article from './Article';

const articles = [
  {
    id: 1,
    image: '/images/blog1.jpg',
    title: 'چرا React هنوز بهترین انتخاب Front-End است؟',
    description:
      'در این مقاله مزایا، معایب و آینده React را بررسی می‌کنیم و می‌بینیم چرا هنوز محبوب‌ترین فریمورک دنیاست.',
    time: '۳ ساعت پیش',
    slug: 'why-react',
  },
  {
    id: 2,
    image: '/images/blog2.jpg',
    title: 'شروع پروژه با Next.js',
    description:
      'راهنمای کامل ساخت اولین پروژه Next.js همراه با App Router و ساختار استاندارد.',
    time: '۵ ساعت پیش',
    slug: 'nextjs-guide',
  },
  {
    id: 3,
    image: '/images/blog3.jpg',
    title: 'بهترین روش یادگیری Tailwind CSS',
    description:
      'اگر می‌خواهید سریع رابط کاربری حرفه‌ای طراحی کنید این مقاله را از دست ندهید.',
    time: '۵ ساعت پیش',
    slug: 'tailwind-learning',
  },
];

export default function Articles() {
  return (
    <section className="py-56 md:py-72 lg:py-96">
      <div className="container mx-auto">
        <div className="mb-40 text-center">
          <h2 className="text-primary text-2xl font-black">آخرین مقالات</h2>
          <p className="text-16 text-alcoal mt-12">
            جدیدترین مقالات و محتواهای آموزشی منتشر شده
          </p>
        </div>

        <div className="block md:hidden">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1.2}
            spaceBetween={16}
            centeredSlides={false}
            className="!px-4"
            dir="rtl"
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <Article article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden grid-cols-1 gap-28 md:grid md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>

        <div className="mt-32 flex w-full items-center justify-center">
          <button className="shadow-primary-900/30 hover:bg-primary-900 hover:text-primary-50 cursor-pointer rounded-md px-10 py-12 text-sm shadow-xs transition duration-300">
            مشاهده همه مقاله ها
          </button>
        </div>
      </div>
    </section>
  );
}
