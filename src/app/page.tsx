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
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
            {/* Left Column - Main Content */}
            <div className="space-y-12">
              {/* Hero Section */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Main Featured Video */}
                  <div className="md:col-span-1 relative group">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border shadow">
                      <Image
                        src="/images/artwork/abstract-1.png"
                        alt="Featured content"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
                    <div className="bg-gradient-primary rounded-xl p-6 flex flex-col justify-between text-white shadow">
                      <div>
                        <h3 className="font-bold text-lg mb-2">THE ART OF DISCOVERY</h3>
                        <p className="text-sm opacity-90">Explore the creative journey</p>
                      </div>
                      <button className="mt-4 px-4 py-2 bg-white/20 backdrop-blur rounded-md text-sm font-semibold hover:bg-white/30 transition-colors">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Artwork Grid */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">ARTWORK</h2>
                  <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors">
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {artworkItems.map((item) => (
                    <ContentCard key={item.id} item={item} size="small" />
                  ))}
                </div>
              </section>

              {/* Latest Content */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">LATEST CONTENT</h2>
                  <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors">
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mockBlogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-card border border-border rounded-lg p-4 card-hover shadow cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                        <span className="text-white text-2xl">📝</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
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
              </section>

              {/* Featured Merchandise */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">FEATURED MERCHANDISE</h2>
                  <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors">
                    View Shop
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Chat Widget */}
            <div className="hidden lg:block sticky top-[76px] h-fit">
              <ChatWidget messages={mockChatMessages} />
            </div>
          </div>
        </div>

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
