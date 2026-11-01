import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import ArchiveHeader from '../archive/ArchiveHeader';
import ArchiveContent from './ArchiveContent';

export default function ArchiveArticles() {
  return (
    <>
      <Header />
      <ArchiveHeader sub="  تمام مقالات آموزشی را در یکجا مرور کنید">
        آرشیو مقالات کدکدا
      </ArchiveHeader>

      <ArchiveContent />
      <Footer />
    </>
  );
}
