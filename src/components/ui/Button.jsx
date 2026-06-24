const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  className = '',
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  const sizes = {
    small: 'px-15 py-6 text-sm',
    medium: 'px-25 py-10 text-base',
    large: 'px-35 py-14 text-lg',
  };

  const variants = {
    primary: {
      base: 'bg-primary-500 hover:bg-primary-600 text-gray-900 hover:text-white',
      outline:
        'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    },
    secondary: {
      base: 'bg-secondary-500 hover:bg-secondary-600 text-white',
      outline:
        'border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white',
    },
    tertiary: {
      base: 'bg-tertiary-500 hover:bg-tertiary-600 text-white',
      outline:
        'border-2 border-tertiary-500 text-tertiary-500 hover:bg-tertiary-500 hover:text-white',
    },
    alcohol: {
      base: 'bg-alcohol-500 hover:bg-alcohol-600 text-white',
      outline:
        'border-2 border-alcohol-500 text-alcohol-500 hover:bg-alcohol-500 hover:text-white',
    },
    success: {
      base: 'bg-success-500 hover:bg-success-600 text-white',
      outline:
        'border-2 border-success-500 text-success-500 hover:bg-success-500 hover:text-white',
    },
    warning: {
      base: 'bg-warning-500 hover:bg-warning-600 text-white',
      outline:
        'border-2 border-warning-500 text-warning-500 hover:bg-warning-500 hover:text-white',
    },
    error: {
      base: 'bg-error-500 hover:bg-error-600 text-white',
      outline:
        'border-2 border-error-500 text-error-500 hover:bg-error-500 hover:text-white',
    },
    gray: {
      base: 'bg-gray-500 hover:bg-gray-600 text-white',
      outline:
        'border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white',
    },
  };

  const variantStyles = variants[variant] || variants.primary;
  const isOutline = props.isOutline || false;

  const baseClasses =
    'rounded-[5px] font-medium transition duration-200 inline-flex items-center justify-center gap-2 cursor-pointer';
  const sizeClasses = sizes[size] || sizes.medium;
  const variantClass = isOutline ? variantStyles.outline : variantStyles.base;
  const widthClass = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseClasses} ${sizeClasses} ${variantClass} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
