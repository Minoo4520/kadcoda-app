import Breadcrumb from '../../components/layouts/BreadCrumb';
import BackgroundDecor from './components/BackgroundDecor';
import CourseIntro from './components/CourseIntro';
import CourseTabs from './components/CourseTabs';
import PurchaseCard from './components/PurchaseCard';
import { breadcrumbItems } from './data/courseData';

export default function DetailCourse() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FFFFFF] text-[#1E1B4B] antialiased selection:bg-[#4F46E5] selection:text-white">
      <BackgroundDecor />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <CourseIntro />
          </div>

          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <PurchaseCard />
          </div>
        </div>

        <CourseTabs />
      </main>
    </div>
  );
}
