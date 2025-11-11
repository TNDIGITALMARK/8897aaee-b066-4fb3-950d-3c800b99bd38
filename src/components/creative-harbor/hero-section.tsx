'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Welcome to Creative Harbor</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Where <span className="text-gradient">Creativity</span>
                <br />
                Meets Community
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Discover exclusive music, art, books, and merchandise from a multi-talented creator.
                Join our vibrant community and explore a world of creative excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 rounded-lg gradient-primary text-white font-semibold shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Explore Content
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-lg bg-card border border-border text-foreground font-semibold hover:bg-muted transition-all duration-300">
                Join Community
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <p className="text-2xl font-bold text-foreground">50K+</p>
                </div>
                <p className="text-sm text-muted-foreground">Total Views</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-secondary" />
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                </div>
                <p className="text-sm text-muted-foreground">Community</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <p className="text-2xl font-bold text-foreground">200+</p>
                </div>
                <p className="text-sm text-muted-foreground">Creations</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Decorative Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large Featured Card */}
              <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden bg-card border border-border shadow-lg group">
                <Image
                  src="/images/artwork/abstract-1.png"
                  alt="Featured artwork"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">Latest Release</h3>
                  <p className="text-white/80 text-sm">Explore our newest creative content</p>
                </div>
              </div>

              {/* Small Cards */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-primary shadow group cursor-pointer">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-2">🎵</div>
                  <p className="font-semibold">Music</p>
                </div>
              </div>

              <div className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border shadow group cursor-pointer">
                <Image
                  src="/images/artwork/abstract-2.png"
                  alt="Art showcase"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">Artwork</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full gradient-primary text-white text-sm font-semibold shadow-button"
            >
              🔥 Trending Now
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground font-medium">Scroll to explore</p>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-muted-foreground/50"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
