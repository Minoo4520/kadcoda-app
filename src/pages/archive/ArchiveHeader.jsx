const ArchiveHeader = ({ children, sub }) => {
  return (
    <div className="container">
      <div className="mx-auto mt-24 py-8 sm:mt-40 sm:px-4">
        <div className="bg-primary-800 relative mx-auto max-w-7xl overflow-hidden rounded-2xl px-8 py-16 text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 320"
            fill="none"
            className="text-primary-50 absolute -top-10 -left-5 size-50 rotate-180 opacity-40 sm:size-90"
          >
            <path
              d="M320 20C170 20 50 140 50 320"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M320 55C190 55 85 160 85 320"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M320 90C215 90 120 185 120 320"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative z-10">
            <h1 className="text-center text-lg font-bold tracking-tight sm:text-2xl lg:text-3xl">
              {children}
            </h1>
            <p className="text-primary-100 mt-14 text-center text-sm sm:text-lg">
              {sub}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveHeader;
