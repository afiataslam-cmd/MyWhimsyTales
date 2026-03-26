import React, { useState } from 'react';
import { ShoppingBag, User as UserIcon, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onCartOpen: () => void;
  onAuthOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartOpen, onAuthOpen }) => {
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-text">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif italic tracking-wider text-footer">My Whimsy Tales</Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-cta transition-colors">Shop All</Link>
            <Link to="/leather" className="text-sm uppercase tracking-widest hover:text-cta transition-colors">Leather</Link>
            <Link to="/crochet" className="text-sm uppercase tracking-widest hover:text-cta transition-colors">Crochet</Link>
            <Link to="/about" className="text-sm uppercase tracking-widest hover:text-cta transition-colors">About</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <button className="p-2 hover:text-cta transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <div className="relative">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-xs uppercase tracking-tighter hidden lg:block">Hello, {user.name}</span>
                  <button onClick={logout} className="p-2 hover:text-cta transition-colors">
                    <UserIcon size={20} />
                  </button>
                </div>
              ) : (
                <button onClick={onAuthOpen} className="p-2 hover:text-cta transition-colors">
                  <UserIcon size={20} />
                </button>
              )}
            </div>
            <button onClick={onCartOpen} className="p-2 hover:text-cta transition-colors relative">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-accent/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="block text-sm uppercase tracking-widest">Shop All</Link>
              <Link to="/leather" onClick={() => setIsMenuOpen(false)} className="block text-sm uppercase tracking-widest">Leather</Link>
              <Link to="/crochet" onClick={() => setIsMenuOpen(false)} className="block text-sm uppercase tracking-widest">Crochet</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-sm uppercase tracking-widest">About</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
