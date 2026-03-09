import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesList from './components/ServicesList';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default ServicesPage;
