function MenuItem({ href = '#', label, onClick, isMobile = false }) {
  const baseStyles = isMobile
    ? 'hover:bg-primary-100 hover:text-primary-500 rounded-lg px-4 py-10 text-lg font-medium text-gray-700 transition'
    : 'hover:text-primary text-gray-800 transition duration-200';

  return (
    <li className={isMobile ? 'w-full' : ''}>
      <a href={href} onClick={onClick} className={baseStyles}>
        {label}
      </a>
    </li>
  );
}

export default MenuItem;
