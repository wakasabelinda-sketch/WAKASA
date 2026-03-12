import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ArticlesPreview from './components/ServicesPreview';
import ContactSection from './components/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ArticlesPreview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
