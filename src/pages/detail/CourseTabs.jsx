import { useState } from 'react';

import CurriculumTab from './CurriculumTab';
import InstructorTab from './InstructorTab';
import LicenseTab from './LicenseTab';
import RequirementsTab from './RequirementsTab';
import TabButton from './TabButton';

const TAB_PANELS = {
  curriculum: CurriculumTab,
  'about-instructor': InstructorTab,
  requirements: RequirementsTab,
  License: LicenseTab,
};

export default function CourseTabs({ course }) {
  const tabs = course.tabs;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const ActivePanel = TAB_PANELS[activeTab];

  return (
    <div className="space-y-24">
      <div className="flex max-w-lg gap-8 rounded-2xl border border-[#E4E4F7] bg-[#F7F7FF] p-6">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>

      <div className="min-h-[400px] rounded-3xl border border-[#E4E4F7] bg-[#FFFFFF] p-12 sm:p-24 md:p-32">
        <ActivePanel course={course} isPurchased={course.isPurchased} />{' '}
      </div>
    </div>
  );
}
