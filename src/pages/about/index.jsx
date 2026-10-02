import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import AboutCompanyValues from './AboutCompanyValues';
import AboutSocialCards from './AboutSocialCards';
import AboutContent from './Summery';

export default function About() {
  return (
    <>
      <Header />
      <section className="container">
        <AboutContent />
        <AboutCompanyValues />

        <AboutSocialCards />
      </section>
      <Footer />
    </>
  );
}
