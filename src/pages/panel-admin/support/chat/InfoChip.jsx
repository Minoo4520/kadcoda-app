export default function InfoChip({ label, children }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-[10px] font-bold text-[#8A96B0]">{label}</span>
      <div>{children}</div>
    </div>
  );
}
