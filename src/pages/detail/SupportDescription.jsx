export default function SupportDescription({
  title = 'پشتیبانی دوره',
  description = 'تیم پشتیبانی کد کدا در تمام مسیر یادگیری همراه شماست. اگر در هر مرحله از دوره به مشکلی خوردید یا سوالی داشتید، از طریق راه‌های ارتباطی زیر با ما در ارتباط باشید.',
  channels = [],
  responseTime,
}) {
  return (
    <section className="mt-24 space-y-20 sm:mt-32 sm:space-y-24">
      <div className="flex items-center gap-12">
        <span className="bg-primary-700/10 text-primary-500 flex h-40 w-40 items-center justify-center rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-20 w-20"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <div className="space-y-12">
          <h3 className="text-lg font-black text-[#1E1B4B]">{title}</h3>
          {responseTime && (
            <span className="inline-flex items-center gap-6 rounded-full bg-[#22C55E]/10 px-8 py-3 text-[10px] font-bold text-[#16A34A]">
              <span className="h-6 w-6 rounded-full bg-[#22C55E]" />
              میانگین پاسخ‌دهی: {responseTime}
            </span>
          )}
        </div>
      </div>

      <div className="border-primary-100 rounded-2xl border bg-white p-20 shadow-sm sm:p-24">
        <p className="text-justify text-xs leading-21 text-[#475569] md:text-sm">
          {description}
        </p>

        {channels.length > 0 && (
          <div className="mt-20 grid grid-cols-1 gap-12 border-t border-[#F1F5F9] pt-16 sm:mt-24 sm:pt-24 md:grid-cols-3">
            {channels.map((channel, index) => (
              <a
                key={index}
                href={channel.href || '#'}
                className="group hover:border-primary-600/40 flex items-center gap-12 rounded-xl border border-[#E4E4F7] bg-[#FAFAFF] p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-indigo-100/60 sm:p-16"
              >
                <span className="text-primary-600 group-hover:bg-primary-600 flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-colors duration-300 group-hover:text-white">
                  {channel.icon}
                </span>
                <div className="space-y-4">
                  <p className="text-xs font-bold text-[#1E1B4B]">
                    {channel.label}
                  </p>
                  {channel.value && (
                    <p className="text-[11px] text-[#64748B]">
                      {channel.value}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
