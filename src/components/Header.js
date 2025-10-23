import React from 'react';
import { Menu, User, Heart, MessageCircle, Plus } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Top navigation */}
      <div className="bg-gray-100 py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>RIA.com</span>
            <span>Автомобілі</span>
            <span>Нерухомість</span>
            <span>Автозапчастини</span>
            <div className="flex items-center space-x-1">
              <img src="/images/ukraine-flag.png" alt="Ukraine" className="w-4 h-3" />
              <span>Збір на авто для ЗСУ</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MessageCircle className="w-4 h-4" />
            <Heart className="w-4 h-4" />
            <span className="bg-red-500 text-white px-1 rounded-full text-xs">0</span>
            <User className="w-4 h-4" />
            <span>Увійти в кабінет</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="bg-ria-red text-white px-3 py-1 rounded-l font-bold">auto</div>
              <div className="bg-ria-blue text-white px-3 py-1 rounded-r font-bold">RIA</div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-ria-red">Вживані авто</a>
              <a href="#" className="text-gray-700 hover:text-ria-red">Нові авто</a>
              <a href="#" className="text-gray-700 hover:text-ria-red">Новини</a>
              <div className="relative">
                <a href="#" className="text-gray-700 hover:text-ria-red flex items-center">
                  Все для авто
                  <Menu className="w-4 h-4 ml-1" />
                </a>
              </div>
            </nav>
          </div>
          
          <button className="btn-green flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Продати авто
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;