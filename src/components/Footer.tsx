import React from 'react';
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif italic tracking-wider">My Whimsy Tales</h2>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              A boutique atelier dedicated to the art of slow living and handcrafted treasures. 
              Every stitch and fold tells a story.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-cta transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-cta transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-cta transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] mb-8 opacity-40">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/leather" className="hover:text-cta transition-colors">Leather Journals</Link></li>
              <li><Link to="/crochet" className="hover:text-cta transition-colors">Crochet Shawls</Link></li>
              <li><Link to="/shop" className="hover:text-cta transition-colors">All Treasures</Link></li>
              <li><a href="#" className="hover:text-cta transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] mb-8 opacity-40">Atelier</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-cta transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-cta transition-colors">The Process</a></li>
              <li><a href="#" className="hover:text-cta transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-cta transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] mb-8 opacity-40">Newsletter</h4>
            <p className="text-sm text-background/60 mb-6">Join our mailing list for whimsical updates and exclusive early access.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-background/10 border border-background/20 rounded-full py-3 pl-6 pr-12 text-sm focus:outline-none focus:border-cta transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-cta p-2 rounded-full hover:bg-cta/90 transition-colors">
                <Mail size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            © 2026 My Whimsy Tales. Handcrafted with love.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest opacity-40">
            <a href="#" className="hover:text-cta transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cta transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cta transition-colors">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
