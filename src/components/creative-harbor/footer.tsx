'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Facebook, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  content: [
    { label: 'Music', href: '/music' },
    { label: 'Artwork', href: '/art' },
    { label: 'Books', href: '/books' },
    { label: 'Blog', href: '/blog' },
  ],
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Merchandise', href: '/shop?category=merch' },
    { label: 'Digital Art', href: '/shop?category=art' },
    { label: 'Limited Editions', href: '/shop?category=limited' },
  ],
  community: [
    { label: 'About', href: '/about' },
    { label: 'Community', href: '/community' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Shipping Policy', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-500' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-3">Creative Harbor</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your destination for music, art, literature, and exclusive merchandise. Join our creative community today.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@creativeharbor.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Content Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Content</h4>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Creative Harbor. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/sitemap"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/accessibility"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
