const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20business%20handshake%20in%20modern%20office%20setting%20symbolizing%20agreement%20and%20resolution%20with%20neutral%20tones%20and%20natural%20lighting%20representing%20successful%20mediation%20and%20dispute%20settlement%20clean%20corporate%20environment&width=1920&height=800&seq=services-hero-handshake&orientation=landscape"
          alt="Professional mediation services"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Comprehensive mediation services designed to facilitate constructive dialogue and achieve practical resolutions
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
