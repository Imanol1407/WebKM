import { useI18n } from "@/lib/i18n";
import { Link } from "wouter";
import metroExperienceImg from "@assets/image_1765827368056.png";
import playaDoradaImg from "@assets/puerto_plata_playa_dorada.png";
import maleconImg from "@assets/puerto_plata_malecon.png";
import airportImg from "@assets/puerto_plata_airport.png";

export function Home() {
  const { t, toggleLanguage, language } = useI18n();

  return (
    <div className="page-transition">
      <section id="inicio" className="relative min-h-[85vh] flex items-center justify-center text-center px-4 py-12">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=1000&q=70" alt="Pizza en tabla larga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto mt-4 flex flex-col items-center">

          {/* BOTÓN IDIOMA INICIO */}
          <button onClick={toggleLanguage} className="lang-btn-style mb-4 animate-bounce">
            <i className="fas fa-language"></i> <span>{t('btn_lang_home')}</span>
          </button>

          <span className="text-km-gold font-header text-lg md:text-xl tracking-widest uppercase mb-4 block font-bold border-b-2 border-km-gold inline-block pb-1">Puerto Plata</span>

          <h1 className="text-4xl xs:text-5xl md:text-8xl font-header text-white mb-6 leading-tight">
            <span className="block text-xl md:text-4xl font-light mb-2 tracking-widest opacity-90 uppercase" dangerouslySetInnerHTML={{ __html: t('home_subtitle') }}></span>
            <span className="title-impact text-km-gold">
              KILÓMETRO <br className="md:hidden" />
              <span className="text-km-red">P<span className="emoji-integrated">🍕</span>ZZA</span>
            </span>
          </h1>

          <p className="text-base md:text-2xl text-gray-100 mb-8 max-w-xl mx-auto font-medium drop-shadow-lg px-2" dangerouslySetInnerHTML={{ __html: t('home_desc') }}>
          </p>

          <div className="flex flex-col gap-4 justify-center items-center w-full max-w-xs mx-auto md:max-w-none md:flex-row">
            <Link href="/menu">
              <button className="w-full md:w-auto glow-pulse bg-km-gold text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-500 transition shadow-xl border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 active:shadow-none cursor-pointer">
                <i className="fas fa-utensils mr-2"></i> <span>{t('btn_view_menu')}</span>
              </button>
            </Link>

            <a href="tel:8093201515" className="w-full md:w-auto bg-black/60 backdrop-blur-md border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-black transition shadow-xl active:bg-white/10 flex items-center justify-center">
              <i className="fas fa-phone-alt mr-2"></i> <span>{t('btn_call_now')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: LA EXPERIENCIA DEL METRO */}
      <section className="py-12 md:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-km-gold to-km-red rounded-2xl blur opacity-75"></div>
              <img src={metroExperienceImg} alt="Amigos comiendo pizza" className="relative rounded-xl shadow-2xl w-full object-cover h-64 md:h-96 border-4 border-gray-800" />
            </div>

            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <span className="text-km-gold font-bold uppercase tracking-widest text-xs md:text-sm">{t('metro_badge')}</span>
              <h2 className="text-3xl md:text-5xl font-header font-bold text-white leading-tight">
                <span>{t('metro_title_1')}</span> <br />
                <span>{t('metro_title_2')}</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-km-gold to-yellow-200">{t('metro_title_3')}</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('metro_desc_1') }}>
              </p>

              <ul className="space-y-3 mt-4 text-left inline-block md:block">
                <li className="flex items-center text-gray-200 text-sm md:text-base">
                  <i className="fas fa-check-circle text-km-red mr-3 text-lg"></i>
                  <span>{t('metro_point_1')}</span>
                </li>
                <li className="flex items-center text-gray-200 text-sm md:text-base">
                  <i className="fas fa-check-circle text-km-red mr-3 text-lg"></i>
                  <span>{t('metro_point_2')}</span>
                </li>
                <li className="flex items-center text-gray-200 text-sm md:text-base">
                  <i className="fas fa-check-circle text-km-red mr-3 text-lg"></i>
                  <span>{t('metro_point_3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: LUGARES CERCANOS */}
      <section className="py-12 md:py-16 bg-km-wood relative border-t border-gray-800">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-km-gold font-bold uppercase tracking-wider text-xs md:text-sm">{t('loc_badge')}</span>
            <h2 className="text-3xl md:text-4xl font-header font-bold text-white mt-2">{t('loc_title')}</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto text-sm md:text-base mb-6 px-4">
              {t('loc_desc')}
            </p>

            <a href="https://maps.app.goo.gl/cUCRV9bd63oXUAys6" target="_blank" className="w-full md:w-auto inline-flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105 shadow-lg border border-blue-400 text-sm md:text-base">
              <i className="fas fa-location-arrow animate-bounce"></i>
              <span>{t('btn_gps')}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gray-900/80 p-0 rounded-xl border border-gray-700 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src={playaDoradaImg} alt="Playa Dorada" className="w-full h-full object-cover transition transform group-hover:scale-110 duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <h4 className="text-white font-bold text-lg md:text-xl drop-shadow-md">Playa Dorada</h4>
                  <div className="flex items-center text-xs md:text-sm text-km-gold space-x-3">
                    <span><i className="fas fa-car mr-1"></i> 3 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 p-0 rounded-xl border border-gray-700 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src={maleconImg} alt="Malecón Puerto Plata" className="w-full h-full object-cover transition transform group-hover:scale-110 duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <h4 className="text-white font-bold text-lg md:text-xl drop-shadow-md">Malecón</h4>
                  <div className="flex items-center text-xs md:text-sm text-km-gold space-x-3">
                    <span><i className="fas fa-car mr-1"></i> 10 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 p-0 rounded-xl border border-gray-700 flex flex-col overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src={airportImg} alt="Aeropuerto POP" className="w-full h-full object-cover transition transform group-hover:scale-110 duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <h4 className="text-white font-bold text-lg md:text-xl drop-shadow-md">Aeropuerto POP</h4>
                  <div className="flex items-center text-xs md:text-sm text-km-gold space-x-3">
                    <span><i className="fas fa-car mr-1"></i> 20 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
