import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { motion, AnimatePresence } from 'motion/react';

const products = [
    {
      id: "1",
      name: "The Alchemist's Journal",
      price: 45.0,
      category: "Leather",
      image: "https://res.cloudinary.com/dqbn9syr3/image/upload/f_auto,q_auto/IMG_6148_yi2yeq",
      rating: 4.8,
      description: "Hand-stitched full-grain leather journal with aged parchment paper."
    },
    {
      id: "2",
      name: "Midnight Moss Crochet Shawl",
      price: 65.0,
      category: "Crochet",
      image: "https://res.cloudinary.com/dqbn9syr3/image/upload/v1774472426/IMG_6144_jwot3d.jpg",
      rating: 4.9,
      description: "Intricately woven shawl made from premium merino wool."
    },
    {
      id: "3",
      name: "Vintage Traveler's Notebook",
      price: 38.0,
      category: "Leather",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
      rating: 4.7,
      description: "Compact leather notebook with refillable inserts and brass hardware."
    },
    {
      id: "4",
      name: "Leather Journal",
      price: 25.0,
      category: "Leather",
      image: "https://res.cloudinary.com/dqbn9syr3/image/upload/v1774474497/Screenshot_2026-03-26_022844_ggpjfi.png",
      rating: 5.0,
      description: "Adorable hand-crocheted forest spirit companion."
    },
    {
      id: "5",
      name: "Embossed Grimoire",
      price: 85.0,
      category: "Leather",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1000&auto=format&fit=crop",
      rating: 4.9,
      description: "Large format leather book with intricate floral embossing."
    },
    {
      id: "6",
      name: "Autumn Ember Beanie",
      price: 30.0,
      category: "Crochet",
      image: "https://images.unsplash.com/photo-1575425186775-b8de9fa227e2?q=80&w=1000&auto=format&fit=crop",
      rating: 4.6,
      description: "Warm and cozy chunky knit beanie in burnt orange."
    }
  ];

export const ProductGrid: React.FC = () => {
  const [filterProducts, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<'All' | 'Leather' | 'Crochet'>('All');
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (filter !== "All") setProducts(products.filter((product) => product.category === filter))
    else setProducts(products)
    // const fetchProducts = async () => {
    //   // setLoading(true);
    //   // try {
    //   //   const url = filter === 'All' ? '/api/products' : `/api/products?category=${filter}`;
    //   //   const res = await fetch(url);
    //   //   const data = await res.json();
    //     // setProducts(data);?
    //   // } catch (err) {
    //     // console.error("Failed to fetch products", err);
    //   // } finally {
    //     // setLoading(false);
    //   }
    // // };
    // fetchProducts();
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

      {/* {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[4/5] bg-card/20 rounded-2xl mb-4"></div>
              <div className="h-4 bg-card/20 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-card/20 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : ( */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filterProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      {/* )} */}
    </section>
  );
};
