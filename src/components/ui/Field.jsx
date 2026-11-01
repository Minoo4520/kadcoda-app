export default function Field({ label, children, hint, error }) {
  return (
    <div className="flex flex-col gap-8">
      <label className="text-[11px] font-bold text-[#1C2B4A]">{label}</label>
      {children}
      {error ? (
        <span className="text-[10px] font-bold text-[#B91C1C]">{error}</span>
      ) : (
        hint && <span className="text-[10px] text-[#8A96B0]">{hint}</span>
      )}
    </div>
  );
}
