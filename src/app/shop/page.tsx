import { Navigation } from '@/components/creative-harbor/navigation';
import { ProductCard } from '@/components/creative-harbor/product-card';
import { mockProducts } from '@/lib/mock-data/content';
import { ShoppingCart, Filter } from 'lucide-react';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <main className="pt-[60px]">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Merch <span className="text-gradient">Shop</span>
              </h1>
              <p className="text-muted-foreground">
                Exclusive merchandise and limited edition items
              </p>
            </div>

            {/* Cart Button */}
            <button className="flex items-center gap-2 px-6 py-3 gradient-primary text-white font-semibold rounded-md shadow-button hover:opacity-90 transition-opacity">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart (0)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
            {/* Left Sidebar - Filters */}
            <aside className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold text-foreground">FILTERS</h2>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-foreground mb-3">Category</h3>
                  <div className="space-y-2">
                    {['All Items', 'Apparel', 'Prints', 'Music', 'Books'].map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={category === 'All Items'}
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-foreground mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {[
                      'Under $20',
                      '$20 - $40',
                      '$40 - $60',
                      'Over $60',
                    ].map((range) => (
                      <label key={range} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Availability</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        In Stock
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Limited Edition
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Content - Products Grid */}
            <div>
              {/* Sort Bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <p className="text-sm text-muted-foreground">
                  Showing {mockProducts.length} products
                </p>
                <select className="px-4 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:border-ring">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
