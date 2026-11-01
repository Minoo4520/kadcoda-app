export default function ShareBox() {
  return (
    <div className="border-primary-100 mt-40 rounded-2xl border bg-white p-20 shadow-sm sm:p-24">
      <div className="flex flex-col items-center gap-16 sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-primary-900 text-sm font-bold">
            این مقاله برایتان مفید بود؟
          </h3>
          <p className="mt-4 text-xs text-gray-500">
            آن را با دوستانتان به اشتراک بگذارید
          </p>
        </div>
        <div className="flex items-center gap-8">
          <button
            type="button"
            aria-label="اشتراک در توییتر"
            className="hover:bg-primary-500 flex h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-16 w-16"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="اشتراک در لینکدین"
            className="hover:bg-primary-500 flex h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-16 w-16"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="کپی لینک"
            className="hover:bg-primary-500 flex h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-16 w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
