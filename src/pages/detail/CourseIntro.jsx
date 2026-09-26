import StatCard from './StatCard';

export default function CourseIntro({ course }) {
  return (
    <div className="space-y-24">
      <div className="border-secondary-500/30 bg-secondary-500/10 text-primary-800 inline-flex items-center gap-8 rounded-xl border px-12 py-6 text-xs font-bold">
        <span className="bg-secondary-300 h-8 w-8 animate-ping rounded-full" />
        بروزرسانی جدید
      </div>

      <h2 className="text-primary-900 text-3xl leading-tight font-black md:text-5xl">
        {course.title}
      </h2>

      <div className="group relative w-full overflow-hidden rounded-3xl border border-[#E4E4F7] bg-[#F7F7FF] shadow-sm">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#000]/50 via-[#000]/0 to-[#000]/0 transition-opacity duration-300 group-hover:from-black/60" />

        <button
          type="button"
          aria-label="پخش پیش‌نمایش دوره"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="relative flex h-72 w-72 items-center justify-center rounded-full bg-white/35 ring-1 ring-white/50 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/35" />

            <span className="group-hover:bg-primary-600 relative flex h-56 w-56 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg shadow-black/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary-500 h-24 w-24 transition-colors duration-300 group-hover:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </button>
      </div>

      <p className="max-w-2xl text-justify text-sm leading-relaxed text-[#64748B] sm:text-base md:text-lg">
        {course.description}
      </p>

      <div className="grid grid-cols-2 gap-8 pt-12 sm:gap-16 sm:pt-16 md:grid-cols-3">
        {course.stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
    </div>
  );
}
