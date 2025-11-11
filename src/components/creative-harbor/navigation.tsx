'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Music, BookOpen, Palette, MessageSquare, ShoppingBag, X, Menu } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-base md:text-lg">
              CREATIVE <span className="text-gradient hidden sm:inline">HARBOR</span>
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              <Music className="w-4 h-4" />
              <span>Music</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Books</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              <Palette className="w-4 h-4" />
              <span>Art</span>
            </Link>
            <Link
              href="/community"
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Community</span>
            </Link>
            <Link
              href="/shop"
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop</span>
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <button className="hidden md:block px-4 lg:px-6 py-2.5 text-sm font-semibold gradient-primary text-white rounded-md shadow-button hover:opacity-90 transition-opacity">
            Subscribe
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] z-40 bg-background/98 backdrop-blur md:hidden">
          <div className="container mx-auto px-4 py-8 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-card transition-colors"
            >
              <Music className="w-5 h-5 text-primary" />
              <span className="font-medium">Music</span>
            </Link>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-card transition-colors"
            >
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-medium">Books</span>
            </Link>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-card transition-colors"
            >
              <Palette className="w-5 h-5 text-primary" />
              <span className="font-medium">Art Gallery</span>
            </Link>
            <Link
              href="/community"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-card transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="font-medium">Community</span>
            </Link>
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-card transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-primary" />
              <span className="font-medium">Merch Shop</span>
            </Link>
            <button className="w-full py-3 gradient-primary text-white font-semibold rounded-md shadow-button">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </>
  );
}
