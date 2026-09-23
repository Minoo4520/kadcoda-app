import { useState } from 'react';

import { courseTabs } from '../data/courseData';
import CurriculumTab from './CurriculumTab';
import InstructorTab from './InstructorTab';
import RequirementsTab from './RequirementsTab';
import TabButton from './TabButton';

const TAB_PANELS = {
  curriculum: CurriculumTab,
  'about-instructor': InstructorTab,
  requirements: RequirementsTab,
};

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState('curriculum');
  const ActivePanel = TAB_PANELS[activeTab];

  return (
    <div className="space-y-6">
      <div className="flex max-w-lg gap-2 rounded-2xl border border-[#E4E4F7] bg-[#F7F7FF] p-1.5">
        {courseTabs.map((tab) => (
          <TabButton
            key={tab.id}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>

      <div className="min-h-[400px] rounded-3xl border border-[#E4E4F7] bg-[#FFFFFF] p-6 md:p-8">
        <ActivePanel />
      </div>
    </div>
  );
}
