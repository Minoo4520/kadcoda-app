import Footer from '../../components/layouts/Footer/index';
import Header from '../../components/layouts/Header/index';
import ArticleBreadcrumb from './ArticleBreadcrumb';
import ArticleContent from './ArticleContent';
import ArticleHeader from './ArticleHeader';
import ArticleTags from './ArticleTags';
import RelatedArticles from './RelatedArticles';
import ShareBox from './ShareBox';

const mockArticle = {
  id: 1,
  title: 'چطور React را در ۳۰ روز یاد بگیریم؟',
  excerpt:
    'مسیر یادگیری React از صفر با تمرین عملی، پروژه واقعی و برنامه روزانه — راهنمای کامل برای کسانی که می‌خواهند سریع و درست شروع کنند.',
  cover: '/images/react.png',
  category: 'فرانت‌اند',
  author: {
    name: 'داود بهمنی',
    role: 'مدرس React و Next.js',
    avatar: '/images/pandas.png',
  },
  publishedAt: '۱۴۰۳/۰۵/۱۲',
  readTime: 8,
  views: '۳,۱۵۰',
  tags: ['React', 'JavaScript', 'Frontend', 'Roadmap'],
  content: `
## چرا React؟

React یکی از محبوب‌ترین کتابخانه‌های جاوااسکریپت برای ساخت رابط‌های کاربری است. اگر می‌خواهید در بازار کار امروز رقابتی باشید، یادگیری React یکی از بهترین سرمایه‌گذاری‌های زمانی شماست.

## هفته اول: پایه‌ها

در هفته اول باید با مفاهیم پایه مثل JSX، کامپوننت‌ها و Props آشنا شوید. توصیه می‌کنم روزی ۲ ساعت تمرین عملی داشته باشید.

- JSX و ساختار کامپوننت
- Props و State
- Event Handling
- Conditional Rendering

## هفته دوم: Hooks

بعد از تسلط بر پایه‌ها، نوبت به Hooks می‌رسد. مهم‌ترین‌ها:

1. useState — مدیریت state
2. useEffect — side effects
3. useContext — مدیریت state سراسری
4. useReducer — state پیچیده

> نکته: هیچ‌وقت همه‌ی Hooks را یکجا یاد نگیرید. هر کدام را با یک پروژه‌ی کوچک تمرین کنید.

## هفته سوم: Routing و API

در این هفته با React Router و fetch کردن داده از API آشنا می‌شوید. ساخت یک اپلیکیشن ساده‌ی آب‌وهوا یا لیست فیلم، تمرین خوبی است.

## هفته چهارم: پروژه واقعی

حالا وقت آن است که همه‌چیز را کنار هم بگذارید و یک پروژه‌ی کامل بسازید. پیشنهاد من:

- یک فروشگاه آنلاین کوچک
- یا یک داشبورد مدیریت

## جمع‌بندی

یادگیری React در ۳۰ روز کاملاً ممکن است — به شرطی که هر روز تمرین کنید و از پروژه‌های واقعی شروع کنید. موفق باشید!
  `,
};

const relatedArticles = [
  {
    id: 2,
    title: '۱۰ تکنیک حرفه‌ای برای بهینه‌سازی Next.js',
    cover: '/images/next.png',
    readTime: 12,
    slug: 'nextjs-optimization-techniques',
  },
  {
    id: 3,
    title: 'اصول طراحی UI با Tailwind CSS',
    cover: '/images/tailwind.jpg',
    readTime: 10,
    slug: 'ui-design-with-tailwind',
  },
  {
    id: 4,
    title: 'مفاهیم پیشرفته JavaScript که باید بدانید',
    cover: '/images/javascript.jpg',
    readTime: 15,
    slug: 'advanced-javascript-concepts',
  },
];

export default function ArticlePage() {
  const article = mockArticle;

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-24 sm:py-40">
        <ArticleBreadcrumb category={article.category} />

        <ArticleHeader article={article} />

        <div className="mx-auto mt-32 max-w-5xl overflow-hidden rounded-2xl">
          <img
            src={article.cover}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>

        <article className="mx-auto mt-40 max-w-3xl">
          <ArticleContent content={article.content} />
          <ArticleTags tags={article.tags} />
          <ShareBox />
        </article>

        <RelatedArticles articles={relatedArticles} />
      </main>

      <Footer />
    </>
  );
}
