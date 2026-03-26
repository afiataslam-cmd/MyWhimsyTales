import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-footer/40 backdrop-blur-sm z-[80]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-background rounded-3xl shadow-2xl z-[90] overflow-hidden"
          >
            <div className="relative p-8">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-card/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif italic text-footer mb-2">
                  {isLogin ? 'Welcome Back' : 'Join the Tale'}
                </h2>
                <p className="text-sm text-footer/60">
                  {isLogin ? 'Enter your details to access your account' : 'Start your whimsical journey with us'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-footer/60 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
                      <input 
                        type="text" 
                        placeholder="Elias Thorne"
                        className="w-full bg-card/10 border border-accent/20 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-cta transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-footer/60 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elias@whimsytales.com"
                      required
                      className="w-full bg-card/10 border border-accent/20 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-cta transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-footer/60 ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      required
                      className="w-full bg-card/10 border border-accent/20 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-cta transition-colors"
                    />
                  </div>
                </div>

                {isLogin && (
                  <div className="text-right">
                    <a href="#" className="text-[10px] uppercase tracking-widest text-cta hover:underline">Forgot Password?</a>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cta text-white py-4 rounded-full text-sm uppercase tracking-widest hover:bg-cta/90 transition-all shadow-lg shadow-cta/20 disabled:opacity-50"
                >
                  {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-footer/60">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button 
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-cta font-medium hover:underline"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
