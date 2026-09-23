export default function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#F1F5F9] transition-all duration-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between bg-[#F7F7FF] p-5 text-sm font-bold text-[#1E1B4B] transition-colors hover:bg-[#F1F5F9]/50"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#4F46E5]/10 text-xs font-black text-[#4F46E5]">
            {item.index}
          </span>
          <span>{item.title}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-medium text-[#64748B] sm:inline">
            {item.meta}
          </span>
          <span
            className={`text-lg font-bold text-[#4F46E5] transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="divide-y divide-[#F1F5F9] border-t border-[#F1F5F9] bg-white p-5 text-sm text-[#64748B]">
          {item.lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`flex items-center justify-between ${
                index === 0 ? 'pb-3' : 'py-3'
              }`}
            >
              <span>{lesson.title}</span>
              <span className="rounded bg-[#F1F5F9] px-2 py-1 font-mono text-xs text-[#1E1B4B]">
                {lesson.duration}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
