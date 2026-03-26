import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, total, itemCount } = useCart();

  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/cart/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, total })
      });
      const data = await res.json();
      if (data.success) {
        alert(`Order successful! ID: ${data.orderId}`);
        onClose();
      }
    } catch (err) {
      console.error("Checkout failed", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-footer/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-accent/10 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <ShoppingBag size={20} className="text-cta" />
                <h2 className="text-xl font-serif italic text-footer">Your Treasures ({itemCount})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-card/20 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-card/20 rounded-full flex items-center justify-center text-accent">
                    <ShoppingBag size={32} />
                  </div>
                  <p className="text-footer/60 font-serif italic">Your cart is as empty as a blank page...</p>
                  <button 
                    onClick={onClose}
                    className="text-cta text-sm uppercase tracking-widest hover:underline"
                  >
                    Start your story
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex space-x-4 group">
                    <div className="w-24 h-24 flex-shrink-0 bg-card/20 rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between">
                        <h4 className="font-serif italic text-footer">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-accent hover:text-cta transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-footer/60 uppercase tracking-tighter">{item.category}</p>
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center space-x-3 bg-card/20 rounded-full px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-cta transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-cta transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-medium text-footer">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-accent/10 bg-card/5 space-y-4">
                <div className="flex justify-between items-center text-footer">
                  <span className="text-sm uppercase tracking-widest opacity-60">Subtotal</span>
                  <span className="text-xl font-medium">${total.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-footer/40 uppercase tracking-widest text-center">
                  Shipping and taxes calculated at checkout
                </p>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-cta text-white py-4 rounded-full text-sm uppercase tracking-widest hover:bg-cta/90 transition-all flex items-center justify-center group"
                >
                  Proceed to Checkout
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
