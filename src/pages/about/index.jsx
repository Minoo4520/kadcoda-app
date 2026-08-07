import Footer from '../../components/layouts/Footer/Index';
import Header from '../../components/layouts/Header';
import AboutCompanyValues from './AboutCompanyValues';
import AboutCommunicationLinks from './AboutCummunicationLinks';
import AboutSocialCards from './AboutSocialCards';
import AboutContent from './Summery';

export default function About() {
  return (
    <>
      <Header />
      <section className="container">
        <AboutContent />
        <AboutCompanyValues />
        <AboutCommunicationLinks />

        <AboutSocialCards />
      </section>
      <Footer />
    </>
  );
}
