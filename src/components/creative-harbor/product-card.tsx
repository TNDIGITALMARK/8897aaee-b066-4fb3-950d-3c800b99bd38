import Image from 'next/image';
import { Product } from '@/lib/types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border card-hover shadow">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Quick Add Button */}
        <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full px-4 py-2.5 gradient-primary text-white font-semibold rounded-md shadow-button flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>

        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-secondary text-white text-xs font-semibold shadow-button">
            BESTSELLER
          </div>
        )}

        {/* Low Stock Badge */}
        {product.stock_quantity < 10 && product.stock_quantity > 0 && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-destructive text-white text-xs font-semibold">
            Only {product.stock_quantity} left
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground line-clamp-1">{product.name}</h3>
          <span className="text-lg font-bold text-primary whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
            {product.category}
          </span>
          {product.stock_quantity === 0 && (
            <span className="text-xs px-2 py-1 rounded bg-destructive/20 text-destructive font-semibold">
              Sold Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
