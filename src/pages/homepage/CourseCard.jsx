import { Link } from 'react-router';

export default function CourseCard({ course, isPresential = false }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={course.image}
        alt={course.title}
        className="h-210 w-full object-cover"
      />

      <div className="p-12">
        <Link
          to={`/course/${course.slug}`}
          className="hover:text-primary-600 my-8 text-lg font-medium text-gray-900 transition"
        >
          {course.title}
        </Link>

        <p className="my-20 line-clamp-2 text-sm leading-20 text-gray-500">
          {course.description}
        </p>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-50 px-10 py-10">
          <div className="flex items-center gap-2 text-gray-600">
            {isPresential ? (
              <>
                <span className="text-primary-500">حضوری</span>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary-500 size-16"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7v5l3 2"
                  />
                </svg>

                <span>{course.hours} ساعت</span>
              </div>
            )}
          </div>

          <span className="font-bold text-indigo-600">{course.price}</span>
        </div>
      </div>
    </div>
  );
}
