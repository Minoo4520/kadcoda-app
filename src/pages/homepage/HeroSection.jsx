function HeroSection() {
  return (
    <section className="flex items-center justify-center pt-32 md:min-h-screen">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-12 lg:gap-40">
          <div className="col-span-12 text-center lg:col-span-7 lg:text-right">
            <h1 className="text-primary-900 text-5xl leading-60 font-bold md:text-5xl">
              آکادمی آموزش برنامه نویسی
              <br /> و <span className="text-secondary-300">هوش مصنوعی</span>
            </h1>

            <h3 className="text-16 text-primary-900 mt-25">
              اینجا نقطه شروع سفر حرفه ای تو به دنیانی هوش مصنوعیه
            </h3>

            <div className="border-primary-500/22 shadow-primary-500/10 relative mt-25 rounded-2xl border p-30 shadow-lg backdrop-blur-[28px]">
              <div className="bg-primary-900 shadow-primary-500/30 absolute -top-35 left-20 flex items-center justify-center rounded-full p-10 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-40"
                >
                  <path d="M12 6V2M8 2L10 6M16 2L14 6" />
                  <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" />
                  <path d="M9 14L11 16L15 11" />
                </svg>
              </div>

              <p className="text-primary-600 text-base">
                با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم
                گرفتیم دانش و تجربه خود را در اختیار همه علاقه‌مندان به این رشته
                ورزشی جذاب قرار دهیم.
              </p>
            </div>

            <div className="mt-40 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="border-l-primary-500/50 relative border-l-4 p-6 text-center">
                <span className="text-secondary-500 text-4xl font-bold">
                  +۵۰
                </span>
                <p className="text-md text-primary-700 mt-2 font-bold">
                  دوره تخصصی
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  آموزش‌های عملی و پروژه‌محور
                </p>
              </div>

              <div className="border-l-primary-500/50 relative border-l-4 p-6 text-center">
                <span className="text-secondary-500 text-4xl font-bold">
                  +۲۰۰۰
                </span>
                <p className="text-md text-primary-700 mt-2 font-bold">
                  دانشجو
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  هنرجویان فعال در سراسر ایران
                </p>
              </div>

              <div className="p-6 text-center">
                <span className="text-secondary-500 text-4xl font-bold">
                  +۱۰۰
                </span>
                <p className="text-md text-primary-700 mt-2 font-bold">مدرس</p>
                <p className="mt-1 text-sm text-gray-500">
                  اساتید مجرب و حرفه‌ای
                </p>
              </div>
            </div>
          </div>

          <div className="relative col-span-5 hidden lg:flex lg:justify-end">
            <img src="/images/hero.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
