const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-14 w-14"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const stripLeadingSymbol = (text) =>
  text.replace(/^[\p{Extended_Pictographic}\u2714\u2713\u2705]\s*/u, '');

export default function RequirementsTab({ course }) {
  const { requirements } = course;

  return (
    <div className="space-y-24 sm:space-y-32">
      <div className="flex items-start gap-12 sm:gap-16">
        <span className="from-primary to-primary-400 shadow-primary/20 flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-24 w-24"
          >
            <path d="M12 2v20M2 12h20" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </span>

        <div className="space-y-16">
          <h3 className="text-primary-900 sm:text-md text-sm font-black">
            {requirements.title}
          </h3>
          <p className="text-justify text-xs leading-21 text-[#64748B] sm:text-sm">
            {requirements.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {requirements.items.map((rawItem) => {
          const text = stripLeadingSymbol(rawItem);

          return (
            <div
              key={rawItem}
              className="group flex items-center gap-16 rounded-2xl bg-gradient-to-b from-white to-[#FAFAFF] p-12 sm:p-16"
            >
              <span className="bg-primary/10 text-primary flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-xl">
                <CheckIcon />
              </span>

              <p className="text-primary-900 pt-6 text-xs leading-20 font-medium">
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
