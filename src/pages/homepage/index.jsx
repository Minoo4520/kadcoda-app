import Footer from '../../components/layouts/Footer/Index';
import Header from '../../components/layouts/Header';
import Articles from './Articles';
import HeroSection from './HeroSection';
import LastCourses from './LastCourses';
import LearningTypes from './LearningTypes';
import OfflineCourses from './OfflineCourses';

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />

      <LastCourses />

      <LearningTypes />

      <OfflineCourses />

      <Articles />

      <Footer />
    </>
  );
}

export default HomePage;
