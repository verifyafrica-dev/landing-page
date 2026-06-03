import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Menu, ExternalLink } from 'lucide-react';
import { smoothScrollTo } from '../../hooks/useScrollAnimation';

interface NavbarProps {
  onRequestDemo: () => void;
  variant?: 'transparent' | 'solid';
}

export default function Navbar({ onRequestDemo, variant = 'transparent' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      let attempts = 0;
      const maxAttempts = 20;
      const tryScroll = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          smoothScrollTo(location.hash, {
            duration: 1200,
            easing: 'easeInOutQuart',
            offset: -80
          });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 200);
        }
      };
      // Initial delay to allow route transition and lazy-loaded pages to render
      setTimeout(tryScroll, 150);
    }
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const showSolidBg = variant === 'solid' || isScrolled || isMobileMenuOpen;

  const navItems = [
    { href: '/features', label: 'Features', isLink: true },
    { href: '/docs', label: 'API Docs', isLink: true },
    { href: '/resources', label: 'Resources', isLink: true },
    { href: '#pricing', label: 'Pricing' },
    { href: '/about', label: 'About', isLink: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      smoothScrollTo(href, {
        duration: 1200,
        easing: 'easeInOutQuart',
        offset: -80
      });
    } else {
      navigate('/' + href);
    }
  };

  const handleMobileNavClick = (href: string, isLink: boolean, isExternal?: boolean) => {
    setIsMobileMenuOpen(false);
    if (isExternal) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (isLink) {
      navigate(href);
    } else if (isHomePage) {
      setTimeout(() => {
        smoothScrollTo(href, {
          duration: 1200,
          easing: 'easeInOutQuart',
          offset: -80
        });
      }, 300);
    } else {
      navigate('/' + href);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolidBg 
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5' 
            : 'bg-transparent'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative flex items-center justify-between h-16 sm:h-20 lg:h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0 max-w-[140px] sm:max-w-[160px] lg:max-w-none">
              <img
                src="https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/8195c097-6839-48ae-86dc-51bd07febc5a_ChatGPT_Image_Feb_9__2026__10_18_46_AM-removebg-preview.png?v=7367ed1f2953d9fa10cf29e8cd5c7ddc"
                alt="VerifyAfrica"
                title="VerifyAfrica – KYC, AML &amp; Identity Verification Platform for Africa"
                className="h-12 sm:h-14 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation — absolutely centered */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
              {navItems.map((item, index) => (
                item.isExternal ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative text-sm font-medium transition-all duration-300 hover:text-teal-500 group cursor-pointer ${
                      showSolidBg ? 'text-gray-700' : 'text-white/90'
                    }`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                      transition: `all 0.4s ease-out ${200 + index * 50}ms`
                    }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ) : item.isLink ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`relative text-sm font-medium transition-all duration-300 hover:text-teal-500 group ${
                      showSolidBg ? 'text-gray-700' : 'text-white/90'
                    }`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                      transition: `all 0.4s ease-out ${200 + index * 50}ms`
                    }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-sm font-medium transition-all duration-300 hover:text-teal-500 group cursor-pointer ${
                      showSolidBg ? 'text-gray-700' : 'text-white/90'
                    }`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                      transition: `all 0.4s ease-out ${200 + index * 50}ms`
                    }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div 
              className="hidden lg:flex items-center space-x-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'all 0.4s ease-out 500ms'
              }}
            >
              <a
                href="https://dashboard.verifyafrica.io/login"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap hover:scale-105 active:scale-95 cursor-pointer ${
                  showSolidBg
                    ? 'text-gray-700 border border-gray-300 hover:border-teal-400 hover:text-teal-600'
                    : 'text-white border border-white/30 hover:border-white/60 hover:bg-white/10'
                }`}>
                Explore Dashboard
              </a>
              <button 
                onClick={onRequestDemo}
                className="group relative px-5 py-2.5 bg-teal-500 text-white text-sm font-medium rounded-lg overflow-hidden transition-all whitespace-nowrap cursor-pointer hover:shadow-lg hover:shadow-teal-500/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Request Demo</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <button 
                onClick={onRequestDemo}
                className="px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-lg whitespace-nowrap cursor-pointer"
              >
                Demo
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                  showSolidBg
                    ? 'text-gray-800 bg-gray-100 hover:bg-gray-200'
                    : 'text-white bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="text-2xl" />
                ) : (
                  <Menu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-16 sm:top-20 left-0 right-0 bottom-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-out overflow-y-auto ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-6 py-8">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleMobileNavClick(item.href, !!item.isLink, !!item.isExternal)}
                className="w-full text-left px-4 py-4 text-lg font-medium text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-xl transition-all cursor-pointer"
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.3s ease-out ${index * 50}ms`
                }}
              >
                {item.label}
                {item.isExternal && (
                  <ExternalLink className="text-sm ml-1.5 opacity-50" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
            <a
              href="https://dashboard.verifyafrica.io/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 text-base font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-teal-400 hover:text-teal-600 transition-all cursor-pointer text-center block"
            >
              Explore Dashboard
            </a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRequestDemo();
              }}
              className="w-full py-3 px-6 bg-teal-500 text-white text-base font-medium rounded-lg hover:bg-teal-600 transition-all cursor-pointer"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
