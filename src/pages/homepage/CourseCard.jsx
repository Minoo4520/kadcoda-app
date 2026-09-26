import { Link } from 'react-router';

export default function CourseCard({
  slide = false,
  course,
  isPresential = false,
  mobileHorizontal = false,
}) {
  const heightClasses = mobileHorizontal
    ? slide
      ? 'sm:min-h-345 sm:max-h-460'
      : 'sm:min-h-330 sm:max-h-460'
    : slide
      ? 'max-h-345 min-h-345 sm:max-h-460'
      : 'max-h-330 min-h-330 sm:max-h-460';

  const imageClasses = mobileHorizontal
    ? 'h-[107px] w-full rounded-2xl object-cover sm:h-210 sm:rounded-[20px]'
    : `${slide ? 'h-175' : 'h-110'} w-full rounded-[20px] object-cover sm:h-210`;

  return (
    <Link to={`/course/${course.slug}`}>
      <div
        className={`group ${heightClasses} overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
          mobileHorizontal
            ? 'grid grid-cols-[150px_1fr] items-center gap-1.5 sm:block sm:border sm:border-gray-200 sm:bg-white sm:shadow-sm'
            : ' border border-gray-200 bg-white shadow-sm'
        }`}
      >
        <img src={course.image} alt={course.title} className={imageClasses} />

        <div
          className={`flex flex-col ${
            slide ? 'justify-normal' : 'justify-between'
          } ${
            mobileHorizontal
              ? 'min-h-0 px-4 sm:min-h-220 sm:px-12'
              : 'min-h-220 px-8 sm:px-12'
          }`}
        >
          <div>
            <p className="hover:text-primary-600 group-hover:text-primary-600 text-primary-900 my-12 text-sm font-bold transition duration-200 sm:text-xl">
              {course.title}
            </p>

            <p className="mb-5 line-clamp-1 text-xs leading-20 text-gray-500 sm:mb-8 sm:text-sm">
              {course.description}
            </p>
          </div>

          <div>
            <div className="mt-auto flex flex-col rounded-xl py-6 sm:flex-row sm:items-center sm:justify-between sm:py-10">
              <div className="flex items-center gap-2 text-gray-600">
                {isPresential ? (
                  <>
                    <div className="bg-secondary-300/30 flex items-center gap-4 rounded-lg px-9 py-3 font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-secondary-500 size-14"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7v5l3 2"
                        />
                      </svg>
                      <span className="text-secondary-600 text-[9px] sm:text-xs">
                        حضوری
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="bg-secondary-200/30 flex items-center gap-2 rounded-lg px-3 py-2 font-bold sm:gap-4 sm:px-9 sm:py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-secondary-500 size-12 sm:size-14"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7v5l3 2"
                      />
                    </svg>

                    <span className="text-secondary-600 text-[9px] sm:text-xs">
                      {course.hours} ساعت
                    </span>
                  </div>
                )}
              </div>

              <span className="text-left text-xs font-bold sm:text-right sm:text-[15px]">
                {course.price}
              </span>
            </div>

            <div className="relative py-4">
              <div className="via-primary-400/20 absolute bottom-0 left-1/2 h-2.5 w-3/4 -translate-x-1/2 transform bg-gradient-to-r from-transparent to-transparent"></div>
            </div>

            <button
              className={`group-hover:shadow-primary-600/40 group-hover:text-secondary-300 text-primary-50 sm:text-md to-primary-600 w-full cursor-pointer rounded-xl bg-gradient-to-br from-[#1E4D9C] text-center text-xs font-semibold transition duration-300 group-hover:shadow-md ${
                mobileHorizontal
                  ? 'my-4 py-4 sm:my-12 sm:py-8'
                  : 'my-8 py-5 sm:my-12 sm:py-8'
              }`}
            >
              مشاهده دوره
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
