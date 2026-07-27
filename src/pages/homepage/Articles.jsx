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
    <section className="py-40">
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-40 text-center">
          <h2 className="text-primary text-2xl font-black">آخرین مقالات </h2>

          <p className="text-16 text-alcoal mt-12">
            جدیدترین مقالات و محتوا های آموزشی منتشر شده{' '}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-28 lg:grid-cols-3">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
