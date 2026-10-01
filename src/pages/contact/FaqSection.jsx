import { useState } from 'react';

const Icons = {
  Chevron: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[18px] w-[18px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
};

const faqs = [
  {
    question: 'چگونه می‌توانم در دوره‌های آموزش کدنویسی ثبت‌نام کنم؟',
    answer:
      "کافیست از منوی بالای صفحه روی دکمه 'ورود / ثبت‌نام' کلیک کنید. پس از وارد کردن شماره موبایل و دریافت کد تایید، وارد پنل کاربری خود شده و دوره مورد نظرتان را انتخاب کنید.",
  },
  {
    question:
      'آیا شرکت در دوره‌ها نیاز به پیش‌زمینه یا دانش قبلی برنامه‌نویسی دارد؟',
    answer:
      'خیر، بیشتر دوره‌های کدکدا از سطح صفر و پایه طراحی شده‌اند. الگوی آموزشی ما کاملاً عملی و گام‌به‌گام است تا همه علاقمندان به راحتی یادگیری را آغاز کنند.',
  },
  {
    question: 'پشتیبانی و رفع اشکال دوره‌ها به چه صورت انجام می‌شود؟',
    answer:
      'تمامی دانش‌پژوهان به سیستم تیکت‌پشتیبانی ۲۴ ساعته، گروه گفتگو با منتورها و جلسات آنلاین رفع اشکال هفتگی دسترسی خواهند داشت.',
  },
  {
    question: 'آیا پس از اتمام دوره گواهینامه معتبر ارائه می‌شود؟',
    answer:
      'بله، پس از ارسال و تایید پروژه‌های پایانی توسط منتورها، مدرک دیجیتال معتبر و دوزبانه کدکدا برای شما صادر می‌گردد.',
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="mx-auto mt-48 mb-64 w-full max-w-960 sm:px-16 md:mt-64">
      <header className="mb-14 text-center sm:mb-24 md:mb-36">
        <h2 className="text-primary-700 text-[26px] font-bold tracking-tight md:text-[32px]">
          سوالات متداول
        </h2>
        <p className="mt-8 text-sm text-gray-500 md:text-[16px]">
          پاسخ به رایج‌ترین سوالات شما درباره نحوه آموزش در کدکدا
        </p>
      </header>

      <div className="space-y-14">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={index}
              className={`overflow-hidden rounded-[14px] border bg-white shadow-sm transition-all duration-300 ${
                isOpen ? 'border-primary-200 shadow-md' : 'border-gray-200'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                className="hover:bg-primary-50/40 flex w-full cursor-pointer items-center justify-between gap-[16px] bg-white p-[20px] text-right transition-colors"
              >
                <span
                  className={`text-xs font-semibold transition-colors sm:text-base md:text-[17px] ${
                    isOpen ? 'text-primary-700' : 'text-gray-800'
                  }`}
                >
                  {faq.question}
                </span>

                <div
                  className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-in-out ${
                    isOpen
                      ? 'bg-primary-600 rotate-180 text-white'
                      : 'bg-primary-50 text-primary-600'
                  }`}
                >
                  <Icons.Chevron />
                </div>
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-primary-100/60 border-t px-12 py-12 text-xs leading-relaxed text-gray-600 sm:px-20 sm:py-16 sm:text-[14px] md:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FaqSection;
