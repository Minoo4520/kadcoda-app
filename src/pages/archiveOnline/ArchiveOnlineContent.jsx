import ArchiveSideBar from '../archive/ArchiveSiedeBar';
import ArchiveOnlineCourses from './ArchiveOnlineCourses';

export default function ArchiveOnlineContent() {
  return (
    <div className="container grid grid-cols-12 lg:gap-64 xl:gap-56">
      <div className="col-span-12 lg:col-span-3">
        <ArchiveSideBar />
      </div>

      <div className="col-span-12 lg:col-span-9">
        <ArchiveOnlineCourses />
      </div>
    </div>
  );
}
