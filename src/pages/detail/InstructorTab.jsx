import { Link } from 'react-router';

const ICONS = {
  briefcase: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  academic: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
};

export default function InstructorTab({ course }) {
  const { instructor } = course;

  return (
    <div className="space-y-24 sm:space-y-48">
      <div className="flex flex-col gap-20 sm:gap-24 md:flex-row md:items-start">
        <div className="from-primary to-primary-400 shadow-primary/20 flex h-96 w-96 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-3xl font-black text-white shadow-lg">
          {instructor.initial}
        </div>

        <div className="space-y-20 sm:space-y-24">
          <div>
            <h3 className="text-primary-900 text-xl font-bold">
              {instructor.name}
            </h3>
            <p className="text-primary mt-6 text-xs font-semibold sm:mt-4">
              {instructor.role}
            </p>
          </div>

          <p className="text-justify text-xs leading-21 text-[#64748B] sm:text-sm">
            {instructor.bio}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
        {instructor.highlights.map((item) => (
          <div
            key={item.id}
            className="group border-line border-primary/20 hover:border-primary/30 hover:shadow-primary/5 flex items-center gap-16 rounded-2xl border bg-gradient-to-b from-white to-[#FAFAFF] p-12 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-16"
          >
            <span className="bg-primary/10 text-primary group-hover:bg-primary flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300 group-hover:text-white">
              {ICONS[item.icon]}
            </span>

            <div className="space-y-4">
              <p className="text-[10px] font-bold tracking-wide text-[#64748B]">
                {item.label}
              </p>
              <p className="text-primary-900 text-xs font-black sm:text-sm">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/"
        className="text-primary-600 group hover:text-primary-800 inline-flex items-center gap-4 text-xs font-bold transition-colors sm:text-sm"
      >
        <span>مشاهده پروفایل مدرس</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-16 w-16 transition-transform duration-300 group-hover:-translate-x-4"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
      </Link>
    </div>
  );
}
