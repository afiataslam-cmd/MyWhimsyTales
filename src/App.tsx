import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { AuthModal } from './components/AuthModal';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

// Pages
import { Home } from './pages/Home';
import { ShopAll } from './pages/ShopAll';
import { Leather } from './pages/Leather';
import { Crochet } from './pages/Crochet';
import { About } from './pages/About';

const AppContent: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar 
          onCartOpen={() => setIsCartOpen(true)} 
          onAuthOpen={() => setIsAuthOpen(true)} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopAll />} />
            <Route path="/leather" element={<Leather />} />
            <Route path="/crochet" element={<Crochet />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      </div>
    </BrowserRouter>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}
