import React from 'react';
import { Heart, Eye } from 'lucide-react';

function CarListings() {
  const cars = [
    {
      id: 1,
      image: '/images/skoda-octavia.jpg',
      title: 'Skoda Octavia 2014',
      price: '5 900 $',
      mileage: '311 тис. км',
      location: 'Одеса',
      isNew: false
    },
    {
      id: 2,
      image: '/images/bmw-3series.jpg',
      title: 'BMW 3 Series 2010',
      price: '8 900 $',
      mileage: '300 тис. км',
      location: 'Київ',
      isNew: true
    },
    {
      id: 3,
      image: '/images/opel-corsa.jpg',
      title: 'Opel Corsa 2015',
      price: '8 999 $',
      mileage: '45 тис. км',
      location: 'Львів',
      isNew: false
    },
    {
      id: 4,
      image: '/images/lexus-rx.jpg',
      title: 'Lexus RX 2022',
      price: '98 394 $',
      mileage: '1 тис. км',
      location: 'Київ',
      isNew: true
    },
    {
      id: 5,
      image: '/images/nissan-leaf.jpg',
      title: 'Nissan Leaf 2019',
      price: '16 800 $',
      mileage: '160 тис. км',
      location: 'Дніпро',
      isNew: false
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">ЗА НОВИМ АВТО — В АВТОСАЛОН ВІД AUTO.RIA</h2>
              <div className="flex items-center space-x-4 mt-2 text-sm">
                <span>Вибір 300+ брендів</span>
                <span>Повний сервіс</span>
                <span>Персональний менеджер авто</span>
              </div>
            </div>
            <div className="bg-white text-black px-3 py-1 rounded text-sm font-bold">
              AUTOCENTER
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6">
          <p className="text-gray-600">
            <strong>300 000+</strong> авто у усій Україні • за годину • <strong>614</strong> • перевірено на VIN-коду • <strong>249 163</strong>
          </p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">до 3000$</button>
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">від 15 000$</button>
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">< 100 тис км</button>
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">Дизель</button>
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">3 000$ / 7 000$</button>
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">Нові</button>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="relative">
                <img src={car.image} alt={car.title} className="w-full h-48 object-cover" />
                {car.isNew && (
                  <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    Новий
                  </span>
                )}
                <div className="absolute top-2 right-2 flex space-x-1">
                  <button className="bg-white bg-opacity-80 p-1 rounded">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="bg-white bg-opacity-80 p-1 rounded">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 flex items-center space-x-1">
                  <img src="/images/auto-ria-badge.png" alt="AUTO.RIA" className="w-8 h-6" />
                  <img src="/images/ukraine-badge.png" alt="Ukraine" className="w-6 h-6" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{car.title}</h3>
                <p className="text-green-600 font-bold text-lg mb-1">{car.price}</p>
                <p className="text-gray-600 text-sm mb-1">{car.mileage}</p>
                <p className="text-gray-600 text-sm">{car.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarListings;