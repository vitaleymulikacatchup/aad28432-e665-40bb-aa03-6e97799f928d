import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

function SearchSection() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search Form */}
          <div className="flex-1">
            <div className="bg-ria-red rounded-lg p-6">
              {/* Tabs */}
              <div className="flex mb-4">
                <button 
                  className={`px-4 py-2 rounded-l ${activeTab === 'all' ? 'bg-white text-ria-red' : 'bg-red-600 text-white'}`}
                  onClick={() => setActiveTab('all')}
                >
                  Всі
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === 'legkovi' ? 'bg-white text-ria-red' : 'bg-red-600 text-white'}`}
                  onClick={() => setActiveTab('legkovi')}
                >
                  Легкові
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === 'moto' ? 'bg-white text-ria-red' : 'bg-red-600 text-white'}`}
                  onClick={() => setActiveTab('moto')}
                >
                  Мото
                </button>
                <button 
                  className={`px-4 py-2 rounded-r ${activeTab === 'gruzovi' ? 'bg-white text-ria-red' : 'bg-red-600 text-white'}`}
                  onClick={() => setActiveTab('gruzovi')}
                >
                  Грузові
                </button>
              </div>

              {/* Search Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-white text-sm mb-1">Марка</label>
                  <select className="search-input">
                    <option>Всі марки</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Модель</label>
                  <select className="search-input">
                    <option>Всі моделі</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Область</label>
                  <select className="search-input">
                    <option>Вся Україна</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Рік випуску</label>
                  <select className="search-input">
                    <option>Будь-який</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Ціна, $</label>
                  <div className="flex gap-2">
                    <input type="text" placeholder="від" className="search-input flex-1" />
                    <input type="text" placeholder="до" className="search-input flex-1" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="text-white underline hover:no-underline">
                  Розширений пошук
                </button>
                <button className="btn-secondary flex items-center justify-center flex-1 sm:flex-none">
                  <Search className="w-4 h-4 mr-2" />
                  Пошук
                </button>
              </div>
            </div>

            {/* VIN Check */}
            <div className="mt-4 bg-ria-blue rounded-lg p-4 text-white">
              <div className="flex items-center justify-between">
                <span>Перевірка VIN</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Honda HR-V Ad */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
                <h3 className="font-bold text-lg">HONDA HR-V</h3>
                <p className="text-sm opacity-90">стильний і вмілий</p>
              </div>
              <div className="p-4">
                <img src="/images/honda-hrv.jpg" alt="Honda HR-V" className="w-full h-32 object-cover rounded" />
                <button className="btn-secondary w-full mt-3">
                  Переглянути
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;