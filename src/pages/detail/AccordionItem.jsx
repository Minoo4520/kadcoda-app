export default function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#F1F5F9] transition-all duration-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="text-primary flex w-full cursor-pointer items-center justify-between bg-[#F7F7FF] p-16 text-sm font-bold transition-colors hover:bg-[#F1F5F9]/50 sm:p-20"
      >
        <div className="flex items-center gap-12">
          <span className="text-primary-400 flex h-24 w-24 items-center justify-center rounded-lg bg-[#4F46E5]/10 text-xs font-black">
            {item.index}
          </span>
          <span>{item.title}</span>
        </div>

        <div className="flex items-center gap-12">
          <span className="hidden text-xs font-medium text-[#64748B] sm:inline">
            {item.meta}
          </span>
          <span
            className={`text-primary-700 text-lg font-bold transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="divide-y divide-[#F1F5F9] border-t border-[#F1F5F9] bg-white p-16 text-sm text-[#64748B] sm:p-20">
            {item.lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className={`flex items-center justify-between ${
                  index === 0 ? 'pb-12' : 'py-12'
                }`}
              >
                <span className="text-xs sm:text-sm">{lesson.title}</span>
                <span className="text-primary-600 rounded bg-[#F1F5F9] px-8 py-4 font-mono text-xs">
                  {lesson.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
