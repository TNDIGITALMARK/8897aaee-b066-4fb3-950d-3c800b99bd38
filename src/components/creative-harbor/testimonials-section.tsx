'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Music Enthusiast',
    avatar: '👩',
    rating: 5,
    content: 'The music here is absolutely incredible! Every release is a masterpiece. The community is super engaged and supportive.',
  },
  {
    name: 'James Chen',
    role: 'Art Collector',
    avatar: '👨',
    rating: 5,
    content: 'I\'ve purchased multiple art pieces and the quality is outstanding. The creative vision is truly unique and inspiring.',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Book Reader',
    avatar: '👩',
    rating: 5,
    content: 'The written content is captivating and thought-provoking. I can\'t wait for the next release!',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Loved by <span className="text-gradient">Creators & Fans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied community members who have discovered their new favorite content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-8 h-full card-hover shadow relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-2xl shadow">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 pt-12 border-t border-border"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">50K+</p>
            <p className="text-sm text-muted-foreground">Happy Fans</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">200+</p>
            <p className="text-sm text-muted-foreground">Content Pieces</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">24/7</p>
            <p className="text-sm text-muted-foreground">Community Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
