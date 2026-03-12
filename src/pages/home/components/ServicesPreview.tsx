import { Link } from 'react-router-dom';

const ArticlesPreview = () => {
  const articles = [
    {
      title: 'Understanding Mediation: A Path to Peaceful Resolution',
      excerpt: 'Mediation offers a structured, voluntary process where a neutral third party helps disputing parties reach a mutually acceptable agreement. Learn how this approach is transforming dispute resolution in Kenya and beyond.',
      date: 'February 15, 2025',
      category: 'Mediation Basics',
      slug: '/articles',
    },
    {
      title: 'The Role of Mediation in Commercial Disputes',
      excerpt: 'Commercial disputes can be costly and time-consuming when handled through traditional litigation. Discover how mediation provides a faster, more cost-effective alternative for businesses seeking sustainable resolutions.',
      date: 'January 28, 2025',
      category: 'Dispute Resolution',
      slug: '/articles',
    },
    {
      title: 'Legal Insights: When to Choose Mediation Over Litigation',
      excerpt: 'Not every legal dispute needs to go to court. This article explores the key legal considerations that determine when mediation is the more appropriate and advantageous route for resolving conflicts.',
      date: 'January 10, 2025',
      category: 'Legal Insights',
      slug: '/articles',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Articles
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Insights and perspectives on mediation, dispute resolution, and legal matters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col"
            >
              <span className="inline-block text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-4 w-fit">
                {article.category}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">{article.date}</span>
                <Link
                  to={article.slug}
                  className="text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors flex items-center gap-1"
                >
                  Read More
                  <i className="ri-arrow-right-line text-base"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/articles"
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-lg text-base font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            View All Articles
            <i className="ri-arrow-right-line ml-2 text-lg"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPreview;
