import ArchiveArticles from './ArchiveArticles';
import ArchiveSideBar from './ArchiveSideBar';

export default function ArchiveContent() {
  return (
    <div className="container grid grid-cols-12 lg:gap-64 xl:gap-56">
      <div className="col-span-12 lg:col-span-3">
        <ArchiveSideBar />
      </div>

      <div className="col-span-12 lg:col-span-9">
        <ArchiveArticles />
      </div>
    </div>
  );
}
