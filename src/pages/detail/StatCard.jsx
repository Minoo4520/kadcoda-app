const ICONS = {
  clock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-16 w-16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  ),
  computer: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-16 w-16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
      />
    </svg>
  ),
  calendar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-16 w-16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  ),
};

function Indicator({ type, className = '', content, name }) {
  switch (type) {
    case 'dot':
      return (
        <span className="relative flex h-12 w-12">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${className} opacity-60`}
          />
          <span
            className={`relative inline-flex h-12 w-12 rounded-full ${className}`}
          />
        </span>
      );

    case 'icon':
      return (
        <span className="text-primary-600 group-hover:text-primary-700 transition-colors">
          {ICONS[name] ?? null}
        </span>
      );

    case 'badge':
      return (
        <span className="text-secondary-300 bg-primary-500 rounded-full px-8 py-3 text-[10px] font-medium">
          {content}
        </span>
      );

    case 'rating':
      return (
        <span className="text-xs tracking-tight text-[#FEC94D]">{content}</span>
      );

    default:
      return <span className="text-base">{content}</span>;
  }
}

export default function StatCard({ label, value, indicator }) {
  return (
    <div className="group hover:border-primary-600/30 relative flex h-102 flex-col justify-between rounded-2xl border border-[#E4E4F7] bg-gradient-to-b from-white to-[#FAFAFF] p-14 shadow-sm transition-all duration-300 hover:shadow-md sm:h-112 sm:p-16">
      <div className="flex items-center justify-between text-[#64748B]">
        <span className="text-xs font-bold">{label}</span>
        <Indicator {...indicator} />
      </div>
      <p className="text-xs font-black text-[#1E1B4B] transition-colors sm:text-sm">
        {value}
      </p>
    </div>
  );
}
