import { useState } from 'react';

const ArchiveSideBar = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [onlyFree, setOnlyFree] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="shadow-primary-900/30 block w-full cursor-pointer rounded-md px-10 py-12 text-sm shadow-xs transition duration-300 md:hidden"
      >
        فیلتر کردن
      </button>

      <aside
        className={`shadow-primary-300/25 fixed inset-0 z-50 h-full min-h-screen w-full transform rounded-2xl bg-white p-20 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen
            ? 'pointer-events-auto translate-x-0'
            : 'pointer-events-none translate-x-full'
        } md:pointer-events-auto md:relative md:mt-40 md:block md:h-auto md:translate-x-0 lg:w-320`}
      >
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

        <div className="mt-18 grid grid-cols-6 gap-8 sm:mt-0 sm:hidden">
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
