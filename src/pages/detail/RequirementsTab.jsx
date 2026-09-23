import { requirements } from '../data/courseData';

export default function RequirementsTab() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-[#1E1B4B]">{requirements.title}</h3>
      <p className="text-sm leading-relaxed text-[#64748B]">
        {requirements.description}
      </p>
      <ul className="space-y-3 pt-2 text-sm text-[#64748B]">
        {requirements.items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
