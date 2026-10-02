export default function CollabFormFields({
  form,
  dropdownOpen,
  collabOptions,
  handleChange,
  handleSelectType,
  setDropdownOpen,
  handleFile,
}) {
  return (
    <div className="flex flex-col gap-12">
      <input
        type="text"
        placeholder="نام و نام‌خانوادگی"
        value={form.fullName}
        onChange={handleChange('fullName')}
        className="bg-primary-50 focus:ring-primary-300 w-full rounded-xl px-16 py-12 text-right text-xs outline-none placeholder:text-xs focus:ring-2 sm:text-sm placeholder:sm:text-sm"
      />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <input
          type="text"
          placeholder="شماره تماس"
          value={form.phone}
          onChange={handleChange('phone')}
          className="bg-primary-50 focus:ring-primary-300 w-full rounded-xl px-16 py-12 text-right text-xs outline-none placeholder:text-xs focus:ring-2 sm:text-sm placeholder:sm:text-sm"
        />

        <input
          type="email"
          placeholder="ایمیل (اختیاری)"
          value={form.email}
          onChange={handleChange('email')}
          className="bg-primary-50 focus:ring-primary-300 w-full rounded-xl px-16 py-12 text-right text-xs outline-none placeholder:text-xs focus:ring-2 sm:text-sm placeholder:sm:text-sm"
        />
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setDropdownOpen((v) => !v)}
          className="bg-primary-50 flex w-full flex-row-reverse items-center justify-between rounded-xl px-16 py-12 text-right text-xs placeholder:text-xs sm:text-sm placeholder:sm:text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`text-primary-400 h-16 w-16 transition-transform ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>

          <span
            className={
              form.collabType ? 'text-primary-800' : 'text-primary-400'
            }
          >
            {form.collabType || 'در اختیار شما: انتخاب کنید'}
          </span>
        </button>

        {dropdownOpen && (
          <div className="border-primary-200 absolute z-10 mt-4 w-full overflow-hidden rounded-xl border bg-gray-100 text-right text-xs shadow-lg sm:text-sm">
            {collabOptions.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => handleSelectType(opt)}
                className="text-primary-700 w-full px-16 py-8 text-right text-sm hover:bg-blue-50"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>

      <label className="border-primary-600 bg-primary-50 flex w-full cursor-pointer flex-row-reverse items-center justify-between rounded-xl border px-16 py-12 text-xs placeholder:text-xs sm:text-sm placeholder:sm:text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-primary-400 h-16 w-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-.88-8.914 5.25 5.25 0 0 1 10.26-1.35 5.75 5.75 0 0 1 2.37 10.264"
          />
        </svg>

        <span
          className={form.fileName ? 'text-primary-800' : 'text-primary-400'}
        >
          {form.fileName || 'بارگذاری فایل'}
        </span>

        <input type="file" onChange={handleFile} className="hidden" />
      </label>

      <p className="text-primary-400 -mt-8 text-xs">فایل رزومه</p>

      <textarea
        placeholder="توضیحات تکمیلی (اختیاری)"
        value={form.notes}
        onChange={handleChange('notes')}
        rows={3}
        className="bg-primary-50 focus:ring-primary-900 border-primary-600 w-full resize-none rounded-xl border px-16 py-12 text-right text-xs outline-none placeholder:text-xs focus:ring-2 sm:text-sm placeholder:sm:text-sm"
      />
    </div>
  );
}
