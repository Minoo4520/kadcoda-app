export default function Breadcrumb({ items }) {
  return (
    <div className="mb-8 flex items-center gap-2 text-xs font-medium text-[#64748B]">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {item.href ? (
            <a href={item.href} className="hover:text-[#4F46E5]">
              {item.label}
            </a>
          ) : (
            <span className="text-[#1E1B4B]">{item.label}</span>
          )}
          {index < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </div>
  );
}
