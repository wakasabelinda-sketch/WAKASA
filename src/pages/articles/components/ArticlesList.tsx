import { useState } from 'react';

const articles = [
  {
    title: "Abuse of Monitoring",
    excerpt:
      'A comprehensive examination of the legal boundaries and ethical considerations surrounding monitoring practices in the workplace and digital spaces.',
    date: 'June 15, 2025',
    category: 'Data Protection Law',
    imageUrl:
      'https://readdy.ai/api/search-image?query=digital%20surveillance%20and%20monitoring%20concept%20with%20security%20cameras%20and%20computer%20screens%20showing%20data%20tracking%20in%20modern%20office%20environment%20with%20clean%20professional%20design%20using%20teal%20and%20navy%20blue%20tones%20representing%20workplace%20monitoring%20and%20privacy%20concerns&width=800&height=600&seq=article-abuse-monitoring-kenya&orientation=landscape',
    pdfUrl: 'https://igzbulpcccggxroazuoi.supabase.co/storage/v1/object/public/ARTICLES/ABUSE%20OF%20MONITORING.pdf',
    previewContent: [
      "Introduction to Monitoring Practices",
      "In the digital age, monitoring has become an integral part of organizational operations, security protocols, and regulatory compliance. However, the line between legitimate monitoring and abuse of monitoring rights has become increasingly blurred, raising significant legal and ethical concerns.",
      "This article examines the legal framework governing monitoring practices in Kenya, the rights of individuals subject to monitoring, and the obligations of entities conducting such monitoring activities.",
      "Legal Framework",
      "The Data Protection Act, 2019 provides the primary legal framework for monitoring activities that involve the processing of personal data. Under the Act, monitoring must be conducted in accordance with data protection principles, including lawfulness, fairness, and transparency.",
      "The Employment Act (Cap 226) and various sector-specific regulations also impose obligations on employers and organizations conducting monitoring activities. These regulations require that monitoring be proportionate, necessary, and conducted with appropriate safeguards for individual privacy.",
    ],
  },
  {
    title: 'Information Needed to File a Complaint to the ODPC',
    excerpt:
      'A practical guide detailing the essential information and documentation required when filing a data protection complaint with the Office of the Data Protection Commissioner.',
    date: 'June 12, 2025',
    category: 'Data Protection Law',
    imageUrl:
      'https://readdy.ai/api/search-image?query=official%20complaint%20filing%20process%20with%20legal%20documents%20and%20forms%20on%20desk%20representing%20data%20protection%20complaint%20submission%20to%20regulatory%20authority%20with%20organized%20paperwork%20and%20professional%20office%20setting%20using%20teal%20and%20navy%20blue%20color%20scheme&width=800&height=600&seq=article-odpc-complaint-filing&orientation=landscape',
    pdfUrl: 'https://igzbulpcccggxroazuoi.supabase.co/storage/v1/object/public/ARTICLES/Info%20needed%20to%20file%20a%20complaint%20to%20the%20ODPC.pdf',
    previewContent: [
      "Understanding Your Right to Complain",
      "The Office of the Data Protection Commissioner (ODPC) serves as the primary regulatory authority for data protection matters in Kenya. Under the Data Protection Act, 2019, individuals have the right to lodge complaints with the ODPC regarding alleged violations of their data protection rights.",
      "This guide provides a comprehensive overview of the information and documentation required to file an effective complaint with the ODPC.",
      "Essential Information Required",
      "When filing a complaint with the ODPC, complainants must provide specific information to enable the Commissioner to investigate and address the alleged violation. The following information is typically required:",
      "1. Personal Information: Full name, contact details (phone number, email address, physical address), and identification documents of the complainant.",
      "2. Details of the Data Controller or Processor: Name, contact information, and physical address of the organization or individual against whom the complaint is being filed.",
    ],
  },
  {
    title: "What Weight Do Pre-Contractual Inquiries in Land Acquisition Carry?",
    excerpt:
      'An in-depth analysis of the legal significance and implications of pre-contractual inquiries in land transactions and property acquisition processes.',
    date: 'June 10, 2025',
    category: 'Property Law',
    imageUrl:
      'https://readdy.ai/api/search-image?query=land%20acquisition%20and%20property%20documents%20with%20survey%20maps%20and%20legal%20contracts%20on%20professional%20desk%20representing%20real%20estate%20due%20diligence%20and%20pre-contractual%20inquiries%20with%20clean%20organized%20workspace%20using%20teal%20and%20navy%20blue%20tones&width=800&height=600&seq=article-land-precontractual-inquiries&orientation=landscape',
    pdfUrl: 'https://igzbulpcccggxroazuoi.supabase.co/storage/v1/object/public/ARTICLES/WHAT%20WEIGHT%20DO%20PRE-CONTRACTUAL%20INQUIRIES%20IN%20LAND%20ACQUISITION%20CARRY.pdf',
    previewContent: [
      "The Importance of Due Diligence",
      "Pre-contractual inquiries form a critical component of the land acquisition process in Kenya. These inquiries, conducted before the execution of a sale agreement or transfer of property, serve to verify the legitimacy of the transaction and protect the interests of prospective buyers.",
      "This article examines the legal weight and significance of pre-contractual inquiries in land transactions under Kenyan law.",
      "Legal Framework for Land Transactions",
      "The Land Registration Act, 2012, and the Land Act, 2012, provide the primary legal framework governing land transactions in Kenya. These statutes establish the procedures for land registration, transfer, and the rights and obligations of parties to land transactions.",
      "Section 26 of the Land Registration Act, 2012, provides for the registration of interests in land and establishes the principle of indefeasibility of title. However, this principle is subject to certain exceptions, including fraud, misrepresentation, and failure to conduct proper due diligence.",
    ],
  },
  {
    title: 'Borrowing from the Future!',
    excerpt:
      'A critical examination of debt sustainability, intergenerational equity, and the long-term implications of current borrowing practices on future generations.',
    date: 'June 8, 2025',
    category: 'Economic Policy',
    imageUrl:
      'https://readdy.ai/api/search-image?query=financial%20planning%20and%20debt%20concept%20with%20calculator%20and%20financial%20charts%20showing%20economic%20growth%20and%20borrowing%20trends%20with%20modern%20professional%20design%20using%20teal%20and%20navy%20blue%20tones%20representing%20fiscal%20policy%20and%20future%20economic%20sustainability&width=800&height=600&seq=article-borrowing-future-debt&orientation=landscape',
    pdfUrl: 'https://igzbulpcccggxroazuoi.supabase.co/storage/v1/object/public/ARTICLES/BORROWING%20FROM%20THE%20FUTURE!.pdf',
    previewContent: [
      "The Debt Dilemma",
      "Kenya's public debt has grown significantly over the past decade, raising concerns about debt sustainability and the burden being placed on future generations. As of 2024, Kenya's public debt stands at approximately 70% of GDP, with a significant portion comprising external debt.",
      "This article examines the implications of current borrowing practices and the concept of intergenerational equity in fiscal policy.",
      "Understanding Public Debt",
      "Public debt refers to the total amount of money owed by the government to creditors, both domestic and foreign. Governments borrow to finance budget deficits, fund development projects, and manage cash flow requirements.",
      "While borrowing can be a legitimate tool for economic development, excessive debt accumulation poses significant risks, including debt distress, reduced fiscal space for essential services, and the transfer of debt burdens to future generations.",
    ],
  },
  {
    title: 'Impact of MPSR 2017 on Accessibility of Credit to SMEs',
    excerpt:
      'An analysis of how the Movable Property Security Rights Act, 2017 has transformed credit accessibility for small and medium enterprises in Kenya.',
    date: 'June 5, 2025',
    category: 'Commercial Law',
    imageUrl:
      'https://readdy.ai/api/search-image?query=small%20business%20financing%20and%20credit%20access%20with%20business%20owner%20reviewing%20loan%20documents%20and%20financial%20statements%20in%20modern%20office%20representing%20SME%20lending%20and%20movable%20property%20security%20with%20professional%20design%20using%20teal%20and%20navy%20blue%20color%20palette&width=800&height=600&seq=article-mpsr-sme-credit-access&orientation=landscape',
    pdfUrl: 'https://igzbulpcccggxroazuoi.supabase.co/storage/v1/object/public/ARTICLES/IMPACT%20OF%20MPSR%202017%20ON%20ACCESSIBILITY%20OF%20CREDIT%20TO%20SMEs.pdf',
    previewContent: [
      "Transforming SME Financing",
      "The Movable Property Security Rights Act, 2017 (MPSR Act) represents a significant milestone in Kenya's efforts to improve access to credit for small and medium enterprises (SMEs). By enabling businesses to use movable assets as collateral, the Act has opened new avenues for financing.",
      "This article examines the impact of the MPSR Act on credit accessibility for SMEs and the challenges that remain.",
      "The Pre-MPSR Landscape",
      "Prior to the enactment of the MPSR Act, SMEs in Kenya faced significant challenges in accessing credit from formal financial institutions. Traditional lending practices required immovable property (land and buildings) as collateral, effectively excluding many SMEs that lacked such assets.",
      "According to a 2016 World Bank report, only 17% of SMEs in Kenya had access to formal credit, with the majority relying on informal sources or personal savings to finance their operations.",
    ],
  },
  {
    title: 'Digital Poverty',
    excerpt:
      'An exploration of the growing digital divide in Kenya and Africa, examining how lack of access to digital infrastructure and literacy perpetuates socioeconomic inequality.',
    date: 'June 3, 2025',
    category: 'Technology & Society',
    imageUrl:
      'https://readdy.ai/api/search-image?query=digital%20divide%20and%20technology%20poverty%20concept%20showing%20contrast%20between%20connected%20urban%20areas%20and%20rural%20communities%20without%20internet%20access%20in%20Africa%20with%20symbolic%20imagery%20of%20smartphones%20and%20connectivity%20gaps%20using%20teal%20and%20navy%20blue%20tones%20on%20clean%20background&width=800&height=600&seq=article-digital-poverty-kenya&orientation=landscape',
    pdfUrl: 'https://igzbulpcccggxroazuoi.supabase.co/storage/v1/object/public/ARTICLES/DIGnITAL%20POVERTY.pdf',
    previewContent: [
      "The Digital Divide in Kenya",
      "As the world rapidly transitions to a digital economy, millions of Kenyans remain excluded from the opportunities that digital connectivity provides. Digital poverty — the lack of access to digital tools, internet connectivity, and digital literacy — has emerged as a critical barrier to socioeconomic development.",
      "This article examines the dimensions of digital poverty in Kenya, its causes, consequences, and the legal and policy frameworks needed to address it.",
      "Understanding Digital Poverty",
      "Digital poverty encompasses more than just the absence of a smartphone or internet connection. It includes the lack of digital skills, affordable devices, reliable electricity, and meaningful content in local languages.",
      "According to the Kenya National Bureau of Statistics, while mobile phone penetration stands at approximately 65%, internet access remains concentrated in urban areas, with rural communities significantly underserved. This disparity creates a two-tier society where access to education, financial services, and government resources is increasingly mediated by digital access.",
    ],
  },
  {
    title: 'Legal Report',
    excerpt:
      'A comprehensive legal report examining key developments, landmark rulings, and emerging trends shaping the Kenyan legal landscape.',
    date: 'June 1, 2025',
    category: 'Legal Analysis',
    imageUrl:
      'https://readdy.ai/api/search-image?query=comprehensive%20legal%20report%20with%20law%20books%20and%20court%20documents%20on%20professional%20desk%20with%20scales%20of%20justice%20and%20legal%20research%20materials%20in%20organized%20law%20office%20environment%20with%20clean%20minimalist%20design%20using%20teal%20and%20navy%20blue%20color%20scheme%20representing%20Kenyan%20legal%20system&width=800&height=600&seq=article-legal-report-kenya&orientation=landscape',
    pdfUrl: 'https://igzbulpcccggxroazuoi.supabase.co/storage/v1/object/public/ARTICLES/Copy%20of%20LEGAL%20REPORT.pdf',
    previewContent: [
      "Overview of Key Legal Developments",
      "This legal report provides a comprehensive analysis of significant legal developments, judicial decisions, and legislative changes that have shaped Kenya's legal landscape. The report covers constitutional law, commercial law, environmental law, and emerging areas of digital regulation.",
      "The Kenyan legal system continues to evolve rapidly, with courts increasingly called upon to interpret constitutional provisions in light of contemporary social and economic challenges.",
      "Constitutional Law Developments",
      "The Supreme Court and Court of Appeal have issued several landmark decisions that have clarified the scope of constitutional rights and the limits of governmental authority. These decisions have significant implications for the protection of fundamental rights and the rule of law in Kenya.",
      "Key rulings have addressed issues including the right to a clean environment, the right to access information, and the constitutional validity of various legislative provisions. These decisions reflect the judiciary's commitment to upholding constitutional values and protecting individual rights.",
    ],
  },
  {
    title: 'Instant Hongo',
    excerpt:
      'A critical legal analysis of informal taxation, extortion, and the regulatory gaps that enable exploitation of traders and small business owners in Kenya\'s markets.',
    date: 'May 28, 2025',
    category: 'Commercial Law',
    imageUrl:
      'https://readdy.ai/api/search-image?query=informal%20market%20taxation%20and%20business%20regulation%20in%20Kenya%20with%20street%20vendors%20and%20market%20traders%20facing%20bureaucratic%20challenges%20representing%20informal%20levies%20and%20extortion%20in%20urban%20markets%20with%20documentary%20style%20photography%20using%20teal%20and%20navy%20blue%20tones%20on%20clean%20background&width=800&height=600&seq=article-instant-hongo-kenya&orientation=landscape',
    pdfUrl: 'https://igzbulpcccggxroazuoi.supabase.co/storage/v1/object/public/ARTICLES/INSTANT%20HONGO%20%20(1).pdf',
    previewContent: [
      "The Hongo Problem in Kenya",
      "\"Hongo\" — the Swahili term for informal levies or extortion — represents one of the most pervasive yet underaddressed challenges facing traders and small business owners in Kenya. From market stalls to transport routes, informal taxation has become an entrenched feature of Kenya's business environment.",
      "This article examines the legal dimensions of hongo, the regulatory frameworks that should prevent it, and the remedies available to affected traders.",
      "Legal Definition and Scope",
      "While hongo is commonly understood as a form of extortion, its legal characterization depends on the specific circumstances. Demands for payment by unauthorized individuals constitute criminal extortion under the Penal Code. However, when such demands are made by individuals purporting to act under official authority, the legal analysis becomes more complex.",
      "The County Governments Act and various market regulations establish the framework for legitimate market levies and fees. Any collection of fees outside this framework is unlawful, yet enforcement remains inconsistent, creating space for abuse.",
    ],
  },
];

