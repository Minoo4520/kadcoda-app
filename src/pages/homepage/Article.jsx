import { Link } from 'react-router';

export default function Article({ article }) {
  return (
    <Link
      to={`/article/${article.slug}`}
      className="group hover:bg-primary-50 relative mb-20 block min-h-380 overflow-visible rounded-xl rounded-t-3xl bg-white shadow-lg shadow-gray-700/10 transition-all duration-300 hover:-translate-y-8 sm:min-h-470 lg:min-h-auto"
    >
      <div className="relative h-180 sm:h-310 lg:h-220">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full rounded-3xl object-cover"
        />

        <span className="text-13 absolute right-10 bottom-10 hidden rounded-md bg-gray-900/80 p-3 text-sm text-gray-50 transition sm:block">
          {article.time}
        </span>
      </div>

      <div className="p-20 pb-40">
        <h3 className="text-20 text-primary-900 sm:text-md group-hover:text-primary-500 mt-10 text-sm font-bold transition md:text-lg">
          {article.title}
        </h3>

        <p className="text-primary-900 md:text-md mt-12 line-clamp-2 text-xs leading-24 transition sm:text-sm">
          {article.description}
        </p>

        <div className="bg-success-300/25 mt-6 flex w-fit items-center gap-4 rounded-lg px-9 py-3 font-bold sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-success-400 size-14"
          >
            <circle cx="12" cy="12" r="9" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7v5l3 2"
            />
          </svg>
          <span className="text-success-400 text-xs">{article.time}</span>
        </div>
      </div>

      {/* Arrow */}

      <div className="bg-primary absolute -bottom-20 left-1/2 flex size-40 -translate-x-1/2 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-white group-hover:shadow-md group-hover:shadow-gray-600/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="group-hover:text-primary size-22 text-white transition-all duration-300 group-hover:-rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M13 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
