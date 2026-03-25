import React from 'react';
import { Hero } from '../components/Hero';
import { ProductGrid } from '../components/ProductGrid';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      <section className="bg-card/10 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <span className="text-xs uppercase tracking-[0.5em] text-accent mb-4 block">Craftsmanship</span>
          <h2 className="text-4xl font-serif italic text-footer">The Boutique Experience</h2>
        </div>
        <ProductGrid />
      </section>

      <section className="py-24 bg-footer text-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <span className="text-xs uppercase tracking-[0.4em] opacity-60">Best Sellers</span>
            <h2 className="text-5xl font-serif italic leading-tight">Hand-stitched <br /> Perfection</h2>
            <p className="text-lg opacity-80 font-light leading-relaxed">
              Our leather journals are crafted using traditional techniques passed down through generations. 
              Each piece is unique, bearing the marks of its handmade origin.
            </p>
            <button className="bg-cta text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-cta/90 transition-all">
              Shop Best Sellers
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ rotate: -5, scale: 0.9 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1000&auto=format&fit=crop" 
                alt="Leather Craft" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cta/20 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </section>
    </>
  );
};
