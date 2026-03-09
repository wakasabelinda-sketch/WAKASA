import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: 'ri-parent-line',
      title: 'Family Mediation',
      description: 'Resolving family disputes with sensitivity and care',
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Commercial Mediation',
      description: 'Business dispute resolution for sustainable partnerships',
    },
    {
      icon: 'ri-team-line',
      title: 'Workplace Resolution',
      description: 'Addressing workplace conflicts professionally',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Professional mediation services tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-lg mb-6 group-hover:bg-teal-600 transition-colors">
                <i className={`${service.icon} text-3xl text-teal-600 group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-lg text-base font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            View All Services
            <i className="ri-arrow-right-line ml-2 text-lg"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
