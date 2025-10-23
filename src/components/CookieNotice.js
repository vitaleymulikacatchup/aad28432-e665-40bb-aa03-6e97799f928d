import React, { useState } from 'react';
import { X } from 'lucide-react';

function CookieNotice() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 max-w-md mx-auto">
      <div className="flex justify-between items-start">
        <div className="flex-1 pr-4">
          <p className="text-sm text-gray-700 mb-3">
            <strong>AUTO.RIA безпечний для вас</strong>
          </p>
          <p className="text-xs text-gray-600 mb-3">
            Ми використовуємо <a href="#" className="text-blue-600 underline">cookie-файли</a>. 
            Ознайомитесь з <a href="#" className="text-blue-600 underline">Політикою використання файлів cookies</a>
          </p>
          <div className="flex space-x-2">
            <button 
              className="bg-blue-600 text-white px-4 py-1 rounded text-xs hover:bg-blue-700"
              onClick={() => setIsVisible(false)}
            >
              Розумію і дозволяю
            </button>
            <button 
              className="text-gray-600 px-4 py-1 rounded text-xs hover:bg-gray-100"
              onClick={() => setIsVisible(false)}
            >
              Налаштувати
            </button>
          </div>
        </div>
        <button 
          className="text-gray-400 hover:text-gray-600"
          onClick={() => setIsVisible(false)}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default CookieNotice;