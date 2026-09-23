export default function TabButton({ isActive, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-xl py-3 text-center text-sm transition-all ${
        isActive
          ? 'bg-[#4F46E5] font-bold text-white'
          : 'font-medium text-[#64748B] hover:text-[#1E1B4B]'
      }`}
    >
      {children}
    </button>
  );
}
