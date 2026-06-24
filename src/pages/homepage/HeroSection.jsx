function HeroSection() {
  return (
    <section className="bg-primary-50 flex min-h-screen items-center justify-center pt-32">
      <div className="container">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-4xl leading-60 font-bold text-gray-900 md:text-4xl lg:text-5xl">
              هر آنچه که در راه رسیدن به
              <br />
              شغل ایده آل نیاز دارید
            </h1>

            <h3 className="mt-25 text-lg text-gray-600">
              تخصصی ترین آموزش ها در ایران با مجوز رسمی
            </h3>

            <div className="bg-primary-500/10 border-primary-500/22 shadow-primary-500/10 relative mt-25 rounded-2xl border p-30 shadow-lg backdrop-blur-[28px]">
              <div className="bg-primary-500 shadow-primary-500/30 absolute -top-35 left-20 flex items-center justify-center rounded-full p-10 shadow-lg">
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

              <p className="text-base text-gray-700">
                با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم
                گرفتیم دانش و تجربه خود را در اختیار همه علاقه‌مندان به این رشته
                ورزشی جذاب قرار دهیم.
              </p>
            </div>

            <div className="mt-40 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="border-l-primary-500/50 relative border-l-4 p-6 text-center">
                <span className="text-primary-500 text-4xl font-bold">+۵۰</span>
                <p className="text-md mt-2 font-medium text-gray-700">
                  دوره تخصصی
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  آموزش‌های عملی و پروژه‌محور
                </p>
              </div>

              <div className="border-l-primary-500/50 relative border-l-4 p-6 text-center">
                <span className="text-primary-500 text-4xl font-bold">
                  +۲۰۰۰
                </span>
                <p className="text-md mt-2 font-medium text-gray-700">دانشجو</p>
                <p className="mt-1 text-sm text-gray-500">
                  هنرجویان فعال در سراسر ایران
                </p>
              </div>

              <div className="p-6 text-center">
                <span className="text-primary-500 text-4xl font-bold">
                  +۱۰۰
                </span>
                <p className="text-md mt-2 font-medium text-gray-700">مدرس</p>
                <p className="mt-1 text-sm text-gray-500">
                  اساتید مجرب و حرفه‌ای
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-1 justify-center lg:justify-end">
            <div className="relative h-80 w-80 md:h-[420px] md:w-[420px] lg:h-[550px] lg:w-[550px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 650 650"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0"
              >
                <defs>
                  <linearGradient
                    id="circleGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#2adf69" />
                    <stop offset="100%" stopColor="#57e687" />
                  </linearGradient>
                </defs>

                <circle
                  cx="325"
                  cy="325"
                  r="280"
                  fill="url(#circleGradient)"
                  stroke="#82eca5"
                  strokeWidth="6"
                  opacity="0.9"
                />

                <circle
                  cx="325"
                  cy="325"
                  r="190"
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="4"
                  strokeDasharray="16 16"
                />

                <circle cx="325" cy="325" r="60" fill="white" opacity="0.8" />

                <circle cx="325" cy="55" r="12" fill="white" opacity="0.6" />
                <circle cx="595" cy="325" r="12" fill="white" opacity="0.6" />
                <circle cx="325" cy="595" r="12" fill="white" opacity="0.6" />
                <circle cx="55" cy="325" r="12" fill="white" opacity="0.6" />

                <circle cx="500" cy="150" r="7" fill="white" opacity="0.4" />
                <circle cx="150" cy="500" r="7" fill="white" opacity="0.4" />
                <circle cx="500" cy="500" r="7" fill="white" opacity="0.4" />
                <circle cx="150" cy="150" r="7" fill="white" opacity="0.4" />

                <circle cx="325" cy="150" r="5" fill="white" opacity="0.3" />
                <circle cx="500" cy="325" r="5" fill="white" opacity="0.3" />
                <circle cx="325" cy="500" r="5" fill="white" opacity="0.3" />
                <circle cx="150" cy="325" r="5" fill="white" opacity="0.3" />

                <circle cx="420" cy="80" r="4" fill="white" opacity="0.25" />
                <circle cx="570" cy="420" r="4" fill="white" opacity="0.25" />
                <circle cx="230" cy="570" r="4" fill="white" opacity="0.25" />
                <circle cx="80" cy="230" r="4" fill="white" opacity="0.25" />
              </svg>

              <img
                src="/images/avatar.png"
                className="absolute top-1/2 left-1/2 max-h-[60%] max-w-[60%] -translate-x-1/2 -translate-y-1/2 object-contain grayscale-100"
                alt="avatar"
              />

              <img
                src="/images/coding.png"
                className="absolute top-40 left-30 max-h-[18%] max-w-[18%] object-contain"
                alt="coding"
              />

              <img
                src="/images/html.png"
                className="absolute bottom-80 left-10 max-h-[18%] max-w-[18%] object-contain"
                alt="html"
              />

              <img
                src="/images/rocket.png"
                className="absolute top-1/2 right-0 max-h-[30%] max-w-[30%] -translate-y-1/2 object-contain"
                alt="rocket"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
