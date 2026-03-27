import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
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
      name: "Sage Fern Amigurumi",
      price: 25.0,
      category: "Crochet",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
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

export const Leather: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch('/api/products?category=Leather');
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (err) {
  //       console.error("Failed to fetch products", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchProducts();
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="pt-24 pb-24">
      <section className="bg-card/10 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-[0.5em] text-accent mb-4 block">Hand-Stitched Artistry</span>
          <h1 className="text-5xl font-serif italic text-footer">Leather Journals</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {products.filter((product) => product.category === "Leather").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        {/* )} */}
      </div>
    </div>
  );
};
