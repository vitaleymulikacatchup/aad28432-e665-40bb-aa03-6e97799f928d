import React from 'react';
import { Youtube, Instagram, Facebook, MessageCircle, Send } from 'lucide-react';

function SocialLinks() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Приєднуйтесь до спільноти автолюбителів AUTO.RIA</h2>
          
          {/* App Store Links */}
          <div className="flex justify-center space-x-4 mb-6">
            <img src="/images/app-store.png" alt="App Store" className="h-10" />
            <img src="/images/google-play.png" alt="Google Play" className="h-10" />
            <img src="/images/app-gallery.png" alt="AppGallery" className="h-10" />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <a href="#" className="bg-red-600 text-white p-4 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
            <Youtube className="w-6 h-6 mr-2" />
            <span className="text-sm font-medium">YouTube AUTO.RIA</span>
          </a>
          
          <a href="#" className="bg-pink-600 text-white p-4 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
            <Instagram className="w-6 h-6 mr-2" />
            <span className="text-sm font-medium">Instagram AUTO.RIA</span>
          </a>
          
          <a href="#" className="bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
            <Facebook className="w-6 h-6 mr-2" />
            <span className="text-sm font-medium">Facebook AUTO.RIA</span>
          </a>
          
          <a href="#" className="bg-black text-white p-4 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
            <MessageCircle className="w-6 h-6 mr-2" />
            <span className="text-sm font-medium">TikTok AUTO.RIA</span>
          </a>
          
          <a href="#" className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
            <Send className="w-6 h-6 mr-2" />
            <span className="text-sm font-medium">Telegram AUTO.RIA</span>
          </a>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="#" className="bg-blue-100 text-blue-800 p-4 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
            <MessageCircle className="w-6 h-6 mr-2" />
            <span className="text-sm font-medium">Пошук авто • Чат-бот</span>
          </a>
          
          <a href="#" className="bg-gray-800 text-white p-4 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
            <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold mr-2">GARAGE</span>
            <span className="text-sm font-medium">Гараж AUTO.RIA</span>
          </a>
        </div>

        {/* Bottom Logo */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center">
            <div className="bg-ria-red text-white px-3 py-1 rounded-l font-bold">auto</div>
            <div className="bg-ria-blue text-white px-3 py-1 rounded-r font-bold">RIA</div>
            <span className="ml-4 text-lg font-bold text-gray-800">ЗНАЄМО, ВО ПЕРЕВІРИМО</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;