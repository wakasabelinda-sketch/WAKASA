const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img
          src="https://static.readdy.ai/image/b92b61a178bbadc2f7e64b37b3c92766/a82100a4d8b074af1064e8e54418a95a.png"
          alt="House of Kezzy Mediators Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            House of Kezzy Mediators
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-4 font-light">
            Structured Dialogue. Practical Resolution.
          </p>
          <p className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Professional mediation and legal services providing neutral, confidential dispute resolution with certified expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Houseofkezzymediators@gmail.com"
              className="px-8 py-4 bg-teal-600 text-white rounded-lg text-base font-medium hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Request a Consultation
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-slate-900 text-white rounded-lg text-base font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Learn More
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-300">
            <p className="text-sm text-slate-600">
              <span className="font-semibold">Kezzy Oluoch Ray</span> • Certified Mediator & Lawyer
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;