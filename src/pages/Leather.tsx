import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

export const Leather: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/products?category=Leather');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-24">
      <section className="bg-card/10 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-[0.5em] text-accent mb-4 block">Hand-Stitched Artistry</span>
          <h1 className="text-5xl font-serif italic text-footer">Leather Journals</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </div>
  );
};
