export default function FileInput({ fileName, onChange, accept }) {
  return (
    <div className="flex items-center gap-12 rounded-xl bg-[#E4E9F2] px-14 py-10 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="h-16 w-16 shrink-0 text-[#8A96B0]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
        />
      </svg>
      <label className="flex-1 cursor-pointer">
        <span
          className={`text-[11px] font-bold ${fileName ? 'text-primary-600' : 'text-[#8A96B0]'}`}
        >
          {fileName || 'انتخاب فایل...'}
        </span>
        <input
          type="file"
          accept={accept}
          className="hidden"
          onChange={onChange}
        />
      </label>
    </div>
  );
}
