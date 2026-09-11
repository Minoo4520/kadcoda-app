import { Link } from 'react-router';

export default function CourseCard({
  slide = false,
  course,
  isPresential = false,
}) {
  return (
    <Link to={`/course/${course.slug}`}>
      <div
        className={`group ${slide ? 'max-h-345 min-h-345' : 'max-h-330 min-h-330'} overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:max-h-460`}
      >
        <img
          src={course.image}
          alt={course.title}
          className={` ${slide ? 'h-175' : 'h-110'} w-full rounded-[20px] object-cover sm:h-210`}
        />

        <div
          className={`flex min-h-220 flex-col ${slide ? 'justify-normal' : ' justify-between'} px-8 sm:px-12`}
        >
          <div>
            <p className="hover:text-primary-600 group-hover:text-primary-600 text-primary-900 my-12 text-sm font-bold transition duration-200 sm:text-xl">
              {course.title}
            </p>

            <p className="mb-5 line-clamp-2 text-xs leading-20 text-gray-500 sm:mb-8 sm:text-sm">
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
                      <span className="text-secondary-600 text-xs">حضوری</span>
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

                    <span className="text-secondary-600 text-xs">
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
            <button className="group-hover:shadow-primary-600/40 group-hover:text-secondary-300 text-primary-50 sm:text-md to-primary-600 my-8 w-full cursor-pointer rounded-xl bg-gradient-to-br from-[#1E4D9C] py-5 text-center text-xs font-semibold transition duration-300 group-hover:shadow-md sm:my-12 sm:py-8">
              مشاهده دوره
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
