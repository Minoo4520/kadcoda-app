import { useState } from 'react';

import { curriculum } from '../data/courseData';
import AccordionItem from './AccordionItem';

export default function CurriculumTab() {
  const [openIds, setOpenIds] = useState([curriculum[0]?.id]);

  const toggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h3 className="mb-1 text-lg font-bold text-[#1E1B4B]">
          ریز سرفصل‌های تفکیک شده
        </h3>
        <p className="text-xs text-[#64748B]">
          روی هر سرفصل کلیک کنید تا جزییات دقیق زمان‌ها و موضوعات را ببینید.
        </p>
      </div>

      {curriculum.map((section) => (
        <AccordionItem
          key={section.id}
          item={section}
          isOpen={openIds.includes(section.id)}
          onToggle={() => toggle(section.id)}
        />
      ))}
    </div>
  );
}
