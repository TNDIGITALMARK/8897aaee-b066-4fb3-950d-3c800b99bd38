'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Stay Updated</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  Never Miss a <span className="text-gradient">Release</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Subscribe to our newsletter and be the first to know about new music, art drops, exclusive content, and special offers.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="pl-12 pr-4 py-4 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all w-full"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="group px-6 py-4 rounded-lg gradient-primary text-white font-semibold shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      Subscribe
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Join 10,000+ creators and fans. Unsubscribe anytime.
                  </p>
                </form>
              </div>

              {/* Right Column - Visual */}
              <div className="hidden lg:flex gradient-primary p-12 items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="relative z-10 text-white text-center">
                  <div className="text-6xl mb-6">📬</div>
                  <p className="text-2xl font-bold mb-2">10K+ Subscribers</p>
                  <p className="text-white/80">Join our growing community</p>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-8 right-8 bg-white/20 backdrop-blur rounded-lg p-3"
                  >
                    <span className="text-2xl">🎵</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute bottom-8 left-8 bg-white/20 backdrop-blur rounded-lg p-3"
                  >
                    <span className="text-2xl">🎨</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <div className="space-y-2">
              <div className="text-3xl">⚡</div>
              <p className="font-semibold text-foreground">Instant Notifications</p>
              <p className="text-sm text-muted-foreground">Get alerts for new releases</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🎁</div>
              <p className="font-semibold text-foreground">Exclusive Content</p>
              <p className="text-sm text-muted-foreground">Access subscriber-only perks</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">💎</div>
              <p className="font-semibold text-foreground">Early Access</p>
              <p className="text-sm text-muted-foreground">Be first in line for drops</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
