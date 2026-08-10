import { Link } from 'react-router';

export default function CourseCard({ course, isPresential = false }) {
  return (
    <Link to={`/course/${course.slug}`}>
      <div className="group overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <img
          src={course.image}
          alt={course.title}
          className="h-210 w-full object-cover"
        />

        <div className="px-12">
          <p className="hover:text-primary-600 group-hover:text-primary-600 text-primary-900 my-12 text-xl font-bold transition duration-200">
            {course.title}
          </p>

          <p className="mb-8 line-clamp-2 text-sm leading-20 text-gray-500">
            {course.description}
          </p>

          <div className="flex items-center justify-between rounded-xl py-10">
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
                <div className="bg-secondary-200/30 flex items-center gap-4 rounded-lg px-9 py-3 font-bold">
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

                  <span className="text-secondary-600 text-xs">
                    {course.hours} ساعت
                  </span>
                </div>
              )}
            </div>

            <span className="text-[15px] font-bold">{course.price}</span>
          </div>
          <div className="relative py-4">
            <div className="via-primary-400/20 absolute bottom-0 left-1/2 h-2.5 w-3/4 -translate-x-1/2 transform bg-gradient-to-r from-transparent to-transparent"></div>
          </div>
          <button className="bg-primary-600 group-hover:shadow-primary-600/40 text-primary-50 text-md my-12 w-full cursor-pointer rounded-xl py-8 text-center font-semibold transition duration-300 group-hover:shadow-md">
            مشاهده دوره
          </button>
        </div>
      </div>
    </Link>
  );
}
