import { ArrowLeft, Eye, Calendar, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PublicTreasures = () => {
  const navigate = useNavigate();

  const treasures = [
    {
      id: 1,
      title: "Ancient Maritime Maps",
      description: "Collection of historical navigation charts from the Golden Age of Piracy",
      category: "Maps & Charts",
      date: "2024-01-15",
      views: 1247
    },
    {
      id: 2,
      title: "Legendary Ship Logs", 
      description: "Captain's journals documenting voyages across the seven seas",
      category: "Historical Documents",
      date: "2024-01-12",
      views: 892
    },
    {
      id: 3,
      title: "Treasure Island Artifacts",
      description: "Archaeological findings from various Caribbean expeditions",
      category: "Artifacts",
      date: "2024-01-10",
      views: 1456
    },
    {
      id: 4,
      title: "Nautical Instruments",
      description: "Compass, sextant, and navigation tools of legendary captains",
      category: "Tools & Equipment", 
      date: "2024-01-08",
      views: 734
    }
  ];

  return (
    <div className="min-h-screen ocean-waves">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => navigate('/')}
            className="bg-wood-dark border-treasure-gold/30 hover:border-treasure-gold text-treasure-gold hover:bg-treasure-gold hover:text-wood-dark"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-treasure-gold">Public Treasures</h1>
            <p className="text-parchment/80 mt-2">Open collection for all adventurers</p>
          </div>
        </div>

        {/* Treasures Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treasures.map((treasure) => (
            <Card 
              key={treasure.id}
              className="bg-wood-dark border-treasure-gold/30 hover:border-treasure-gold/60 transition-all duration-300 cursor-pointer treasure-chest group"
            >
              <div className="p-6 space-y-4">
                {/* Category Tag */}
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-emerald-accent" />
                  <span className="text-xs text-emerald-accent font-medium tracking-wide uppercase">
                    {treasure.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-treasure-gold group-hover:text-treasure-gold-light transition-colors">
                  {treasure.title}
                </h3>

                {/* Description */}
                <p className="text-parchment/80 leading-relaxed">
                  {treasure.description}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between text-sm text-parchment/60 pt-4 border-t border-treasure-gold/20">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{treasure.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-3 h-3" />
                    <span>{treasure.views.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="bg-transparent border-treasure-gold text-treasure-gold hover:bg-treasure-gold hover:text-wood-dark px-8 py-3"
          >
            Load More Treasures
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PublicTreasures;