import { useState } from 'react';

const ArchiveSideBar = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-primary-900 shadow-primary-900/20 hover:shadow-primary-900/30 border-primary-100 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border bg-white px-10 py-12 text-sm shadow-md transition duration-300 hover:shadow-lg md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-primary-900 h-16 w-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
          />
        </svg>
        فیلتر کردن
      </button>

      <aside
        className={`shadow-primary-300/25 fixed inset-0 z-50 h-full w-full transform rounded-2xl bg-white p-20 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen
            ? 'pointer-events-auto translate-x-0'
            : 'pointer-events-none translate-x-full'
        } md:pointer-events-auto md:relative md:mt-40 md:block md:h-auto md:translate-x-0 lg:w-320`}
      >
        <div className="border-b border-gray-200 pb-32">
          <h3 className="mb-24 flex items-center gap-8 text-lg font-semibold text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-20 w-20 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            جستجو کنید
          </h3>

          <input
            type="text"
            placeholder="مقاله مورد نظر ..."
            className="w-full rounded-md border border-gray-300/50 px-9 py-8 placeholder:text-gray-500"
          />
        </div>

        <div className="py-32">
          <h3 className="mb-32 flex items-center gap-8 text-lg font-semibold text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-20 w-20 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
              />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <circle cx="17.5" cy="17.5" r="3.5" />
            </svg>
            مرتب‌سازی بر اساس
          </h3>
          <div className="space-y-32 sm:space-y-28 lg:space-y-32">
            <label className="text-md flex cursor-pointer items-center gap-8 text-gray-600 transition hover:text-gray-900">
              <input
                type="radio"
                name="sort"
                value="newest"
                checked={sortBy === 'newest'}
                onChange={(e) => setSortBy(e.target.value)}
                className="accent-primary-600 size-17"
              />
              جدیدترین
            </label>
            <label className="text-md flex cursor-pointer items-center gap-8 text-gray-600 transition hover:text-gray-900">
              <input
                type="radio"
                name="sort"
                value="oldest"
                checked={sortBy === 'oldest'}
                onChange={(e) => setSortBy(e.target.value)}
                className="accent-primary-600 size-17"
              />
              قدیمی‌ترین
            </label>
            <label className="text-md flex cursor-pointer items-center gap-8 text-gray-600 transition hover:text-gray-900">
              <input
                type="radio"
                name="sort"
                value="popular"
                checked={sortBy === 'popular'}
                onChange={(e) => setSortBy(e.target.value)}
                className="accent-primary-600 size-17"
              />
              پربازدیدترین
            </label>
            <label className="text-md flex cursor-pointer items-center gap-8 text-gray-600 transition hover:text-gray-900">
              <input
                type="radio"
                name="sort"
                value="reading"
                checked={sortBy === 'reading'}
                onChange={(e) => setSortBy(e.target.value)}
                className="accent-primary-600 size-17"
              />
              کوتاه‌ترین زمان مطالعه
            </label>
          </div>
        </div>

        <div className="mt-18 grid grid-cols-6 gap-8 sm:mt-0 md:hidden">
          <button className="bg-primary-100 text-primary-500 col-span-3 cursor-pointer rounded-md px-8 py-8">
            مشاهده نتایج
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary-900 shadow-primary-600/10 col-span-3 cursor-pointer rounded-md px-8 py-8 shadow-sm"
          >
            بستن
          </button>
        </div>
      </aside>
    </>
  );
};

export default ArchiveSideBar;
