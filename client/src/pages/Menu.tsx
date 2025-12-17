import { useI18n } from "@/lib/i18n";
import { menuData } from "@/lib/data";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Menu() {
  const { t, language, toggleLanguage } = useI18n();
  const [currentCategory, setCurrentCategory] = useState("clasicos");
  const [selectedSizes, setSelectedSizes] = useState<Record<number, 'small' | 'medium' | 'large'>>({});

  const categories = [
    { id: 'clasicos', label: t('cat_clasicos') },
    { id: 'especialidades', label: t('cat_especialidades') },
    { id: 'nuevas', label: t('cat_nuevas') },
    { id: 'hamburguesas', label: t('cat_hamburguesas') },
    { id: 'bebidas', label: t('cat_bebidas') },
  ];

  const formatPrice = (price: number) => `RD$ ${price.toFixed(0)}`;

  const handleSizeChange = (itemId: number, size: 'small' | 'medium' | 'large') => {
    setSelectedSizes(prev => ({ ...prev, [itemId]: size }));
  };

  const filteredItems = menuData.filter(item => item.category === currentCategory);

  return (
    <div className="page-transition min-h-screen bg-gray-900 pt-16 md:pt-20">
      {/* Header del Menú */}
      <div className="bg-km-wood py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/food.png')" }}></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-2 block animate-pulse">{t('hungry_txt')}</span>
          <h1 className="menu-title-impact font-header mt-1" dangerouslySetInnerHTML={{ __html: t('menu_title_main') }}></h1>
        </div>
      </div>

      {/* MENU CONTENT */}
      <div className="py-6 md:py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

          {/* LANGUAGE TOGGLE SECTION */}
          <div className="flex flex-col items-center mb-6">
            <p className="blink-text text-km-gold text-xs md:text-sm font-bold uppercase mb-2">{t('switchMsg')}</p>
            <button onClick={toggleLanguage} className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 cursor-pointer">
              <i className="fas fa-globe"></i> <span>{t('btnLabel')}</span>
            </button>
          </div>

          {/* Categories Navigation */}
          <div className="sticky top-16 md:top-24 z-30 bg-gray-900/95 p-2 md:p-4 rounded-xl border-b border-gray-800 shadow-xl backdrop-blur-sm mb-6">
            <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 md:justify-center px-2 snap-x">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCurrentCategory(cat.id)}
                  className={`filter-btn snap-start whitespace-nowrap px-4 py-2 rounded-full transition text-xs md:text-sm flex-shrink-0 ${currentCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 px-2">
            {filteredItems.map(item => {
              const itemName = language === 'es' ? item.name : item.name_en;
              const itemIng = language === 'es' ? item.ingredients : item.ingredients_en;
              const isPizza = currentCategory !== 'hamburguesas' && currentCategory !== 'bebidas';

              return (
                <div key={item.id} className="pizza-card bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 flex flex-col">
                  {isPizza ? (
                    // PIZZA CARD
                    <>
                      <div className="h-40 md:h-48 overflow-hidden relative">
                        <img src={item.image} alt={itemName} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1 font-header uppercase flex justify-between items-start">
                          {itemName}
                          <span className="text-km-gold text-base md:text-lg">
                            {item.prices && formatPrice(item.prices[selectedSizes[item.id] || 'small'])}
                          </span>
                        </h3>
                        <p className="text-gray-400 text-xs mb-3 h-8 overflow-hidden leading-tight">{itemIng}</p>

                        <p className="text-red-500 text-sm font-bold uppercase mb-2 text-center tracking-wider animate-pulse flex items-center justify-center gap-2">
                          <i className="fas fa-hand-pointer text-xs"></i> {t('tap_price')}
                        </p>

                        <div className="grid grid-cols-3 gap-2 mb-2 bg-gray-900 p-1 rounded-lg">
                          {(['small', 'medium', 'large'] as const).map(size => {
                            const isSelected = (selectedSizes[item.id] || 'small') === size;
                            const labels = { small: '25cm', medium: '50cm', large: '100cm' };
                            const pieces = { small: '8 Pcs', medium: '16 Pcs', large: '32 Pcs' };

                            return (
                              <button
                                key={size}
                                onClick={() => handleSizeChange(item.id, size)}
                                className={`btn-size text-xs py-2 rounded transition touch-manipulation flex flex-col items-center justify-center leading-tight ${isSelected ? 'active text-white' : 'text-gray-400 hover:text-white'}`}
                              >
                                <span>{labels[size]}</span>
                                <span className="text-[9px] opacity-80">{pieces[size]}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    // BURGER/DRINK CARD
                    <>
                      <div className="h-40 md:h-48 overflow-hidden relative">
                        <img src={item.image} alt={itemName} className="w-full h-full object-cover" />
                        <div className="absolute top-2 right-2 bg-km-gold text-black font-bold px-2 py-1 rounded text-xs md:text-sm">
                          {item.priceSingle && formatPrice(item.priceSingle)}
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1 font-header uppercase">{itemName}</h3>
                          <p className="text-gray-400 text-xs md:text-sm">{itemIng}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