interface ModalState {
  isOpen: boolean;
  articleIndex: number;
  step: 'preview' | 'whatsapp';
}

export default function ArticlesList() {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    articleIndex: 0,
    step: 'preview',
  });

  const handleArticleClick = (index: number) => {
    setModal({
      isOpen: true,
      articleIndex: index,
      step: 'preview',
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      articleIndex: 0,
      step: 'preview',
    });
  };

  const openWhatsApp = (articleTitle: string) => {
    const message = encodeURIComponent(
      `Hi Kezzy! I've sent KES 10 via M-PESA to 0742117047 for the article: "${articleTitle}". Please send me the full article via WhatsApp or email. Thank you!`
    );
    window.open(`https://wa.me/254742117047?text=${message}`, '_blank');
  };

  const currentArticle = articles[modal.articleIndex];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Info Banner */}
        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4d6e] rounded-lg p-6 mb-12 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full shrink-0">
            <i className="ri-information-line text-2xl text-white"></i>
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold text-base mb-1">How to Access Full Articles</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Click any article to preview it. To get the full document, send <strong className="text-white">KES 10</strong> via M-PESA to <strong className="text-white">0742117047 (Kezzy)</strong>, then WhatsApp Kezzy with your M-PESA message to get the article sent via WhatsApp or email.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              onClick={() => handleArticleClick(index)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-[#4a9b8e] text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    KES 10
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-[#4a9b8e] font-medium">{article.category}</span>
                  <span className="text-xs text-gray-400">&bull;</span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3 group-hover:text-[#4a9b8e] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center text-[#4a9b8e] font-medium text-sm group-hover:gap-2 transition-all">
                  <i className="ri-eye-line mr-1"></i>
                  Preview &amp; Unlock
                  <i className="ri-arrow-right-line ml-1"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
              <div className="flex-1 min-w-0 pr-4">
                <h3 className="text-lg font-semibold text-[#1e3a5f] truncate">
                  {currentArticle.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {currentArticle.category} &bull; {currentArticle.date}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer shrink-0"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {/* Preview Step */}
            {modal.step === 'preview' && (
              <div className="flex-1 overflow-auto">
                {/* Article Content Preview */}
                <div className="relative">
                  <div className="px-8 pt-8 pb-0">
                    {/* Article Image */}
                    <div className="w-full h-56 rounded-lg overflow-hidden mb-6">
                      <img
                        src={currentArticle.imageUrl}
                        alt={currentArticle.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Article Text Content */}
                    <div className="prose max-w-none">
                      {currentArticle.previewContent.slice(0, 5).map((paragraph, idx) => {
                        const isHeading = paragraph.length < 60 && !paragraph.includes('.');
                        return isHeading ? (
                          <h4
                            key={idx}
                            className="text-lg font-bold text-[#1e3a5f] mt-6 mb-3"
                          >
                            {paragraph}
                          </h4>
                        ) : (
                          <p
                            key={idx}
                            className="text-sm text-gray-700 leading-relaxed mb-4"
                          >
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                  {/* Fade-out overlay hiding the rest */}
                  <div className="relative px-8">
                    <div className="prose max-w-none">
                      {currentArticle.previewContent.slice(5).map((paragraph, idx) => {
                        const isHeading = paragraph.length < 60 && !paragraph.includes('.');
                        return isHeading ? (
                          <h4
                            key={idx}
                            className="text-lg font-bold text-[#1e3a5f] mt-6 mb-3"
                          >
                            {paragraph}
                          </h4>
                        ) : (
                          <p
                            key={idx}
                            className="text-sm text-gray-700 leading-relaxed mb-4"
                          >
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                    {/* Gradient fade + blur overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white pointer-events-none" style={{ backdropFilter: 'blur(4px)' }}></div>
                  </div>

                  {/* Lock / Unlock CTA */}
                  <div className="px-8 pb-8 -mt-4 relative z-10">
                    <div className="bg-gradient-to-br from-[#f8f7f4] to-[#f0efeb] border border-gray-200 rounded-xl p-8 text-center shadow-sm">
                      <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-whatsapp-line text-3xl text-[#25D366]"></i>
                      </div>
                      <h4 className="text-xl font-bold text-[#1e3a5f] mb-2">
                        Continue Reading?
                      </h4>
                      <p className="text-sm text-gray-600 mb-2 max-w-sm mx-auto">
                        You've reached the end of the free preview.
                      </p>
                      <p className="text-sm text-gray-600 mb-6 max-w-sm mx-auto">
                        Send <strong className="text-[#1e3a5f]">KES 10</strong> via M-PESA to <strong className="text-[#1e3a5f]">0742117047 (Kezzy)</strong>, then WhatsApp Kezzy with your M-PESA message to get the full article.
                      </p>
                      <button
                        onClick={() => openWhatsApp(currentArticle.title)}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg"
                      >
                        <i className="ri-whatsapp-line text-xl"></i>
                        WhatsApp Kezzy for Full Article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}