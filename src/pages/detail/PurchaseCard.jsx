import { pricing, purchaseFeatures } from '../data/courseData';

export default function PurchaseCard() {
  return (
    <div className="relative space-y-6 overflow-hidden rounded-3xl border border-[#E4E4F7] bg-white p-8 shadow-sm">
      <div className="absolute top-0 left-0 h-1.5 w-full bg-[#4F46E5]" />

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#64748B] line-through">
            {pricing.originalPrice}
          </span>
          <span className="rounded-lg bg-[#EF4444]/10 px-2 py-0.5 text-xs font-bold text-[#EF4444]">
            {pricing.discountLabel}
          </span>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-sm font-medium text-[#1E1B4B]">
            مبلغ قابل پرداخت:
          </span>
          <div>
            <span className="text-3xl font-black text-[#4F46E5]">
              {pricing.finalPrice}
            </span>
            <span className="mr-1 text-xs text-[#64748B]">
              {pricing.currency}
            </span>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#F1F5F9]" />

      <ul className="space-y-3.5 text-xs font-medium text-[#64748B]">
        {purchaseFeatures.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#4F46E5] py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-indigo-100/50 transition-all hover:bg-[#3b33c7]"
      >
        🛒 افزودن به سبد خرید و شروع آنی
      </button>
    </div>
  );
}
