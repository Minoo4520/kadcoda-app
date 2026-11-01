export default function StepDot({ number, label, active, done }) {
  return (
    <div className="flex items-center gap-8">
      <span
        className={`flex h-32 w-32 items-center justify-center rounded-full text-[11px] font-black ${
          done
            ? 'bg-[#22C55E] text-white shadow-[0_0_8px_0_#22C55E66]'
            : active
              ? 'bg-[#1E4D9C] text-white shadow-[0_0_8px_0_#193B7366]'
              : 'bg-[#E4E9F2] text-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]'
        }`}
      >
        {done ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="h-16 w-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        ) : (
          number
        )}
      </span>
      <span
        className={`text-[11px] font-bold ${active || done ? 'text-[#1C2B4A]' : 'text-[#8A96B0]'}`}
      >
        {label}
      </span>
    </div>
  );
}
