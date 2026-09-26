export default function CourseDescription({
  title,
  description,
  highlights = [],
}) {
  return (
    <section className="mt-24 space-y-20 sm:mt-32 sm:space-y-24">
      <div className="flex items-center gap-12">
        <span className="from-primary-500 to-primary-400 h-24 w-4 rounded-full bg-gradient-to-b" />
        <h3 className="text-primary text-lg font-black">
          {title || 'درباره این دوره'}
        </h3>
      </div>

      <div className="border-primary-100 rounded-2xl border bg-gradient-to-b from-white to-[#FAFAFF] p-16 shadow-sm sm:p-24">
        <p className="text-justify text-xs leading-21 text-[#475569] md:text-sm">
          {description}
        </p>

        {highlights.length > 0 && (
          <ul className="mt-20 mt-24 grid grid-cols-1 gap-12 border-t border-[#F1F5F9] pt-20 sm:pt-24 md:grid-cols-2">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="text-primary-900 flex items-center gap-12 text-xs sm:text-sm"
              >
                <span className="text-secondary-300 bg-primary-700 mt-4 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="leading-21">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
