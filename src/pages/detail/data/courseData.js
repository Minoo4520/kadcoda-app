// ============================================================
// دیتای مشترک بین همه دوره‌ها
// ============================================================
const defaultInstructor = {
  initial: 'ام',
  name: 'امیرحسین مرادی',
  role: 'توسعه‌دهنده ارشد بک‌اند و مشاور پیاده‌سازی سیستم‌های هوش مصنوعی',
  bio: '"من معتقدم برنامه‌نویسی یک مهارت تئوریک نیست؛ بلکه یک هنر برای حل مشکلات واقعی دنیاست..."',
  highlights: [
    {
      id: 'exp',
      label: 'سابقه توسعه',
      value: '+۷ سال تخصصی',
      icon: 'briefcase',
    },
    {
      id: 'students',
      label: 'دانشجویان آکادمی',
      value: '+۳,۰۰۰ نفر',
      icon: 'academic',
    },
  ],
};

const defaultRequirements = {
  title: 'برای این دوره به چه چیزهایی نیاز دارید؟',
  description:
    'این دوره از سطح صفر مطلق شروع می‌شود؛ یعنی هیچ نیازی به داشتن پیش‌زمینه قبلی در برنامه‌نویسی یا مهندسی کامپیوتر ندارید. تنها ملزومات شما عبارتند از:',
  items: [
    '✔ یک سیستم کامپیوتری معمولی (ویندوز، مک یا لینوکس)',
    '✔ آشنایی اولیه با کارکرد عمومی کامپیوتر و اینترنت',
    '✔ اشتیاق به حل چالش‌ها و پشتکار مستمر',
  ],
};

const defaultTabs = [
  { id: 'curriculum', label: 'سرفصل ها' },
  { id: 'about-instructor', label: 'درباره مدرس' },
  { id: 'requirements', label: 'پیش‌نیازها' },
  { id: 'License', label: 'لایسنس دوره' },
];

const defaultPurchaseFeatures = [
  'دسترسی دائمی به کل محتوا بدون محدودیت زمانی',
  'پشتیبانی تلگرامی و تیکتی مستقیم با خود مدرس',
  'دریافت گواهی پایان دوره رسمی کد کدا',
];

// ============================================================
// لیست دوره‌ها
// ============================================================

