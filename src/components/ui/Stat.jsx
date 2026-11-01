export default function Stat({ label, value }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-primary-600 text-[11px] font-black">{value}</span>
      <span className="text-[9px] text-[#8A96B0]">{label}</span>
    </div>
  );
}
