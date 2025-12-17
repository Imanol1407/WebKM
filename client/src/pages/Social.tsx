import { useI18n } from "@/lib/i18n";

export function Social() {
  const { t, toggleLanguage } = useI18n();

  return (
    <div className="page-transition min-h-screen bg-gray-900 pt-16 md:pt-20">
      <div className="bg-km-red py-12 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          {/* BOTÓN IDIOMA SOCIAL */}
          <button onClick={toggleLanguage} className="lang-btn-style mb-4 border-white bg-white/20 hover:bg-white/40">
            <i className="fas fa-bolt"></i> <span>{t('btn_lang_social')}</span>
          </button>

          <h1 className="text-3xl md:text-6xl font-header font-bold text-white mt-2 drop-shadow-lg">{t('social_title')}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-gray-900 via-purple-900 to-km-red shadow-2xl border-4 border-km-gold/20">
          <div className="relative z-10 px-4 py-12 md:px-8 text-center flex flex-col items-center">
            <div className="h-20 w-20 md:h-24 md:w-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
              <i className="fab fa-instagram text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"></i>
            </div>

            <h2 className="text-2xl md:text-5xl font-header font-bold text-white mb-4">
              {t('social_card_title')}
            </h2>
            
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl mb-8 max-w-2xl border border-white/10">
              <p className="text-sm md:text-xl text-gray-100 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t('social_card_desc') }}>
              </p>
            </div>

            <a href="https://www.instagram.com/kmpizzaburger/" target="_blank" className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-km-gold transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg">
              <i className="fab fa-instagram text-xl"></i>
              <span>{t('btn_follow')}</span>
            </a>
            
            <p className="mt-6 text-xs md:text-sm text-gray-400">{t('social_footer')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
