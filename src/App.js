import React from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import CarListings from './components/CarListings';
import BrandLogos from './components/BrandLogos';
import Footer from './components/Footer';
import CookieNotice from './components/CookieNotice';
import NewsSection from './components/NewsSection';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <SearchSection />
        <CarListings />
        <BrandLogos />
        <NewsSection />
        <SocialLinks />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
}

export default App;