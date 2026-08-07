// ArchiveSidebar.jsx
import { useState } from 'react';

const ArchiveSideBar = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [onlyFree, setOnlyFree] = useState(false);

  return (
    <aside className="shadow-primary-300/25 mt-40 w-320 rounded-2xl bg-white p-20 shadow-2xl">
      <div className="border-b border-gray-200 pb-32">
        <h3 className="mb-24 text-lg font-semibold text-gray-700">
          جستجو کنید{' '}
        </h3>

        <input
          type="text"
          placeholder="دوره مورد نظر ..."
          className="w-full rounded-md border border-gray-300/50 px-9 py-8 placeholder:text-gray-500"
        />
      </div>

      <div className="border-b border-gray-200 py-32">
        <h3 className="mb-32 text-lg font-semibold text-gray-700">
          مرتب‌سازی بر اساس
        </h3>
        <div className="space-y-32">
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
            محبوب‌ترین
          </label>
          <label className="text-md flex cursor-pointer items-center gap-8 text-gray-600 transition hover:text-gray-900">
            <input
              type="radio"
              name="sort"
              value="price"
              checked={sortBy === 'price'}
              onChange={(e) => setSortBy(e.target.value)}
              className="accent-primary-600 size-17"
            />
            ارزان‌ترین
          </label>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex items-center justify-between">
          <span className="text-md font-semibold text-gray-700">
            فقط دوره‌های رایگان
          </span>
          <button
            onClick={() => setOnlyFree(!onlyFree)}
            className={`relative inline-flex h-22 w-46 items-center rounded-full p-1 transition-colors ${
              onlyFree ? 'bg-primary-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute inline-block size-17 rounded-full bg-white transition-transform ${
                onlyFree ? 'right-4' : 'left-3'
              }`}
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ArchiveSideBar;
