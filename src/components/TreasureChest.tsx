import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface TreasureChestProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
  locked?: boolean;
}

const TreasureChest = ({ title, description, image, onClick, locked = false }: TreasureChestProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="treasure-chest cursor-pointer p-8 bg-wood-dark border-treasure-gold/30 hover:border-treasure-gold/60 relative overflow-hidden group"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shimmer effect overlay */}
      <div className="shimmer-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Treasure chest image */}
        <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-treasure-gold/20 group-hover:ring-treasure-gold/60 transition-all duration-500">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-treasure-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-treasure-gold group-hover:text-treasure-gold-light transition-colors duration-300">
          {title}
        </h2>

        {/* Description */}
        <p className="text-parchment/80 group-hover:text-parchment transition-colors duration-300 leading-relaxed">
          {description}
        </p>

        {/* Status indicator */}
        {locked && (
          <div className="flex items-center justify-center gap-2 text-ocean-light">
            <div className="w-3 h-3 bg-ocean-light rounded-full animate-pulse" />
            <span className="text-sm">Password Required</span>
          </div>
        )}

        {/* Magical particles effect */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
          <div className="w-2 h-2 bg-treasure-gold rounded-full animate-ping" />
        </div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
          <div className="w-1 h-1 bg-emerald-accent rounded-full animate-ping" />
        </div>
      </div>
    </Card>
  );
};

export default TreasureChest;