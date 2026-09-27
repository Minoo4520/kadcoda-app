export default function Breadcrumb({ items }) {
  return (
    <div className="mb-32 flex items-center gap-8 text-xs font-medium text-[#64748B]">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {item.href ? (
            <a href={item.href} className="hover:text-primary-500">
              {item.label}
            </a>
          ) : (
            <span className="text-primary-700">{item.label}</span>
          )}
          {index < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </div>
  );
}
