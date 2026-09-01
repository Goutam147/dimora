import React, { useState } from 'react';
import TopAnnouncementBar from './components/TopAnnouncementBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ShopByCategory from './components/ShopByCategory';
import DiamondJewellery from './components/DiamondJewellery';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

export default function App() {
  const [wishlistCount, setWishlistCount] = useState(3);
  const [cartCount, setCartCount] = useState(2);
  const [toastMessage, setToastMessage] = useState('');

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
    showNotification(`"${product.name}" added to your shopping cart!`);
  };

  const handleToggleWishlist = (product) => {
    setWishlistCount((prev) => prev + 1);
    showNotification(`"${product.name}" added to Wishlist!`);
  };

  return (
    <div className="min-h-screen bg-white text-text-dark font-sans">
      <TopAnnouncementBar />
      <Header wishlistCount={wishlistCount} cartCount={cartCount} />
      <Navbar />
      <main>
        <HeroSlider />
        <ShopByCategory />
        <DiamondJewellery />
        <FeaturedProducts
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
        />
      </main>
      <Footer />

      {toastMessage && (
        <div className="toast-notification">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
