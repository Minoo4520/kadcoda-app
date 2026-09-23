import { instructor } from '../data/courseData';

export default function InstructorTab() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-6 md:flex-row">
        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-[#4F46E5] text-3xl font-black text-white shadow-md shadow-indigo-100">
          {instructor.initial}
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-[#1E1B4B]">
              {instructor.name}
            </h3>
            <p className="mt-1 text-xs font-semibold text-[#4F46E5]">
              {instructor.role}
            </p>
          </div>

          <p className="text-justify text-sm leading-relaxed text-[#64748B]">
            {instructor.bio}
          </p>

          <div className="flex gap-4 pt-2 text-xs font-bold text-[#1E1B4B]">
            {instructor.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
