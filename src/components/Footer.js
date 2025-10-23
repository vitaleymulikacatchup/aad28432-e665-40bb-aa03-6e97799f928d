import React from 'react';
import { Facebook, Instagram, Youtube, Send, MessageCircle } from 'lucide-react';

function Footer() {
  const carBrands = [
    { name: 'Daewoo на продаж', count: '1 335' },
    { name: 'Audi', count: '18 872' },
    { name: 'Mazda', count: '8 817' },
    { name: 'Fiat', count: '3 888' },
    { name: 'Каталог легкових', count: '205 тис' },
    { name: 'Mercedes-Benz', count: '17 543' },
    { name: 'Peugeot', count: '8 950' },
    { name: 'Land Rover', count: '4 603' }
  ];

  const categories = [
    'Вживані авто',
    'Нові авто', 
    'Сільгосптехніка',
    'Всі послуги для авто',
    'Сервіс',
    'Калькулятор розмитнення',
    'Цінні папери',
    'Фінансування авто'
  ];

  return (
    <footer className="bg-gray-100 pt-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Car Catalog */}
        <div className="mb-8">
          <h3 className="font-semibold mb-4">Каталог автомобілів:</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="text-blue-600">Вживані авто</span>
            <span className="text-blue-600">Нові авто</span>
            <span className="text-blue-600">Все для автомобілістів</span>
            <span className="text-blue-600">Новини</span>
            <span className="text-blue-600">Тест</span>
            <span className="text-blue-600">Відгуки</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
            {carBrands.map((brand, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-blue-600">{brand.name}</span>
                <span className="text-gray-500">{brand.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3">Вживані авто</h4>
            <ul className="space-y-1 text-sm text-blue-600">
              <li>Автосалони</li>
              <li>Електромобілі</li>
              <li>Пригнані авто</li>
              <li>Нерозмитнені авто</li>
              <li>GARAGE AUTO.RIA</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Новини</h4>
            <ul className="space-y-1 text-sm text-blue-600">
              <li>Тест-драйви</li>
              <li>Електромобілі</li>
              <li>Розмитнення</li>
              <li>Онлайн-журнал</li>
              <li>Як покупати авто до зими</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Відгуки про авто</h4>
            <ul className="space-y-1 text-sm text-blue-600">
              <li>Авто Лідер</li>
              <li>RIA.com для бізнесу</li>
              <li>RIA.com Marketplaces</li>
              <li>API для розробника</li>
              <li>Вікіпедія про AUTO.RIA</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Допомога по сайту AUTO.RIA.com</h4>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Facebook className="w-5 h-5 text-blue-600" />
                <Instagram className="w-5 h-5 text-pink-600" />
                <Youtube className="w-5 h-5 text-red-600" />
                <Send className="w-5 h-5 text-blue-500" />
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <input 
                type="text" 
                placeholder="Написати нам" 
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">AUTO.RIA у вашому смартфоні</h3>
              <p className="text-gray-600 mb-4">Все для купівлі та продажу авто в додатку AUTO.RIA</p>
              <p className="text-sm text-gray-500">Приєднуйтесь до спільноти автолюбителів AUTO.RIA</p>
            </div>
            <div className="flex space-x-3">
              <img src="/images/app-store.png" alt="App Store" className="h-12" />
              <img src="/images/google-play.png" alt="Google Play" className="h-12" />
              <img src="/images/app-gallery.png" alt="AppGallery" className="h-12" />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t py-4 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span>© 2024 RIA.com</span>
              <span>Безпечні угоди</span>
              <span>Угода про надання послуг</span>
            </div>
            <div className="flex space-x-4">
              <span>Підтримка</span>
              <span>Реклама</span>
              <span>Вакансії</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;