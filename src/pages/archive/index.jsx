import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import ArchiveContent from './ArchiveContent';
import ArchiveHeader from './ArchiveHeader';

export default function Archive() {
  return (
    <>
      <Header />
      <ArchiveHeader sub="  تمام دوره‌های آموزشی را در یکجا مرور کنید">
        آرشیو دوره‌های کدکدا
      </ArchiveHeader>

      <ArchiveContent />
      <Footer />
    </>
  );
}
