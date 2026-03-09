import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ArticlesHero from './components/ArticlesHero';
import ArticlesList from './components/ArticlesList';

const ArticlesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ArticlesHero />
      <ArticlesList />
      <Footer />
    </div>
  );
};

export default ArticlesPage;
