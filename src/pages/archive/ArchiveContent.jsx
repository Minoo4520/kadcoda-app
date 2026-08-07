import ArchiveCourses from './ArchiveCourses';
import ArchiveSideBar from './ArchiveSiedeBar';

export default function ArchiveContent() {
  return (
    <div className="container grid grid-cols-12">
      <div className="col-span-3">
        <ArchiveSideBar />
      </div>

      <div className="col-span-9">
        <ArchiveCourses />
      </div>
    </div>
  );
}
