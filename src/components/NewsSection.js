import React from 'react';
import { ChevronRight } from 'lucide-react';

function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: 'Новий Toyota Land Cruiser FJ розсекречений! Що нам відомо?',
      image: '/images/news/toyota-fj.jpg',
      category: 'Новини'
    },
    {
      id: 2,
      title: 'Пільги на електромобілі продовжили до 2027 року! Як все так просто!',
      image: '/images/news/electric-car.jpg',
      category: 'Новини'
    },
    {
      id: 3,
      title: 'Як повідомить, що дорога в тумані?',
      image: '/images/news/fog-road.jpg',
      category: 'Поради'
    }
  ];

  const recommendations = [
    'Можливості розміщення',
    'Пошук автомобіля',
    'Автомобільні компанії',
    'Товари для авто',
    'Перед купівлею авто',
    'Автомобільні послуги'
  ];

  const services = [
    'Нові і б/у запчастини',
    'Шини та диски',
    'Гаражі та стоянки',
    'Товари для авто',
    'Перед купівлею авто',
    'Технічний центр та ПДР України',
    'Офіційні тест в ПДР України'
  ];

  const companies = [
    'Автосалони України',
    'Автомобільні компанії',
    'Авто на замовлення з-за кордону',
    'СТО'
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* News Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold mr-2">NEW!</span>
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm mr-4">Рекомендовано</span>
            <h2 className="text-lg font-semibold">Переглядай авто онлайн</h2>
          </div>
          <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
            Всі на головній
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">{item.category}</span>
                <h3 className="text-sm font-medium mt-2 line-clamp-3">{item.title}</h3>
              </div>
            </div>
          ))}
          <div className="bg-blue-600 text-white rounded-lg p-4 flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-bold mb-2">Автомобільні новини</h3>
              <p className="text-sm opacity-90">Тест-драйви • Журнал • Як покупати авто до зими</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">AUTO.RIA рекомендує</h3>
            <ul className="space-y-2">
              {recommendations.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Пошук автомобіля</h3>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Автомобільні компанії</h3>
            <ul className="space-y-2">
              {companies.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;