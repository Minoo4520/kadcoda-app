function Indicator({ type, className = '', content }) {
  switch (type) {
    case 'dot':
      return <span className={`h-2 w-2 rounded-full ${className}`} />;
    case 'badge':
      return (
        <span className="rounded bg-[#4F46E5]/10 px-1.5 py-0.5 text-xs font-bold text-[#4F46E5]">
          {content}
        </span>
      );
    case 'rating':
      return <span className="text-xs text-[#FEC94D]">{content}</span>;
    default:
      return <span className="text-sm">{content}</span>;
  }
}

export default function StatCard({ label, value, indicator }) {
  return (
    <div className="flex h-28 flex-col justify-between rounded-2xl border border-[#E4E4F7] bg-[#FFFFFF] p-4 shadow-sm">
      <div className="flex items-center justify-between text-[#64748B]">
        <span className="text-xs font-bold">{label}</span>
        <Indicator {...indicator} />
      </div>
      <p className="text-sm font-black text-[#1E1B4B]">{value}</p>
    </div>
  );
}
