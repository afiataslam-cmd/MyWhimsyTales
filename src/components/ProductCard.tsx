import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { Star, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-card/20 rounded-2xl mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-footer/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-4 right-4 bg-white text-footer p-3 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-cta hover:text-white"
        >
          <Plus size={20} />
        </button>

        <div className="absolute top-4 left-4">
          <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-footer">
            {product.category}
          </span>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-serif italic text-lg text-footer group-hover:text-cta transition-colors">
            {product.name}
          </h3>
          <span className="font-medium text-footer">${product.price.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center space-x-1 text-accent">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
              className={i < Math.floor(product.rating) ? "text-cta" : "text-accent/30"}
            />
          ))}
          <span className="text-[10px] text-footer/40 ml-1">({product.rating})</span>
        </div>
      </div>
    </motion.div>
  );
};
