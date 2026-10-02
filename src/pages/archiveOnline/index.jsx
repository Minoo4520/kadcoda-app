import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import ArchiveHeader from '../archive/ArchiveHeader';
import ArchiveOnlineContent from './ArchiveOnlineContent';

export default function ArchiveOnline() {
  return (
    <>
      <Header />
      <ArchiveHeader sub="  تمام دوره‌های حضوری را یکجا مرور کنید">
        آرشیو دوره‌های حضوری کدکدا
      </ArchiveHeader>

      <ArchiveOnlineContent />
      <Footer />
    </>
  );
}
