const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <img
                src="https://static.readdy.ai/image/b92b61a178bbadc2f7e64b37b3c92766/e4bda885ef878cf4941d14fc01a00e07.jpeg"
                alt="Kezzy Oluoch Ray - Certified Mediator & Lawyer"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold">Mediator</p>
                <p className="text-2xl font-bold">& Lawyer</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Kezzy Oluoch Ray
            </h2>
            <div className="w-20 h-1 bg-teal-600 mb-8"></div>
            
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              As a certified mediator and qualified lawyer, Kezzy Oluoch Ray brings professional expertise and a commitment to structured dialogue in resolving disputes across various contexts. With dual credentials in mediation and law, Kezzy offers comprehensive dispute resolution services backed by legal knowledge and mediation best practices.
            </p>
            
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              House of Kezzy Mediators is built on the principles of neutrality, confidentiality, and competence. Every mediation session is approached with the understanding that effective dispute resolution requires trust, discretion, and a structured process that respects all parties involved.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Neutral</h3>
                <p className="text-xs text-gray-600">Impartial facilitation</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lock-line text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Confidential</h3>
                <p className="text-xs text-gray-600">Complete discretion</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <i className="ri-award-line text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Professional</h3>
                <p className="text-xs text-gray-600">Certified expertise</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <i className="ri-scales-3-line text-3xl text-teal-600"></i>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Legal Expert</h3>
                <p className="text-xs text-gray-600">Qualified lawyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;