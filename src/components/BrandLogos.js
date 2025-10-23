import React from 'react';
import { ChevronRight } from 'lucide-react';

function BrandLogos() {
  const categories = [
    { name: 'Легкові б/у', icon: '/images/icons/car.png' },
    { name: 'Нові авто', icon: '/images/icons/new-car.png' },
    { name: 'Мото', icon: '/images/icons/motorcycle.png' },
    { name: 'Вантажівки', icon: '/images/icons/truck.png' },
    { name: 'Причепи', icon: '/images/icons/trailer.png' },
    { name: 'Спецтехніка', icon: '/images/icons/construction.png' },
    { name: 'Сільгосптехніка', icon: '/images/icons/tractor.png' },
    { name: 'Автобуси', icon: '/images/icons/bus.png' },
    { name: 'Водний', icon: '/images/icons/boat.png' }
  ];

  const brands = [
    { name: 'Lada', logo: '/images/brands/lada.png' },
    { name: 'Volkswagen', logo: '/images/brands/volkswagen.png' },
    { name: 'Mercedes-Benz', logo: '/images/brands/mercedes.png' },
    { name: 'Opel', logo: '/images/brands/opel.png' },
    { name: 'Renault', logo: '/images/brands/renault.png' },
    { name: 'BMW', logo: '/images/brands/bmw.png' },
    { name: 'Ford', logo: '/images/brands/ford.png' },
    { name: 'Audi', logo: '/images/brands/audi.png' },
    { name: 'Toyota', logo: '/images/brands/toyota.png' },
    { name: 'Daewoo', logo: '/images/brands/daewoo.png' },
    { name: 'Skoda', logo: '/images/brands/skoda.png' },
    { name: 'Nissan', logo: '/images/brands/nissan.png' },
    { name: 'Honda', logo: '/images/brands/honda.png' },
    { name: 'Hyundai', logo: '/images/brands/hyundai.png' },
    { name: 'Mitsubishi', logo: '/images/brands/mitsubishi.png' },
    { name: 'Chevrolet', logo: '/images/brands/chevrolet.png' },
    { name: 'Peugeot', logo: '/images/brands/peugeot.png' }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Categories */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 mb-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
              <img src={category.icon} alt={category.name} className="w-12 h-12 mb-2" />
              <span className="text-xs text-center text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="border-t pt-8">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center items-center p-2">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
            ))}
            <div className="flex justify-center items-center p-2">
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <span className="text-sm">Всі марки</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandLogos;