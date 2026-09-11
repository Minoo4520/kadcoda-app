import { NavLink } from 'react-router';

export default function PanelNavItem({
  to,
  label,
  icon,
  iconActive,
  end = false,
  badge,
  reverse = false,
  onClick,
}) {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          'flex items-center gap-10 rounded-xl px-12 py-10 transition-all',
          isActive
            ? 'shadow-[inset_-2px_-2px_5px_0px_#FFFFFFD9,_inset_3px_3px_7px_0px_#A3B1C680]'
            : '',
          reverse && isActive ? 'justify-between' : '',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <>
          {reverse && isActive ? (
            <>
              <span className="text-primary-600 text-xs font-bold">
                {label}
              </span>
              <img src={iconActive} alt={label} />
            </>
          ) : (
            <>
              <img src={isActive ? iconActive : icon} alt={label} />
              <span
                className={`text-xs font-bold ${
                  isActive ? 'text-primary-600' : 'text-[#8A96B0]'
                }`}
              >
                {label}
              </span>

              {badge && (
                <span className="text-primary-600 mr-auto flex h-18 w-18 items-center justify-center rounded-full bg-[#DCE5F0] px-6 py-2 text-xs font-bold">
                  {badge}
                </span>
              )}
            </>
          )}
        </>
      )}
    </NavLink>
  );
}
