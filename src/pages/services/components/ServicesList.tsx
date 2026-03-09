const ServicesList = () => {
  const services = [
    {
      icon: 'ri-parent-line',
      title: 'Family Mediation',
      description: 'Sensitive and confidential mediation for family disputes, including separation, custody arrangements, and estate matters.',
      image: 'https://readdy.ai/api/search-image?query=warm%20family%20consultation%20setting%20with%20comfortable%20seating%20and%20soft%20lighting%20creating%20safe%20supportive%20atmosphere%20for%20family%20mediation%20discussions%20with%20neutral%20calming%20colors%20and%20professional%20yet%20approachable%20environment&width=600&height=400&seq=family-mediation-service&orientation=landscape',
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Commercial/Business Mediation',
      description: 'Professional resolution of business disputes, contract disagreements, partnership conflicts, and commercial negotiations.',
      image: 'https://readdy.ai/api/search-image?query=modern%20corporate%20boardroom%20with%20business%20professionals%20in%20discussion%20featuring%20clean%20lines%20professional%20furniture%20and%20natural%20light%20suitable%20for%20commercial%20mediation%20and%20business%20dispute%20resolution&width=600&height=400&seq=commercial-mediation-service&orientation=landscape',
    },
    {
      icon: 'ri-team-line',
      title: 'Workplace Dispute Resolution',
      description: 'Addressing workplace conflicts, employment disputes, and organizational issues with professionalism and discretion.',
      image: 'https://readdy.ai/api/search-image?query=professional%20office%20workspace%20with%20collaborative%20meeting%20area%20showing%20diverse%20team%20in%20constructive%20discussion%20representing%20workplace%20conflict%20resolution%20with%20modern%20design%20and%20neutral%20professional%20tones&width=600&height=400&seq=workplace-resolution-service&orientation=landscape',
    },
    {
      icon: 'ri-community-line',
      title: 'Community Conflict Resolution',
      description: 'Facilitating dialogue and resolution for community disputes, neighborhood conflicts, and local organizational issues.',
      image: 'https://readdy.ai/api/search-image?query=community%20gathering%20space%20with%20people%20in%20respectful%20dialogue%20showing%20diverse%20community%20members%20working%20together%20in%20peaceful%20setting%20with%20warm%20welcoming%20atmosphere%20for%20conflict%20resolution&width=600&height=400&seq=community-resolution-service&orientation=landscape',
    },
    {
      icon: 'ri-scales-line',
      title: 'Pre-litigation Mediation',
      description: 'Early intervention mediation to resolve disputes before they escalate to formal legal proceedings, saving time and resources.',
      image: 'https://readdy.ai/api/search-image?query=professional%20legal%20consultation%20room%20with%20neutral%20mediator%20facilitating%20discussion%20between%20parties%20featuring%20formal%20yet%20approachable%20setting%20with%20legal%20books%20and%20professional%20decor%20for%20pre-litigation%20mediation&width=600&height=400&seq=prelitigation-mediation-service&orientation=landscape',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Mediation Services
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Each service is delivered with the highest standards of neutrality, confidentiality, and professional competence
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-lg mb-6">
                  <i className={`${service.icon} text-3xl text-teal-600`}></i>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="mailto:Houseofkezzymediators@gmail.com"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors whitespace-nowrap"
                >
                  Request Consultation
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Begin?
          </h3>
          <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your mediation needs. All consultations are confidential.
          </p>
          <a
            href="mailto:Houseofkezzymediators@gmail.com"
            className="inline-block px-8 py-4 bg-teal-600 text-white rounded-lg text-base font-medium hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            Email: Houseofkezzymediators@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
