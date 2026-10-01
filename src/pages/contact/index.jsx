import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import FaqSection from './FaqSection';

export default function Contact() {
  return (
    <>
      <Header />
      <div className="relative container min-h-screen w-full overflow-hidden">
        <div className="absolute top-0 left-0 z-0 h-380 w-full overflow-hidden bg-linear-to-r from-[#393387] via-[#9aaeef] to-[#7982e1] md:h-460">
          <div className="bg-secondary-100 absolute top-[35%] left-[-10%] h-90 w-[120%] -rotate-6 opacity-14"></div>
          <div className="bg-secondary-100 absolute top-[60%] left-[-10%] h-35 w-[120%] -rotate-6 opacity-50"></div>
        </div>

        <div className="relative z-10 flex w-full flex-col pt-32 md:pt-64">
          <div className="relative mx-auto flex max-w-980 flex-col rounded-3xl border border-white/20 bg-white shadow-2xl md:flex-row">
            <ContactForm />
            <ContactInfo />
          </div>

          <div className="mt-56 sm:mt-72 lg:mt-96">
            <ContactMap />
          </div>

          <div className="mt-56 sm:mt-72 lg:mt-96">
            {' '}
            <FaqSection />{' '}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
