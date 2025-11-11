import { Navigation } from '@/components/creative-harbor/navigation';
import { ContentCard } from '@/components/creative-harbor/content-card';
import { ProductCard } from '@/components/creative-harbor/product-card';
import { ChatWidget } from '@/components/creative-harbor/chat-widget';
import { HeroSection } from '@/components/creative-harbor/hero-section';
import { FeaturesSection } from '@/components/creative-harbor/features-section';
import { TestimonialsSection } from '@/components/creative-harbor/testimonials-section';
import { NewsletterSection } from '@/components/creative-harbor/newsletter-section';
import { Footer } from '@/components/creative-harbor/footer';
import { mockContentItems, mockBlogPosts, mockProducts, mockChatMessages } from '@/lib/mock-data/content';
import { Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const featuredContent = mockContentItems.filter((item) => item.featured);
  const artworkItems = mockContentItems.filter((item) => item.content_type === 'art');
  const featuredProducts = mockProducts.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main>
        {/* Content Grid Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12">
              {/* Left Column - Main Content */}
              <div className="space-y-16 md:space-y-20">
                {/* Featured Content Grid */}
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Main Featured Video */}
                    <div className="md:col-span-1 relative group">
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-lg">
                        <Image
                          src="/images/artwork/abstract-1.png"
                          alt="Featured content"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-button cursor-pointer hover:scale-110 transition-transform">
                            <Play className="w-10 h-10 text-white fill-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h2 className="text-2xl font-bold text-white mb-2">Latest Release</h2>
                          <p className="text-white/80 text-sm">Neon Dreams - Full Album</p>
                        </div>
                      </div>
                    </div>

                    {/* Side Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {featuredContent.slice(1, 3).map((item) => (
                        <ContentCard key={item.id} item={item} size="small" />
                      ))}
                      {/* Text Card */}
                      <div className="col-span-2 bg-gradient-primary rounded-xl p-6 flex flex-col justify-between text-white shadow-lg">
                        <div>
                          <h3 className="font-bold text-lg mb-2 tracking-wide">THE ART OF DISCOVERY</h3>
                          <p className="text-sm opacity-90">Explore the creative journey</p>
                        </div>
                        <button className="mt-4 px-5 py-2.5 bg-white/20 backdrop-blur rounded-lg text-sm font-semibold hover:bg-white/30 transition-all hover:scale-105 w-fit">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Artwork Grid */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Artwork Gallery</h2>
                    <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors group">
                      View All
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {artworkItems.map((item) => (
                      <ContentCard key={item.id} item={item} size="small" />
                    ))}
                  </div>
                </div>

                {/* Latest Content */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Latest Updates</h2>
                    <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors group">
                      View All
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockBlogPosts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-card border border-border rounded-xl p-6 card-hover shadow cursor-pointer"
                      >
                        <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 shadow">
                          <span className="text-white text-2xl">📝</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-3 line-clamp-2 text-lg">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{post.view_count} views</span>
                          <span>•</span>
                          <span>{new Date(post.published_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Merchandise */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Featured Merch</h2>
                    <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors group">
                      View Shop
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Chat Widget */}
              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <ChatWidget messages={mockChatMessages} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
