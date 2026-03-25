import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-24">
      <section className="bg-card/10 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <span className="text-xs uppercase tracking-[0.5em] text-accent mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-serif italic text-footer mb-8 leading-tight">
              The Heart Behind <br /> <span className="text-cta">The Whimsy</span>
            </h1>
            <p className="text-lg text-footer/80 font-light leading-relaxed mb-6">
              My Whimsy Tales began in a small attic studio, surrounded by the scent of aged leather 
              and the soft textures of hand-dyed wool. It was born from a desire to create objects 
              that carry a sense of magic and history.
            </p>
            <p className="text-lg text-footer/80 font-light leading-relaxed">
              Every journal is hand-stitched using traditional bookbinding methods, and every 
              crochet piece is woven with intention. We believe in slow living, artisanal 
              craftsmanship, and the beauty of the handmade.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&auto=format&fit=crop" 
                alt="The Studio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-cta text-white p-8 rounded-3xl shadow-xl max-w-xs hidden lg:block">
              <p className="font-serif italic text-lg leading-snug">
                "We don't just make products; we craft companions for your journey."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24 border-t border-accent/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif italic text-footer">Artisanal Quality</h3>
            <p className="text-sm text-footer/60 leading-relaxed">
              We source only the finest full-grain leathers and premium natural fibers for our creations.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif italic text-footer">Sustainable Craft</h3>
            <p className="text-sm text-footer/60 leading-relaxed">
              Our process is slow and mindful, minimizing waste and honoring the materials we use.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif italic text-footer">Unique Stories</h3>
            <p className="text-sm text-footer/60 leading-relaxed">
              No two pieces are identical. Each item carries the unique touch of the artisan's hand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

import { useEffect } from 'react';
