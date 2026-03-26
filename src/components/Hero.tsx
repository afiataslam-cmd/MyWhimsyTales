import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&auto=format&fit=crop" 
          alt="Vintage Atelier" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-footer/60 mb-6 block"
        >
          Boutique Leather & Crochet
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif italic text-footer mb-8 leading-tight"
        >
          Crafting Stories in Every <br /> <span className="text-cta">Stitch & Fold</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-footer/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Discover our collection of handcrafted leather journals and artisanal crochet creations, 
          designed for those who cherish the whimsical and the timeless.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/shop" className="bg-cta text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-cta/90 transition-all flex items-center group shadow-lg shadow-cta/20">
            Explore Collection
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/about" className="border border-footer/20 text-footer px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-footer/5 transition-all">
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="w-px h-24 bg-footer/20 mb-4 mx-auto"></div>
        <span className="writing-vertical-rl text-[10px] uppercase tracking-widest text-footer/40">Scroll to Explore</span>
      </div>
    </section>
  );
};
