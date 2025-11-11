'use client';

import { motion } from 'framer-motion';
import { Music, Palette, BookOpen, ShoppingBag, MessageCircle, Users } from 'lucide-react';

const features = [
  {
    icon: Music,
    title: 'Original Music',
    description: 'Stream exclusive tracks, albums, and behind-the-scenes content from our latest releases.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Palette,
    title: 'Digital Art',
    description: 'Discover stunning visual artwork, illustrations, and creative designs.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: BookOpen,
    title: 'Published Works',
    description: 'Read engaging stories, blogs, and published books written by our creator.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: ShoppingBag,
    title: 'Exclusive Merch',
    description: 'Shop limited edition merchandise, prints, and custom-designed products.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: MessageCircle,
    title: 'Community Chat',
    description: 'Connect with fellow fans, share feedback, and engage in real-time discussions.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: Users,
    title: 'Creator Access',
    description: 'Get closer to the creative process with exclusive updates and direct interactions.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Everything You Need in <span className="text-gradient">One Place</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive platform bringing together music, art, literature, and community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-8 h-full card-hover shadow">
                <div className={`w-14 h-14 rounded-lg ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
