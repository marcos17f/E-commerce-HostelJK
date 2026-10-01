import Topbar from './components/layout/Topbar.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp.jsx';
import CookieBanner from './components/layout/CookieBanner.jsx';
import Hero from './components/sections/Hero.jsx';
import Benefits from './components/sections/Benefits.jsx';
import ForWhom from './components/sections/ForWhom.jsx';
import Rooms from './components/sections/Rooms.jsx';
import Amenities from './components/sections/Amenities.jsx';
import Location from './components/sections/Location.jsx';
import Gallery from './components/sections/Gallery.jsx';
import Faq from './components/sections/Faq.jsx';
import FinalCta from './components/sections/FinalCta.jsx';
import ScrollToTopButton from './components/common/ScrollToTopButton.jsx';

export default function App() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ForWhom />
        <Rooms />
        <Amenities />
        <Location />
        <Gallery />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTopButton />
      <CookieBanner />
    </>
  );
}
