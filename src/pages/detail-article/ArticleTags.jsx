export default function ArticleTags({ tags }) {
  return (
    <div className="mt-40 flex flex-wrap items-center gap-8">
      <span className="text-primary-900 text-sm font-bold">برچسب‌ها:</span>
      {tags.map((tag) => (
        <span
          key={tag}
          className="hover:bg-primary-50 hover:text-primary-600 cursor-pointer rounded-full bg-gray-100 px-12 py-6 text-xs text-gray-600 transition"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
