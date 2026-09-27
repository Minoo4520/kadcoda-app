export default function TabButton({ isActive, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 cursor-pointer rounded-xl py-12 text-center text-[10px] transition-all sm:text-sm ${
        isActive
          ? 'bg-primary-600 font-bold text-white'
          : 'hover:text-primary-800 font-medium text-[#64748B]'
      }`}
    >
      {children}
    </button>
  );
}
