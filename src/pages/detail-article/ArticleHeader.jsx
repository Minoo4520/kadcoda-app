export default function ArticleHeader({ article }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center gap-12">
        <span className="bg-primary-50 text-primary-600 rounded-full px-14 py-6 text-xs font-semibold">
          {article.category}
        </span>
        <div className="flex items-center gap-12 text-xs text-gray-500">
          <span>{article.publishedAt}</span>
          <span className="h-4 w-4 rounded-full bg-gray-300"></span>
          <span>{article.readTime} دقیقه مطالعه</span>
        </div>
      </div>

      <h1 className="text-primary-900 mt-16 text-2xl leading-tight font-black sm:text-3xl lg:text-4xl">
        {article.title}
      </h1>

      <p className="text-primary-800/70 mt-16 text-sm leading-relaxed sm:text-base">
        {article.excerpt}
      </p>

      <div className="mt-24 flex items-center justify-between border-y border-gray-100 py-16">
        <div className="flex items-center gap-12">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="h-44 w-44 rounded-full object-cover"
          />
          <div>
            <p className="text-primary-900 text-sm font-bold">
              {article.author.name}
            </p>
            <p className="text-xs text-gray-500">{article.author.role}</p>
          </div>
        </div>

        <span className="text-xs text-gray-500">{article.views} بازدید</span>
      </div>
    </div>
  );
}
