import { Link } from 'react-router';

export default function ArticleBreadcrumb({ category }) {
  return (
    <nav className="mb-20 flex items-center gap-8 text-xs text-gray-500">
      <Link to="/" className="hover:text-primary-600 transition">
        خانه
      </Link>
      <span>/</span>
      <Link to="/articles" className="hover:text-primary-600 transition">
        مقالات
      </Link>
      <span>/</span>
      <span className="text-primary-900 font-semibold">{category}</span>
    </nav>
  );
}
