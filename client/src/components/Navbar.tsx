import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import logo from "@assets/logo_1765813787322.jpg";

export function Navbar() {
  const { t } = useI18n();
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0 flex items-center gap-2 md:gap-3 cursor-pointer">
              <div className="h-10 w-10 md:h-14 md:w-14 rounded-full flex items-center justify-center border-2 border-km-gold overflow-hidden bg-white">
                <img src={logo} alt="Logo KM" className="object-contain h-full w-full p-0.5" />
              </div>
              <div>
                <h1 className="font-header text-xl md:text-2xl text-km-gold tracking-wider font-bold leading-none">KM PIZZA</h1>
                <p className="text-[10px] md:text-xs text-gray-400">Pizzería & Burger</p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link href="/">
                <button className={`px-5 py-2 rounded-full border border-gray-600 transition duration-300 text-sm font-bold uppercase tracking-wider animate-wave shadow-lg ${location === '/' ? 'bg-km-red text-black border-km-red hover:bg-red-500' : 'bg-km-red text-black hover:bg-red-500 border-transparent'}`}>
                  {t('nav_home')}
                </button>
              </Link>

              <Link href="/menu">
                <button className="glow-pulse bg-km-gold text-black font-extrabold px-6 py-2 rounded-full text-sm uppercase tracking-wider transform hover:scale-110 hover:bg-yellow-400 transition-all duration-300 shadow-xl border-2 border-yellow-200 cursor-pointer">
                  <i className="fas fa-book-open mr-2"></i> <span>{t('nav_menu')}</span>
                </button>
              </Link>

              <Link href="/social">
                <button className={`nav-link hover:text-red-400 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition animate-pulse border border-transparent hover:border-km-red ${location === '/social' ? 'text-red-400' : 'text-km-red'}`}>
                  {t('nav_social')}
                </button>
              </Link>

              <a href="tel:8093201515" className="animate-wave bg-transparent border border-km-gold text-km-gold hover:bg-km-gold hover:text-black px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-2">
                <i className="fas fa-phone-alt"></i> <span>{t('nav_call')}</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMobileMenu} className="inline-flex items-center justify-center p-2 rounded-md text-km-gold hover:text-white hover:bg-gray-800 focus:outline-none transition">
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-km-wood border-t border-gray-700 absolute w-full shadow-2xl animate-in slide-in-from-top-5">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link href="/">
              <button onClick={toggleMobileMenu} className="text-gray-200 hover:text-white block px-3 py-3 rounded-lg text-lg font-medium w-full text-left active:bg-gray-800">
                <i className="fas fa-home w-8 text-center text-km-gold"></i> <span>{t('nav_home')}</span>
              </button>
            </Link>

            <Link href="/menu">
              <button onClick={toggleMobileMenu} className="bg-km-gold text-black font-bold block px-3 py-4 rounded-lg text-lg w-full text-center uppercase shadow-lg my-2">
                <i className="fas fa-book-open mr-2"></i> <span>{t('nav_menu')}</span>
              </button>
            </Link>

            <Link href="/social">
              <button onClick={toggleMobileMenu} className="text-km-red block px-3 py-3 rounded-lg text-lg font-bold w-full text-left uppercase active:bg-gray-800">
                <i className="fas fa-heart w-8 text-center"></i> <span>{t('nav_social')}</span>
              </button>
            </Link>

            <a href="tel:8093201515" className="animate-wave text-gray-200 font-bold block px-3 py-3 rounded-lg text-lg w-full text-left border border-gray-600 mt-2 active:bg-gray-800">
              <i className="fas fa-phone-alt w-8 text-center text-km-gold"></i> <span>{t('nav_call_now')}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
