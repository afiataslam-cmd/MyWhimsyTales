import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { motion, AnimatePresence } from 'motion/react';

export const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<'All' | 'Leather' | 'Crochet'>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = filter === 'All' ? '/api/products' : `/api/products?category=${filter}`;
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [filter]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent mb-4 block">Our Collection</span>
          <h2 className="text-4xl font-serif italic text-footer">Curated Treasures</h2>
        </div>

        <div className="flex bg-card/30 p-1 rounded-full border border-accent/10">
          {['All', 'Leather', 'Crochet'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-8 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
                filter === cat ? 'bg-cta text-white shadow-md' : 'text-footer/60 hover:text-footer'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[4/5] bg-card/20 rounded-2xl mb-4"></div>
              <div className="h-4 bg-card/20 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-card/20 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};
