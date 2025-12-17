import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  
  return (
    <footer id="contacto" className="bg-black pt-12 pb-24 md:pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Quick Contact */}
            <div className="text-center md:text-left">
                <h3 className="font-header text-xl text-white mb-4">{t('footer_contact_title')}</h3>
                <ul className="space-y-4 text-gray-400 text-sm inline-block text-left">
                    <li className="flex flex-col items-start">
                        <div className="flex items-start mb-2">
                            <i className="fas fa-map-marker-alt mt-1 mr-3 text-km-gold"></i>
                            <span>Carretera Luperón km. 4, Costa Dorada.</span>
                        </div>
                        <a href="https://maps.app.goo.gl/cUCRV9bd63oXUAys6" target="_blank" className="ml-7 text-blue-400 font-bold text-xs flex items-center gap-1 p-2 bg-blue-900/20 rounded">
                            <i className="fas fa-map-marked-alt"></i> <span>{t('footer_map_btn')}</span>
                        </a>
                    </li>
                    <li className="flex items-center">
                        <i className="fas fa-phone-alt mr-3 text-km-gold"></i>
                        <a href="tel:8093201515" className="text-white font-bold">809-320-1515</a>
                    </li>
                </ul>
            </div>
            
            {/* Brand Info */}
            <div className="text-center md:text-left order-first md:order-none">
                 <h3 className="font-header text-2xl text-white mb-2">KM <span className="text-km-gold">PIZZA</span></h3>
                 <p className="text-gray-500 text-xs">{t('footer_slogan')}</p>
            </div>

        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-600 text-[10px] md:text-xs">
                &copy; 2024 KM Pizza Burger.
            </p>
        </div>
      </div>
    </footer>
  );
}
