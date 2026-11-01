import { motion } from 'framer-motion';

function DiscountCard({ discount, index, isCopied, onCopy }) {
  const percent = Math.min((discount.used / discount.total) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      className="flex flex-col gap-16 rounded-xl bg-[#E4E9F2] p-16 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]"
    >
      <div className="flex items-center justify-between gap-12">
        <div className="flex items-center gap-10">
          <span
            dir="ltr"
            className="text-primary-600 text-sm font-black tracking-wider"
          >
            {discount.code}
          </span>
          <span
            className={`rounded-full px-10 py-2 text-[10px] font-bold ${
              discount.active
                ? 'bg-[#DCFCE7] text-[#15803D]'
                : 'bg-[#FEE2E2] text-[#B91C1C]'
            }`}
          >
            {discount.active ? 'فعال' : 'غیرفعال'}
          </span>
        </div>

        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={onCopy}
            aria-label="کپی کد"
            className={`flex h-32 w-32 cursor-pointer items-center justify-center rounded-lg transition duration-200 ${
              isCopied
                ? 'bg-[#DCFCE7] text-[#15803D]'
                : 'text-primary-600 bg-[#DCE5F4] hover:brightness-105'
            } shadow-[inset_-2px_-2px_3px_0px_#FFFFFFCC,_inset_2px_2px_4px_0px_#A3B1C666]`}
          >
            {isCopied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-16 w-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                />
              </svg>
            )}
          </button>

          <button
            type="button"
            aria-label="حذف کد"
            className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-lg bg-[#FEE2E2] text-[#B91C1C] shadow-[inset_-2px_-2px_3px_0px_#FFFFFFCC,_inset_2px_2px_4px_0px_#A3B1C666] transition duration-200 hover:brightness-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-16 w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold text-[#8A96B0]">درصد تخفیف</span>
        <span className="text-secondary-400 text-xl font-black">
          {discount.percent}٪
        </span>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between text-[10px] font-bold">
          <span className="text-[#8A96B0]">
            مصرف‌شده: {discount.used} از {discount.total}
          </span>
          <span className="text-primary-600">{Math.round(percent)}٪</span>
        </div>
        <div className="relative h-12 w-full overflow-hidden rounded-full bg-[#EDF1F8] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-[#1E4D9C] to-[#2A5BA8]"
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-t-[#A3B1C640] pt-12">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] text-[#8A96B0]">تاریخ شروع</span>
          <span className="text-[11px] font-bold text-[#1C2B4A]">
            {discount.startDate}
          </span>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <span className="text-[10px] text-[#8A96B0]">تاریخ اعتبار</span>
          <span className="text-[11px] font-bold text-[#1C2B4A]">
            {discount.endDate}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function DiscountsGrid({ discounts, copiedCode, onCopy }) {
  return (
    <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
      {discounts.map((d, i) => (
        <DiscountCard
          key={d.id}
          discount={d}
          index={i}
          isCopied={copiedCode === d.code}
          onCopy={() => onCopy(d.code)}
        />
      ))}
    </div>
  );
}
