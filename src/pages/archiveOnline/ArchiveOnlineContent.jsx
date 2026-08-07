import ArchiveSideBar from '../archive/ArchiveSiedeBar';
import ArchiveOnlineCourses from './ArchiveOnlineCourses';

export default function ArchiveOnlineContent() {
  return (
    <div className="container grid grid-cols-12">
      <div className="col-span-3">
        <ArchiveSideBar />
      </div>

      <div className="col-span-9">
        <ArchiveOnlineCourses />
      </div>
    </div>
  );
}
