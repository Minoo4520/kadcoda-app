export default function PurchaseCard({ course }) {
  const { pricing, purchaseFeatures } = course;

  return (
    <div className="relative space-y-20 overflow-hidden rounded-3xl border border-[#E4E4F7] bg-white p-24 shadow-sm sm:space-y-24 sm:p-32">
      <div className="bg-primary-500 absolute top-0 left-0 h-6 w-full" />

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#64748B] line-through">
            {pricing.originalPrice}
          </span>
          <span className="rounded-lg bg-[#EF4444]/10 px-8 py-2 text-[10px] font-bold text-[#EF4444] sm:text-xs">
            {pricing.discountLabel}
          </span>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-primary-800 text-sm font-medium">
            مبلغ قابل پرداخت:
          </span>
          <div>
            <span className="text-primary text-2xl font-black sm:text-3xl">
              {pricing.finalPrice}
            </span>
            <span className="mr-4 text-xs text-[#64748B]">
              {pricing.currency}
            </span>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#F1F5F9]" />

      <ul className="space-y-14 text-xs font-medium text-[#64748B]">
        {purchaseFeatures.map((f) => (
          <li key={f} className="flex items-center gap-10">
            <span className="h-6 w-6 rounded-full bg-[#22C55E]" />
            {f}
          </li>
        ))}
      </ul>

      <button className="bg-secondary hover:bg-secondary-500 flex w-full cursor-pointer items-center justify-center gap-8 rounded-2xl py-12 text-sm font-bold tracking-wide text-white shadow-lg shadow-indigo-100/50 transition-all sm:py-16">
        🛒 افزودن به سبد خرید و شروع آنی
      </button>
    </div>
  );
}
