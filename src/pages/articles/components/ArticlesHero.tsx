const ArticlesHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20writing%20desk%20with%20legal%20documents%20and%20modern%20laptop%20in%20well-lit%20office%20environment%20representing%20legal%20articles%20and%20professional%20insights%20with%20clean%20organized%20workspace%20and%20neutral%20sophisticated%20tones&width=1920&height=800&seq=articles-hero-writing&orientation=landscape"
          alt="Professional articles and insights"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Articles & Insights
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          Professional insights and guidance on mediation, conflict resolution, and dispute management
        </p>

        {/* Disclaimer Banner */}
        <div className="max-w-3xl mx-auto bg-amber-50/10 border border-amber-400/40 backdrop-blur-sm rounded-lg px-6 py-4 text-left">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-error-warning-line text-amber-400 text-xl"></i>
            </div>
            <div>
              <p className="text-amber-300 font-semibold text-sm uppercase tracking-wide mb-1">
                Important Disclaimer
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                All articles and content published on this platform are provided <strong className="text-amber-300">without prejudice</strong> and are intended for <strong className="text-amber-300">general informational purposes only</strong>. The information is subject to correction, revision, or update at any time without prior notice. Nothing contained herein constitutes legal advice, and no attorney-client relationship is formed by accessing or reading any article. Readers are strongly advised to seek independent professional legal counsel before acting on any information presented. House of Kezzy Mediators accepts no liability for any loss or damage arising from reliance on the content herein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesHero;
