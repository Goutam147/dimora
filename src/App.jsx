import React, { useState } from 'react';
import TopAnnouncementBar from './components/TopAnnouncementBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MobileCategoriesStrip from './components/MobileCategoriesStrip';
import MobileBottomNav from './components/MobileBottomNav';
import HeroSlider from './components/HeroSlider';
import ShopByCategory from './components/ShopByCategory';
import ExclusiveBrandsSection from './components/ExclusiveBrandsSection';
import MobileShopByPrice from './components/MobileShopByPrice';
import CustomizeStoreSection from './components/CustomizeStoreSection';
import MobileBestSellers from './components/MobileBestSellers';
import MobileJoyOfGifting from './components/MobileJoyOfGifting';
import DiamondJewellery from './components/DiamondJewellery';
import CollectionsSection from './components/CollectionsSection';
import ExploreJewellery from './components/ExploreJewellery';
import GiftingAndMoreSection from './components/GiftingAndMoreSection';
import ShopByGenderSection from './components/ShopByGenderSection';
import QualityServiceSection from './components/QualityServiceSection';
import InstagramSection from './components/InstagramSection';
import TakeATourSection from './components/TakeATourSection';
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
    <div className="min-h-screen bg-white text-text-dark font-sans pb-14 md:pb-0">
      {/* Top Announcement Bar */}
      <TopAnnouncementBar />

      {/* Sticky Header, Navbar & Mobile Categories Container */}
      <div className="sticky top-0 z-50 bg-white shadow-md transition-shadow">
        <Header wishlistCount={wishlistCount} cartCount={cartCount} />
        <Navbar />
        <MobileCategoriesStrip />
      </div>

      {/* Main Content */}
      <main>
        <HeroSlider />
        <ShopByCategory />

        {/* Mobile View Only Flow (Exclusive Brands -> Shop By Price -> Customize Store -> Our Best Sellers -> Joy Of Gifting) */}
        <div className="block md:hidden">
          <ExclusiveBrandsSection />
          <MobileShopByPrice />
          <CustomizeStoreSection />
          <MobileBestSellers
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
          />
          <MobileJoyOfGifting />
        </div>

        <DiamondJewellery />
        <CollectionsSection />
        <ExploreJewellery />

        {/* Web/Desktop View Only: Customize Store Section in original Desktop position */}
        <div className="hidden md:block">
          <CustomizeStoreSection />
        </div>

        {/* Web/Desktop View Only: Gifting And More Section in original Desktop position */}
        <div className="hidden md:block">
          <GiftingAndMoreSection />
        </div>

        <ShopByGenderSection />
        <QualityServiceSection />
        <InstagramSection />
        <TakeATourSection />

        {/* Web/Desktop View Only: Exclusive Brands Section in original Desktop position */}
        <div className="hidden md:block">
          <ExclusiveBrandsSection />
        </div>

        <FeaturedProducts
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
        />
      </main>

      <Footer />

      {/* Fixed Mobile Bottom Navigation Bar */}
      <MobileBottomNav />

      {toastMessage && (
        <div className="toast-notification">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
