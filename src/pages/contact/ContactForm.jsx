import { useEffect, useRef, useState } from 'react';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formState.name.trim() &&
      formState.email.trim() &&
      formState.message.trim()
    ) {
      setSubmitted(true);

      timeoutRef.current = setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 3500);
    }
  };

  return (
    <div className="z-10 flex w-full flex-col justify-center rounded-t-3xl bg-white p-16 text-right sm:p-28 md:w-1/2 md:rounded-t-none md:rounded-r-3xl lg:p-32">
      <h2 className="text-primary-800 mb-8 text-xl font-bold tracking-tight sm:text-2xl md:text-[26px]">
        در تماس باشیم!
      </h2>

      <p className="mb-28 text-xs leading-relaxed text-gray-600 sm:text-sm lg:text-base">
        ما اینجا هستیم تا به شما کمک کنیم. چگونه می‌توانیم راهنماییتان کنیم؟
      </p>

      {submitted ? (
        <div className="flex flex-col items-center justify-center space-y-16 py-32 sm:py-40">
          <div className="bg-success-100 text-success-600 flex h-64 w-64 items-center justify-center rounded-full shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-36 w-36"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <p className="text-center text-sm font-semibold text-gray-800 md:text-base">
            پیام شما با موفقیت دریافت شد!
          </p>

          <p className="text-center text-xs text-gray-500 md:text-sm">
            همکاران ما در کدکدا به‌زودی با شما تماس خواهند گرفت.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-18">
          <div>
            <label className="mb-6 block text-xs font-bold text-gray-700 sm:text-sm md:text-[15px]">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              name="name"
              placeholder="مثال: علی محمدی"
              value={formState.name}
              onChange={handleChange}
              className="focus:border-primary-400 h-44 w-full rounded-[10px] border border-transparent bg-[#eef5fc] px-12 text-xs text-gray-800 placeholder-gray-400 transition-all duration-200 placeholder:text-xs focus:outline-none sm:px-16 sm:text-sm placeholder:sm:text-sm md:h-50 md:text-base placeholder:lg:text-base"
              required
            />
          </div>

          <div>
            <label className="mb-6 block text-xs font-bold text-gray-700 sm:text-sm md:text-[15px]">
              ایمیل یا شماره موبایل
            </label>
            <input
              type="text"
              name="email"
              placeholder="مثال: 09123456789 یا email@example.com"
              value={formState.email}
              onChange={handleChange}
              className="focus:border-primary-400 h-44 w-full rounded-[10px] border border-transparent bg-[#eef5fc] px-12 text-xs text-gray-800 placeholder-gray-400 transition-all duration-200 placeholder:text-xs focus:outline-none sm:px-16 sm:text-sm placeholder:sm:text-sm md:h-50 md:text-base placeholder:lg:text-base"
              required
            />
          </div>

          <div>
            <label className="mb-6 block text-xs font-bold text-gray-700 sm:text-sm md:text-[15px]">
              متن پیام
            </label>
            <textarea
              name="message"
              placeholder="پیام یا سوال خود را اینجا بنویسید..."
              value={formState.message}
              onChange={handleChange}
              className="focus:border-primary-400 h-100 w-full resize-none rounded-[10px] border border-transparent bg-[#eef5fc] p-12 text-xs text-gray-800 placeholder-gray-400 transition-all duration-200 placeholder:text-xs focus:outline-none sm:p-16 sm:text-sm placeholder:sm:text-sm md:h-120 md:text-base placeholder:lg:text-base"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-500 mt-12 flex h-44 w-full cursor-pointer items-center justify-center rounded-[10px] text-xs font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg active:scale-[0.99] sm:h-50 sm:text-sm md:text-base"
          >
            ارسال پیام
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
