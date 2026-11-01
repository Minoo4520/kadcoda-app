import { Link } from 'react-router';

export default function RelatedArticles({ articles }) {
  return (
    <section className="mx-auto mt-60 max-w-5xl">
      <div className="mb-24 flex items-end justify-between">
        <h2 className="text-primary-900 text-lg font-bold sm:text-xl">
          مقالات مرتبط
        </h2>
        <Link
          to="/articles"
          className="text-primary-600 hover:text-primary-500 text-xs font-semibold transition"
        >
          مشاهده همه ←
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((rel) => (
          <Link
            key={rel.id}
            to={`/articles/${rel.slug}`}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:shadow-md"
          >
            <div className="overflow-hidden">
              <img
                src={rel.cover}
                alt={rel.title}
                loading="lazy"
                className="h-160 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-16">
              <h3 className="text-primary-900 line-clamp-2 text-sm font-bold">
                {rel.title}
              </h3>
              <p className="mt-8 text-xs text-gray-500">
                {rel.readTime} دقیقه مطالعه
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
