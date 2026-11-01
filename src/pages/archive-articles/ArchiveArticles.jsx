import { Button } from '@base-ui/react';

import Article from '../homepage/Article';

const articles = [
  {
    id: 1,
    title: 'چطور React را در ۳۰ روز یاد بگیریم؟',
    description:
      'مسیر یادگیری React از صفر با تمرین عملی، پروژه واقعی و برنامه روزانه.',
    image: '/images/react.png',
    slug: 'learn-react-30-days',
    readTime: 8,
    date: '۱۴۰۳/۰۵/۱۲',
    time: '20 دقیقه پیش',
  },
  {
    id: 2,
    title: '۱۰ تکنیک حرفه‌ای برای بهینه‌سازی Next.js',
    description:
      'با کشینگ، Image Optimization و App Router سرعت اپلیکیشن خود را چند برابر کنید.',
    image: '/images/next.png',
    slug: 'nextjs-optimization-techniques',
    readTime: 12,
    date: '۱۴۰۳/۰۵/۱۰',

    time: '43 دقیقه پیش',
  },
  {
    id: 3,
    title: 'اصول طراحی UI با Tailwind CSS',
    description:
      'چگونه با Tailwind CSS رابط کاربری حرفه‌ای و ریسپانسیو بسازیم.',
    image: '/images/tailwind.jpg',
    slug: 'ui-design-with-tailwind',
    readTime: 10,
    date: '۱۴۰۳/۰۵/۰۸',
    time: '3 روز پیش',
  },
  {
    id: 4,
    title: 'مفاهیم پیشرفته JavaScript که باید بدانید',
    description:
      'Closure، Prototype، Event Loop و مفاهیمی که هر توسعه‌دهنده باید بداند.',
    image: '/images/javascript.jpg',
    slug: 'advanced-javascript-concepts',
    readTime: 15,
    date: '۱۴۰۳/۰۵/۰۷',

    time: '9 روز پیش',
  },
  {
    id: 5,
    title: 'TypeScript در پروژه‌های بزرگ',
    description:
      'بهترین روش‌های استفاده از TypeScript برای پروژه‌های تیمی و مقیاس‌پذیر.',
    image: '/images/typescript.png',
    slug: 'typescript-in-large-projects',
    readTime: 9,
    date: '۱۴۰۳/۰۵/۰۵',
    time: '9 روز پیش',
  },
  {
    id: 6,
    title: 'ساخت REST API با Node.js و Express',
    description:
      'قدم به قدم یک API امن و مقیاس‌پذیر با Node.js و Express بسازید.',
    image: '/images/nodejs.jpg',
    slug: 'build-rest-api-with-nodejs',
    readTime: 18,
    date: '۱۴۰۳/۰۵/۰۴',
    time: '9 روز پیش',
  },
  {
    id: 7,
    title: 'طراحی دیتابیس با MongoDB',
    description:
      'مدل‌سازی داده، Indexes و بهترین روش‌ها برای MongoDB در پروژه‌های واقعی.',
    image: '/images/mongodb.png',
    slug: 'mongodb-database-design',
    readTime: 11,
    date: '۱۴۰۳/۰۵/۰۲',
    time: '9 روز پیش',
  },
  {
    id: 8,
    title: 'Git و GitHub برای همکاری تیمی',
    description:
      'شاخه‌بندی، Merge، Pull Request و بهترین روش‌های همکاری حرفه‌ای با Git.',
    image: '/images/git.jpg',
    slug: 'git-github-for-teams',
    readTime: 7,
    date: '۱۴۰۳/۰۴/۲۸',
    time: '9 روز پیش',
  },
  {
    id: 9,
    title: 'TypeScript پیشرفته و Type System',
    description:
      'Generics، Utility Types و الگوهای پیشرفته برای TypeScript حرفه‌ای.',
    image: '/images/typescript.png',
    slug: 'advanced-typescript-type-system',
    readTime: 14,
    date: '۱۴۰۳/۰۴/۲۵',
    time: '9 روز پیش',
  },
];

export default function ArchiveArticles() {
  return (
    <section className="pt-28 pb-32 md:py-45 lg:pr-40">
      <div className="grid grid-cols-1 gap-24 sm:grid-cols-2">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
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
