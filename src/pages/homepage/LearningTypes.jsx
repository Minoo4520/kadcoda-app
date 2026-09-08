export default function LearningTypes() {
  return (
    <section className="py-56 md:py-72 lg:py-96">
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-40 text-center">
          <h2 className="text-primary text-2xl font-black">
            شیوه برگزاری دوره‌ها
          </h2>

          <p className="text-16 mt-12">
            متناسب با شرایط خود، بهترین روش یادگیری را انتخاب کنید.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-24 sm:gap-48 md:gap-20 lg:grid-cols-3">
          {/* Online */}
          <div className="rounded-24 bg-primary-50 relative flex cursor-pointer items-center gap-24 overflow-hidden rounded-lg p-24 transition duration-300 hover:-translate-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 320"
              fill="none"
              className="text-primary-300 absolute -top-5 -left-10 size-70 rotate-180"
            >
              <path
                d="M320 20C170 20 50 140 50 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M320 55C190 55 85 160 85 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M320 90C215 90 120 185 120 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            <div className="text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-56 w-56"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M3 5h18v12H3zM8 19h8"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-primary text-md font-bold sm:text-lg">
                دوره‌های آنلاین
              </h3>

              <p className="sm:text-md mt-6 text-sm leading-24">
                مشاهده آموزش‌ها در هر زمان و هر مکان.
              </p>
            </div>
          </div>

          {/* Offline */}
          <div className="rounded-24 bg-primary-800 relative flex cursor-pointer items-center gap-24 overflow-hidden rounded-lg p-24 transition duration-300 hover:-translate-y-2 md:-translate-y-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 320"
              fill="none"
              className="text-primary-300 absolute -top-5 -left-10 size-70 rotate-180"
            >
              <path
                d="M320 20C170 20 50 140 50 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M320 55C190 55 85 160 85 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M320 90C215 90 120 185 120 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            <div className="text-secondary-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-56 w-56"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 320"
              fill="none"
              className="text-secondary-300 absolute -top-5 -left-10 size-70 rotate-180"
            >
              <path
                d="M320 20C170 20 50 140 50 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M320 55C190 55 85 160 85 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M320 90C215 90 120 185 120 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            <div>
              <h3 className="text-secondary-300 text-md sm:text-lg">
                دوره‌های حضوری
              </h3>

              <p className="sm:text-md text-alcohol-50 mt-6 text-sm leading-24">
                آموزش حضوری همراه با تمرین و رفع اشکال.
              </p>
            </div>
          </div>

          {/* Hybrid */}
          <div className="rounded-24 bg-primary-50 relative flex cursor-pointer items-center gap-24 overflow-hidden rounded-lg p-24 transition duration-300 hover:-translate-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 320"
              fill="none"
              className="text-primary-300 absolute -top-5 -left-10 size-70 rotate-180"
            >
              <path
                d="M320 20C170 20 50 140 50 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M320 55C190 55 85 160 85 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M320 90C215 90 120 185 120 320"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            <div className="text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-56 w-56"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M12 3v12m0 0l-3-3m3 3l3-3M5 21h14"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-primary text-md font-bold sm:text-lg">
                حضوری + آنلاین
              </h3>

              <p className="sm:text-md mt-6 text-sm leading-24">
                دسترسی همزمان به کلاس و نسخه آنلاین دوره.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
