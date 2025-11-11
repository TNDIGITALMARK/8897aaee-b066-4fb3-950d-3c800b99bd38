import Image from 'next/image';
import { ContentItem } from '@/lib/types';
import { Music, Book, Palette, Play } from 'lucide-react';

interface ContentCardProps {
  item: ContentItem;
  size?: 'small' | 'medium' | 'large' | 'hero';
}

export function ContentCard({ item, size = 'medium' }: ContentCardProps) {
  const getIcon = () => {
    switch (item.content_type) {
      case 'music':
        return <Music className="w-5 h-5" />;
      case 'book':
        return <Book className="w-5 h-5" />;
      case 'art':
        return <Palette className="w-5 h-5" />;
      case 'video':
        return <Play className="w-5 h-5" />;
    }
  };

  const sizeClasses = {
    small: 'aspect-[3/4]',
    medium: 'aspect-[3/4]',
    large: 'aspect-[16/9]',
    hero: 'aspect-[16/9]',
  };

  const showPlayButton = item.content_type === 'video' || item.content_type === 'music';

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border card-hover shadow">
      {/* Image */}
      <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
        <Image
          src={item.image_url}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play Button Overlay for Video/Music */}
        {showPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-button">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
        )}

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full gradient-primary text-white text-xs font-semibold shadow-button">
            FEATURED
          </div>
        )}

        {/* Type Icon */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-background/90 backdrop-blur flex items-center justify-center text-primary">
          {getIcon()}
        </div>
      </div>

      {/* Content */}
      {size !== 'small' && (
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
          )}
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