export const courses = [
  {
    id: 1,
    slug: 'react-course',
    title: 'دوره جامع React',
    description:
      'آموزش کامل React از مقدماتی تا پیشرفته همراه با پروژه‌های واقعی.',
    image: '/images/react.png',
    hours: 18,
    price: '1,950,000 تومان',
    category: 'frontend',
    isPurchased: true,
    licenseKey: 'SPT-RCT-2024-A1B2-C3D4',

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۱۸ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۲۱۰ دانشجو',
        indicator: { type: 'badge', content: 'جدید' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۲,۸۰۰,۰۰۰ تومان',
      discountLabel: '۳۰٪ تخفیف ویژه',
      finalPrice: '۱,۹۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مقدمات React و راه‌اندازی محیط توسعه',
        meta: '۴ جلسه • ۶۰ دقیقه',
        lessons: [
          { id: 1, title: 'React چرا و چگونه؟ مرور کلی', duration: '۱۲:۰۰' },
          {
            id: 2,
            title: 'نصب Node.js و ساخت پروژه با Vite',
            duration: '۱۸:۳۰',
          },
          {
            id: 3,
            title: 'ساختار پوشه‌ها و اولین کامپوننت',
            duration: '۲۲:۱۰',
          },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'State، Props و مدیریت رویدادها',
        meta: '۶ جلسه • ۹۰ دقیقه',
        lessons: [
          {
            id: 1,
            title: 'درک State و Props در کامپوننت‌ها',
            duration: '۲۰:۰۰',
          },
          { id: 2, title: 'مدیریت رویدادها و فرم‌ها', duration: '۲۵:۳۰' },
          {
            id: 3,
            title: 'Lifting State Up و کامپوننت‌های کنترل‌شده',
            duration: '۲۸:۰۰',
          },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'Hooks، Context و پروژه نهایی',
        meta: '۷ جلسه • ۱۲۰ دقیقه',
        lessons: [
          {
            id: 1,
            title: 'useEffect، useMemo و useCallback',
            duration: '۳۵:۰۰',
          },
          {
            id: 2,
            title: 'Context API و مدیریت State سراسری',
            duration: '۳۰:۲۰',
          },
          { id: 3, title: 'پروژه فروشگاهی با React Router', duration: '۵۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 2,
    slug: 'nextjs-course',
    title: 'دوره Next.js',
    description:
      'ساخت پروژه‌های مدرن با Next.js، SSR، App Router و API Routes.',
    image: '/images/next.png',
    hours: 22,
    price: '2,350,000 تومان',
    category: 'frontend',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۲۲ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۱۸۵ دانشجو',
        indicator: { type: 'badge', content: 'جدید' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۳,۲۰۰,۰۰۰ تومان',
      discountLabel: '۲۷٪ تخفیف ویژه',
      finalPrice: '۲,۳۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'آشنایی با Next.js و App Router',
        meta: '۵ جلسه • ۷۵ دقیقه',
        lessons: [
          {
            id: 1,
            title: 'چرا Next.js؟ مقایسه با React خالص',
            duration: '۱۵:۰۰',
          },
          { id: 2, title: 'ساختار پروژه و App Router', duration: '۲۰:۳۰' },
          {
            id: 3,
            title: 'Server Components و Client Components',
            duration: '۲۵:۱۰',
          },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Data Fetching، API Routes و SSR',
        meta: '۶ جلسه • ۹۰ دقیقه',
        lessons: [
          { id: 1, title: 'SSR، SSG و ISR در Next.js', duration: '۳۰:۰۰' },
          {
            id: 2,
            title: 'ساخت REST API با Route Handlers',
            duration: '۲۸:۲۰',
          },
          { id: 3, title: 'Middleware و احراز هویت', duration: '۳۲:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'پروژه فروشگاهی کامل با Next.js',
        meta: '۷ جلسه • ۱۴۰ دقیقه',
        lessons: [
          { id: 1, title: 'طراحی صفحات محصول و سبد خرید', duration: '۴۵:۰۰' },
          { id: 2, title: 'اتصال به دیتابیس و پرداخت', duration: '۵۰:۰۰' },
          { id: 3, title: 'استقرار روی Vercel', duration: '۲۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 3,
    slug: 'tailwind-course',
    title: 'دوره Tailwind CSS',
    description: 'طراحی رابط کاربری حرفه‌ای با Tailwind CSS و پروژه عملی.',
    image: '/images/tailwind.jpg',
    hours: 12,
    price: '1,250,000 تومان',
    category: 'frontend',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۱۲ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۳۲۰ دانشجو',
        indicator: { type: 'badge', content: 'محبوب' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'شهریورماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۱,۸۰۰,۰۰۰ تومان',
      discountLabel: '۳۰٪ تخفیف ویژه',
      finalPrice: '۱,۲۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی Tailwind و راه‌اندازی',
        meta: '۳ جلسه • ۴۵ دقیقه',
        lessons: [
          { id: 1, title: 'Tailwind چیست و چرا؟', duration: '۱۲:۰۰' },
          { id: 2, title: 'نصب و پیکربندی در پروژه', duration: '۱۸:۰۰' },
          { id: 3, title: 'Utility Classes پایه', duration: '۱۵:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Layout، Flex، Grid و Responsive',
        meta: '۴ جلسه • ۶۰ دقیقه',
        lessons: [
          { id: 1, title: 'Flexbox و Grid در Tailwind', duration: '۲۰:۰۰' },
          { id: 2, title: 'Breakpoints و طراحی واکنش‌گرا', duration: '۱۸:۰۰' },
          { id: 3, title: 'Container و Spacing', duration: '۲۲:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'پروژه لندینگ‌پیج کامل',
        meta: '۵ جلسه • ۹۰ دقیقه',
        lessons: [
          { id: 1, title: 'طراحی Navbar و Hero', duration: '۳۰:۰۰' },
          { id: 2, title: 'سکشن‌های Features و Pricing', duration: '۳۵:۰۰' },
          { id: 3, title: 'Dark Mode و انیمیشن‌ها', duration: '۲۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 4,
    slug: 'javascript-course',
    title: 'دوره JavaScript پیشرفته',
    description:
      'یادگیری مفاهیم پیشرفته جاوااسکریپت همراه با مثال‌های کاربردی.',
    image: '/images/javascript.jpg',
    hours: 25,
    price: '2,150,000 تومان',
    category: 'frontend',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۲۵ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۴۱۰ دانشجو',
        indicator: { type: 'badge', content: 'محبوب' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۳,۰۰۰,۰۰۰ تومان',
      discountLabel: '۲۸٪ تخفیف ویژه',
      finalPrice: '۲,۱۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مفاهیم پیشرفته زبان',
        meta: '۵ جلسه • ۸۰ دقیقه',
        lessons: [
          { id: 1, title: 'Scope، Closure و Hoisting', duration: '۲۵:۰۰' },
          { id: 2, title: 'this و Context در JavaScript', duration: '۲۵:۰۰' },
          { id: 3, title: 'Prototype و وراثت', duration: '۳۰:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Async، Promise و Event Loop',
        meta: '۵ جلسه • ۹۰ دقیقه',
        lessons: [
          { id: 1, title: 'Callback Hell تا Promise', duration: '۳۰:۰۰' },
          { id: 2, title: 'async/await و مدیریت خطا', duration: '۳۰:۰۰' },
          { id: 3, title: 'Event Loop و Microtask Queue', duration: '۳۰:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'الگوهای طراحی و پروژه',
        meta: '۶ جلسه • ۱۲۰ دقیقه',
        lessons: [
          {
            id: 1,
            title: 'Module Pattern و Revealing Module',
            duration: '۳۵:۰۰',
          },
          { id: 2, title: 'Observer و Pub/Sub', duration: '۴۰:۰۰' },
          { id: 3, title: 'پروژه اپلیکیشن Todo پیشرفته', duration: '۴۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 5,
    slug: 'typescript-course',
    title: 'دوره TypeScript',
    description: 'تسلط بر TypeScript برای توسعه پروژه‌های بزرگ و حرفه‌ای.',
    image: '/images/typescript.png',
    hours: 16,
    price: '1,650,000 تومان',
    category: 'frontend',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۱۶ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۲۴۰ دانشجو',
        indicator: { type: 'badge', content: 'جدید' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۲,۳۰۰,۰۰۰ تومان',
      discountLabel: '۲۸٪ تخفیف ویژه',
      finalPrice: '۱,۶۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی TypeScript',
        meta: '۴ جلسه • ۶۰ دقیقه',
        lessons: [
          { id: 1, title: 'TypeScript چیست و چرا؟', duration: '۱۵:۰۰' },
          { id: 2, title: 'انواع پایه و Type Inference', duration: '۱۵:۰۰' },
          { id: 3, title: 'Interface و Type Alias', duration: '۳۰:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Generics و Utility Types',
        meta: '۵ جلسه • ۸۰ دقیقه',
        lessons: [
          { id: 1, title: 'Generic Functions و Classes', duration: '۲۵:۰۰' },
          {
            id: 2,
            title: 'Utility Types (Partial, Pick, Omit)',
            duration: '۳۰:۰۰',
          },
          { id: 3, title: 'Conditional Types پیشرفته', duration: '۲۵:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'TypeScript در پروژه React',
        meta: '۵ جلسه • ۱۰۰ دقیقه',
        lessons: [
          { id: 1, title: 'Props و State با TypeScript', duration: '۳۰:۰۰' },
          { id: 2, title: 'Hooks تایپ‌شده', duration: '۳۵:۰۰' },
          { id: 3, title: 'پروژه نهایی با React + TS', duration: '۳۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 6,
    slug: 'nodejs-course',
    title: 'دوره Node.js',
    description: 'توسعه بک‌اند با Node.js، Express و ساخت REST API.',
    image: '/images/nodejs.jpg',
    hours: 28,
    price: '2,650,000 تومان',
    category: 'backend',
    isPurchased: true,
    licenseKey: 'SPT-NJS-2024-E5F6-G7H8',

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۲۸ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۳۹۰ دانشجو',
        indicator: { type: 'badge', content: 'محبوب' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۳,۵۰۰,۰۰۰ تومان',
      discountLabel: '۲۴٪ تخفیف ویژه',
      finalPrice: '۲,۶۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی Node.js و ماژول‌ها',
        meta: '۵ جلسه • ۹۰ دقیقه',
        lessons: [
          {
            id: 1,
            title: 'Node.js چیست و چه کاربردی دارد؟',
            duration: '۲۰:۰۰',
          },
          { id: 2, title: 'ماژول‌ها و NPM', duration: '۲۵:۰۰' },
          { id: 3, title: 'File System و کار با فایل‌ها', duration: '۳۰:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Express و ساخت REST API',
        meta: '۷ جلسه • ۱۲۰ دقیقه',
        lessons: [
          {
            id: 1,
            title: 'Routing و Middleware در Express',
            duration: '۳۵:۰۰',
          },
          { id: 2, title: 'احراز هویت با JWT', duration: '۴۵:۰۰' },
          { id: 3, title: 'اتصال به MongoDB', duration: '۴۰:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'پروژه اپلیکیشن فروشگاهی',
        meta: '۸ جلسه • ۱۶۰ دقیقه',
        lessons: [
          { id: 1, title: 'مدل‌سازی و طراحی API', duration: '۵۰:۰۰' },
          { id: 2, title: 'آپلود فایل و پرداخت', duration: '۵۵:۰۰' },
          { id: 3, title: 'استقرار روی سرور', duration: '۵۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 7,
    slug: 'mongodb-course',
    title: 'دوره MongoDB',
    description: 'کار با MongoDB و طراحی دیتابیس برای پروژه‌های واقعی.',
    image: '/images/mongodb.png',
    hours: 14,
    price: '1,450,000 تومان',
    category: 'database',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۱۴ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۲۱۰ دانشجو',
        indicator: { type: 'badge', content: 'جدید' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'شهریورماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۲,۰۰۰,۰۰۰ تومان',
      discountLabel: '۲۷٪ تخفیف ویژه',
      finalPrice: '۱,۴۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی MongoDB',
        meta: '۴ جلسه • ۶۰ دقیقه',
        lessons: [
          { id: 1, title: 'NoSQL در مقابل SQL', duration: '۱۵:۰۰' },
          { id: 2, title: 'نصب و راه‌اندازی MongoDB', duration: '۲۰:۰۰' },
          {
            id: 3,
            title: 'Database، Collection و Document',
            duration: '۲۵:۰۰',
          },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'CRUD و Aggregation',
        meta: '۵ جلسه • ۸۰ دقیقه',
        lessons: [
          { id: 1, title: 'Insert، Find، Update، Delete', duration: '۲۵:۰۰' },
          { id: 2, title: 'Query Operators پیشرفته', duration: '۳۰:۰۰' },
          { id: 3, title: 'Aggregation Pipeline', duration: '۲۵:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'اتصال به اپلیکیشن‌ها',
        meta: '۴ جلسه • ۷۰ دقیقه',
        lessons: [
          { id: 1, title: 'Mongoose و Schema', duration: '۲۵:۰۰' },
          { id: 2, title: 'Indexing و Performance', duration: '۲۰:۰۰' },
          { id: 3, title: 'پروژه کامل با Node + MongoDB', duration: '۲۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 8,
    slug: 'git-course',
    title: 'دوره Git و GitHub',
    description: 'مدیریت نسخه، همکاری تیمی و کار حرفه‌ای با Git و GitHub.',
    image: '/images/git.jpg',
    hours: 10,
    price: '950,000 تومان',
    category: 'devops',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۱۰ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۵۲۰ دانشجو',
        indicator: { type: 'badge', content: 'محبوب' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۱,۴۰۰,۰۰۰ تومان',
      discountLabel: '۳۲٪ تخفیف ویژه',
      finalPrice: '۹۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی Git',
        meta: '۴ جلسه • ۶۰ دقیقه',
        lessons: [
          { id: 1, title: 'Git چیست و چرا؟', duration: '۱۵:۰۰' },
          { id: 2, title: 'نصب و پیکربندی Git', duration: '۱۵:۰۰' },
          { id: 3, title: 'Commit، Log و Status', duration: '۳۰:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Branching و Merge',
        meta: '۴ جلسه • ۷۰ دقیقه',
        lessons: [
          { id: 1, title: 'ساخت و مدیریت Branch', duration: '۲۰:۰۰' },
          { id: 2, title: 'Merge و حل تعارض', duration: '۲۵:۰۰' },
          { id: 3, title: 'Rebase و Cherry-pick', duration: '۲۵:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'کار تیمی با GitHub',
        meta: '۴ جلسه • ۷۰ دقیقه',
        lessons: [
          { id: 1, title: 'Pull Request و Code Review', duration: '۲۵:۰۰' },
          { id: 2, title: 'Issues و Project Board', duration: '۲۰:۰۰' },
          { id: 3, title: 'GitHub Actions مقدماتی', duration: '۲۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 10,
    slug: 'django-course',
    title: 'دوره Django (پایتون)',
    description: 'توسعه وب حرفه‌ای با جنگو، ساخت API و پروژه فروشگاهی کامل.',
    image: '/images/django.jpg',
    hours: 30,
    price: '2,850,000 تومان',
    category: 'backend',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۳۰ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۳۱۰ دانشجو',
        indicator: { type: 'badge', content: 'محبوب' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۳,۸۰۰,۰۰۰ تومان',
      discountLabel: '۲۵٪ تخفیف ویژه',
      finalPrice: '۲,۸۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مقدمات Django و ساختار پروژه',
        meta: '۵ جلسه • ۹۰ دقیقه',
        lessons: [
          { id: 1, title: 'Django چیست و چه کاربردی دارد؟', duration: '۲۰:۰۰' },
          { id: 2, title: 'ساخت پروژه و App', duration: '۲۵:۰۰' },
          { id: 3, title: 'URL Routing و Views', duration: '۴۵:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'مدل‌ها، ORM و ادمین',
        meta: '۶ جلسه • ۱۲۰ دقیقه',
        lessons: [
          { id: 1, title: 'Model و Migration', duration: '۴۰:۰۰' },
          { id: 2, title: 'QuerySet و روابط', duration: '۴۵:۰۰' },
          { id: 3, title: 'Django Admin پیشرفته', duration: '۳۵:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'REST API و پروژه فروشگاهی',
        meta: '۸ جلسه • ۱۶۰ دقیقه',
        lessons: [
          { id: 1, title: 'DRF و Serializers', duration: '۵۰:۰۰' },
          { id: 2, title: 'احراز هویت JWT', duration: '۵۵:۰۰' },
          { id: 3, title: 'پروژه فروشگاهی کامل', duration: '۵۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 11,
    slug: 'vue-course',
    title: 'دوره Vue.js',
    description:
      'آموزش جامع Vue.js از مفاهیم پایه تا Composition API و پروژه‌های واقعی.',
    image: '/images/vue.webp',
    hours: 18,
    price: '1,750,000 تومان',
    category: 'frontend',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۱۸ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۱۵۰ دانشجو',
        indicator: { type: 'badge', content: 'جدید' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'شهریورماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۲,۵۰۰,۰۰۰ تومان',
      discountLabel: '۳۰٪ تخفیف ویژه',
      finalPrice: '۱,۷۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی Vue.js',
        meta: '۴ جلسه • ۶۰ دقیقه',
        lessons: [
          { id: 1, title: 'Vue چیست و چرا؟', duration: '۱۵:۰۰' },
          { id: 2, title: 'نصب و ساخت پروژه با Vite', duration: '۲۰:۰۰' },
          { id: 3, title: 'Reactivity و داده‌ها', duration: '۲۵:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Components و Directives',
        meta: '۵ جلسه • ۸۵ دقیقه',
        lessons: [
          { id: 1, title: 'ساخت کامپوننت و Props', duration: '۳۰:۰۰' },
          { id: 2, title: 'v-if، v-for و رویدادها', duration: '۲۵:۰۰' },
          { id: 3, title: 'Slots و Component Composition', duration: '۳۰:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'Composition API و پروژه',
        meta: '۶ جلسه • ۱۲۰ دقیقه',
        lessons: [
          { id: 1, title: 'ref، reactive و computed', duration: '۴۰:۰۰' },
          { id: 2, title: 'Vue Router و Pinia', duration: '۴۵:۰۰' },
          { id: 3, title: 'پروژه SPA کامل', duration: '۳۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 12,
    slug: 'docker-course',
    title: 'دوره Docker و DevOps',
    description: 'کانتینر سازی، داکر کومپوز و استقرار برنامه‌ها روی سرور.',
    image: '/images/docker.png',
    hours: 16,
    price: '1,950,000 تومان',
    category: 'devops',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۱۶ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۲۷۰ دانشجو',
        indicator: { type: 'badge', content: 'محبوب' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۲,۶۰۰,۰۰۰ تومان',
      discountLabel: '۲۵٪ تخفیف ویژه',
      finalPrice: '۱,۹۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی Docker و کانتینرها',
        meta: '۴ جلسه • ۶۵ دقیقه',
        lessons: [
          { id: 1, title: 'کانتینر چیست؟', duration: '۱۵:۰۰' },
          { id: 2, title: 'نصب Docker و اولین Container', duration: '۲۵:۰۰' },
          { id: 3, title: 'Image و Dockerfile', duration: '۲۵:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Docker Compose و Volumes',
        meta: '۵ جلسه • ۹۰ دقیقه',
        lessons: [
          { id: 1, title: 'Compose برای چند سرویس', duration: '۳۵:۰۰' },
          { id: 2, title: 'Volumes و Networks', duration: '۳۰:۰۰' },
          { id: 3, title: 'Environment Variables', duration: '۲۵:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'CI/CD و استقرار روی سرور',
        meta: '۵ جلسه • ۹۰ دقیقه',
        lessons: [
          { id: 1, title: 'GitHub Actions و Docker', duration: '۳۵:۰۰' },
          { id: 2, title: 'Registry و Push/Pull', duration: '۲۵:۰۰' },
          { id: 3, title: 'استقرار روی VPS', duration: '۳۰:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 13,
    slug: 'graphql-course',
    title: 'دوره GraphQL',
    description: 'جایگزین قدرتمند REST، ساخت Query و Mutation پیشرفته.',
    image: '/images/graph.png',
    hours: 14,
    price: '1,850,000 تومان',
    category: 'backend',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۱۴ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۱۳۰ دانشجو',
        indicator: { type: 'badge', content: 'جدید' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۲,۵۰۰,۰۰۰ تومان',
      discountLabel: '۲۶٪ تخفیف ویژه',
      finalPrice: '۱,۸۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی GraphQL',
        meta: '۴ جلسه • ۶۰ دقیقه',
        lessons: [
          { id: 1, title: 'GraphQL در مقابل REST', duration: '۱۵:۰۰' },
          { id: 2, title: 'Schema و Type System', duration: '۲۵:۰۰' },
          { id: 3, title: 'Query و Mutation پایه', duration: '۲۰:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Apollo Server و Resolvers',
        meta: '۵ جلسه • ۸۰ دقیقه',
        lessons: [
          { id: 1, title: 'راه‌اندازی Apollo Server', duration: '۲۵:۰۰' },
          { id: 2, title: 'Resolvers پیشرفته', duration: '۳۰:۰۰' },
          { id: 3, title: 'Context و Authentication', duration: '۲۵:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'GraphQL در فرانت‌اند',
        meta: '۵ جلسه • ۷۰ دقیقه',
        lessons: [
          { id: 1, title: 'Apollo Client در React', duration: '۳۰:۰۰' },
          { id: 2, title: 'Cache و Optimistic UI', duration: '۲۰:۰۰' },
          { id: 3, title: 'پروژه کامل Full-Stack', duration: '۲۰:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 14,
    slug: 'go-course',
    title: 'دوره زبان Go (گولنگ)',
    description: 'توسعه نرم‌افزارهای هم‌روند و با کارایی بالا با زبان گو.',
    image: '/images/golang.jpg',
    hours: 22,
    price: '2,250,000 تومان',
    category: 'backend',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۲۲ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۱۹۰ دانشجو',
        indicator: { type: 'badge', content: 'جدید' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۳,۰۰۰,۰۰۰ تومان',
      discountLabel: '۲۵٪ تخفیف ویژه',
      finalPrice: '۲,۲۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی زبان Go',
        meta: '۵ جلسه • ۹۰ دقیقه',
        lessons: [
          { id: 1, title: 'Go چیست و چه کاربردی دارد؟', duration: '۲۰:۰۰' },
          { id: 2, title: 'نصب و اولین برنامه', duration: '۲۵:۰۰' },
          {
            id: 3,
            title: 'انواع داده، متغیر و کنترل جریان',
            duration: '۴۵:۰۰',
          },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'توابع، Structs و Interfaces',
        meta: '۶ جلسه • ۱۱۰ دقیقه',
        lessons: [
          { id: 1, title: 'توابع و Return مقادیر متعدد', duration: '۳۵:۰۰' },
          { id: 2, title: 'Structs و Methods', duration: '۴۰:۰۰' },
          { id: 3, title: 'Interfaces و Polymorphism', duration: '۳۵:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'Concurrency و پروژه',
        meta: '۷ جلسه • ۱۴۰ دقیقه',
        lessons: [
          { id: 1, title: 'Goroutines و Channels', duration: '۵۰:۰۰' },
          { id: 2, title: 'Sync و Select', duration: '۴۵:۰۰' },
          { id: 3, title: 'پروژه REST API با Gin', duration: '۴۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 15,
    slug: 'rust-course',
    title: 'دوره Rust',
    description: 'برنامه‌نویسی سیستمی و امن با زبان راست به همراه پروژه عملی.',
    image: '/images/rust.png',
    hours: 26,
    price: '2,450,000 تومان',
    category: 'backend',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۲۶ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۱۲۰ دانشجو',
        indicator: { type: 'badge', content: 'جدید' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۳,۲۰۰,۰۰۰ تومان',
      discountLabel: '۲۴٪ تخفیف ویژه',
      finalPrice: '۲,۴۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی Rust',
        meta: '۵ جلسه • ۹۰ دقیقه',
        lessons: [
          { id: 1, title: 'Rust چیست و چرا؟', duration: '۲۰:۰۰' },
          { id: 2, title: 'Cargo و ساخت پروژه', duration: '۲۵:۰۰' },
          { id: 3, title: 'متغیرها، Types و Control Flow', duration: '۴۵:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Ownership و Borrowing',
        meta: '۶ جلسه • ۱۲۰ دقیقه',
        lessons: [
          { id: 1, title: 'Ownership و Rules', duration: '۴۵:۰۰' },
          { id: 2, title: 'References و Borrowing', duration: '۴۰:۰۰' },
          { id: 3, title: 'Lifetimes', duration: '۳۵:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'Traits، Error Handling و پروژه',
        meta: '۷ جلسه • ۱۴۰ دقیقه',
        lessons: [
          { id: 1, title: 'Traits و Generics', duration: '۵۰:۰۰' },
          {
            id: 2,
            title: 'Result، Option و Error Handling',
            duration: '۴۵:۰۰',
          },
          { id: 3, title: 'پروژه CLI Tool کامل', duration: '۴۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 16,
    slug: 'aws-course',
    title: 'دوره AWS (خدمات ابری)',
    description: 'کار با EC2، S3، Lambda و مدیریت زیرساخت در فضای ابری آمازون.',
    image: '/images/aws.avif',
    hours: 20,
    price: '2,150,000 تومان',
    category: 'devops',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۲۰ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۲۲۰ دانشجو',
        indicator: { type: 'badge', content: 'محبوب' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۲,۹۰۰,۰۰۰ تومان',
      discountLabel: '۲۶٪ تخفیف ویژه',
      finalPrice: '۲,۱۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مقدمات AWS و IAM',
        meta: '۴ جلسه • ۷۰ دقیقه',
        lessons: [
          { id: 1, title: 'AWS چیست و خدمات اصلی', duration: '۲۰:۰۰' },
          { id: 2, title: 'ساخت Account و IAM', duration: '۲۵:۰۰' },
          { id: 3, title: 'AWS CLI و SDK', duration: '۲۵:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'EC2، S3 و RDS',
        meta: '۶ جلسه • ۱۲۰ دقیقه',
        lessons: [
          { id: 1, title: 'راه‌اندازی EC2 و SSH', duration: '۴۵:۰۰' },
          { id: 2, title: 'S3 برای ذخیره‌سازی', duration: '۴۰:۰۰' },
          { id: 3, title: 'RDS و دیتابیس مدیریت‌شده', duration: '۳۵:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'Lambda و Serverless',
        meta: '۵ جلسه • ۱۰۰ دقیقه',
        lessons: [
          { id: 1, title: 'Lambda و Triggers', duration: '۴۰:۰۰' },
          { id: 2, title: 'API Gateway و DynamoDB', duration: '۳۵:۰۰' },
          { id: 3, title: 'پروژه Serverless کامل', duration: '۲۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 17,
    slug: 'linux-course',
    title: 'دوره لینوکس و خط فرمان',
    description:
      'مدیریت سرور، اسکریپت‌نویسی Bash و عیب‌یابی سیستم‌های لینوکسی.',
    image: '/images/linux.png',
    hours: 12,
    price: '1,250,000 تومان',
    category: 'devops',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۱۲ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۴۳۰ دانشجو',
        indicator: { type: 'badge', content: 'محبوب' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'شهریورماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۱,۸۰۰,۰۰۰ تومان',
      discountLabel: '۳۰٪ تخفیف ویژه',
      finalPrice: '۱,۲۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'آشنایی با لینوکس و Terminal',
        meta: '۴ جلسه • ۶۰ دقیقه',
        lessons: [
          { id: 1, title: 'لینوکس و توزیع‌های محبوب', duration: '۱۵:۰۰' },
          { id: 2, title: 'دستورات پایه File System', duration: '۲۰:۰۰' },
          { id: 3, title: 'کار با کاربران و Permission', duration: '۲۵:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Bash Scripting و ابزارها',
        meta: '۵ جلسه • ۹۰ دقیقه',
        lessons: [
          { id: 1, title: 'متغیرها و کنترل جریان در Bash', duration: '۳۵:۰۰' },
          { id: 2, title: 'توابع و اسکریپت‌نویسی', duration: '۳۰:۰۰' },
          { id: 3, title: 'grep، sed، awk', duration: '۲۵:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'مدیریت سرور و شبکه',
        meta: '۴ جلسه • ۹۰ دقیقه',
        lessons: [
          { id: 1, title: 'SSH و مدیریت سرور راه دور', duration: '۳۰:۰۰' },
          { id: 2, title: 'Networking و Firewall', duration: '۳۰:۰۰' },
          { id: 3, title: 'Nginx، Apache و Deploy', duration: '۳۰:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },

  {
    id: 18,
    slug: 'data-science-course',
    title: 'دوره علوم داده با پایتون',
    description:
      'تحلیل داده، Pandas، NumPy و مصورسازی با Matplotlib و Seaborn.',
    image: '/images/pandas.png',
    hours: 32,
    price: '2,950,000 تومان',
    category: 'ai-data',
    isPurchased: false,
    licenseKey: null,

    stats: [
      {
        id: 'status',
        label: 'وضعیت دوره',
        value: 'تکمیل شده / آماده مشاهده',
        indicator: { type: 'dot', className: 'bg-[#22C55E]' },
      },
      {
        id: 'duration',
        label: 'مدت زمان دوره',
        value: '۳۲ ساعت خالص',
        indicator: { type: 'icon', name: 'clock' },
      },
      {
        id: 'students',
        label: 'تعداد ثبت‌نامی‌ها',
        value: '۲۸۰ دانشجو',
        indicator: { type: 'badge', content: 'محبوب' },
      },
      {
        id: 'access',
        label: 'روش مشاهده',
        value: 'اسپات‌پلیر / دانلودی',
        indicator: { type: 'icon', name: 'computer' },
      },
      {
        id: 'updated',
        label: 'بروزرسانی',
        value: 'مهرماه ۱۴۰۴',
        indicator: { type: 'icon', name: 'calendar' },
      },
      {
        id: 'rating',
        label: 'امتیاز دوره',
        value: '۵ از ۵ (ارزشمند)',
        indicator: { type: 'rating', content: '⭐⭐⭐⭐⭐' },
      },
    ],

    pricing: {
      originalPrice: '۴,۰۰۰,۰۰۰ تومان',
      discountLabel: '۲۶٪ تخفیف ویژه',
      finalPrice: '۲,۹۵۰,۰۰۰',
      currency: 'تومان',
    },

    purchaseFeatures: defaultPurchaseFeatures,

    curriculum: [
      {
        id: 1,
        index: '۰۱',
        title: 'مبانی علوم داده و NumPy',
        meta: '۵ جلسه • ۹۰ دقیقه',
        lessons: [
          {
            id: 1,
            title: 'علوم داده چیست و چه مسیری دارد؟',
            duration: '۲۰:۰۰',
          },
          { id: 2, title: 'NumPy و آرایه‌ها', duration: '۳۵:۰۰' },
          { id: 3, title: 'عملیات برداری و Indexing', duration: '۳۵:۰۰' },
        ],
      },
      {
        id: 2,
        index: '۰۲',
        title: 'Pandas و تحلیل داده',
        meta: '۷ جلسه • ۱۳۰ دقیقه',
        lessons: [
          { id: 1, title: 'Series و DataFrame', duration: '۴۵:۰۰' },
          { id: 2, title: 'پاک‌سازی و مدیریت داده', duration: '۴۵:۰۰' },
          { id: 3, title: 'GroupBy و Aggregation', duration: '۴۰:۰۰' },
        ],
      },
      {
        id: 3,
        index: '۰۳',
        title: 'مصورسازی و پروژه',
        meta: '۶ جلسه • ۱۳۰ دقیقه',
        lessons: [
          { id: 1, title: 'Matplotlib و Seaborn', duration: '۵۰:۰۰' },
          { id: 2, title: 'تحلیل اکتشافی داده (EDA)', duration: '۴۵:۰۰' },
          { id: 3, title: 'پروژه نهایی روی دیتاست واقعی', duration: '۳۵:۰۰' },
        ],
      },
    ],

    instructor: defaultInstructor,
    requirements: defaultRequirements,
    tabs: defaultTabs,
  },
];

// ============================================================
// هلپرها
// ============================================================

export const getCourseBySlug = (slug) => courses.find((c) => c.slug === slug);

export const CATEGORIES = [
  { id: 'all', label: 'همه دوره‌ها' },
  { id: 'frontend', label: 'فرانت‌اند' },
  { id: 'backend', label: 'بک‌اند' },
  { id: 'database', label: 'دیتابیس' },
  { id: 'devops', label: 'دواپس و ابزارها' },
  { id: 'ai-data', label: 'هوش مصنوعی و داده' },
];
