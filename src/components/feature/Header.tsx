import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="https://static.readdy.ai/image/b92b61a178bbadc2f7e64b37b3c92766/a82100a4d8b074af1064e8e54418a95a.png"
              alt="House of Kezzy Mediators"
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors whitespace-nowrap ${
                isActive('/')
                  ? isScrolled
                    ? 'text-teal-600'
                    : 'text-white'
                  : isScrolled
                  ? 'text-gray-700 hover:text-teal-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/articles"
              className={`text-sm font-medium transition-colors whitespace-nowrap ${
                isActive('/articles')
                  ? isScrolled
                    ? 'text-teal-600'
                    : 'text-white'
                  : isScrolled
                  ? 'text-gray-700 hover:text-teal-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Articles
            </Link>
            <a
              href="mailto:Houseofkezzymediators@gmail.com"
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                isScrolled
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-white text-teal-600 hover:bg-gray-50'
              }`}
            >
              Request Consultation
            </a>
          </div>

          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
              <span className={`block h-0.5 w-full transition-all ${isScrolled ? 'bg-gray-700' : 'bg-white'}`}></span>
              <span className={`block h-0.5 w-full transition-all ${isScrolled ? 'bg-gray-700' : 'bg-white'}`}></span>
              <span className={`block h-0.5 w-full transition-all ${isScrolled ? 'bg-gray-700' : 'bg-white'}`}></span>
            </div>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mb-4 py-4">
            <Link
              to="/"
              className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <a
              href="mailto:Houseofkezzymediators@gmail.com"
              className="block mx-6 mt-2 px-6 py-2.5 bg-teal-600 text-white text-center rounded-lg text-sm font-medium hover:bg-teal-700 whitespace-nowrap"
            >
              Request Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}