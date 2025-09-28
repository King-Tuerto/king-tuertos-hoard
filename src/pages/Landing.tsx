import { useNavigate } from 'react-router-dom';
import TreasureChest from '@/components/TreasureChest';
import openChestImage from '@/assets/open-treasure-chest.jpg';
import lockedChestImage from '@/assets/locked-treasure-chest.jpg';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen ocean-waves relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-treasure-gold/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-emerald-accent/10 rounded-full blur-xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="title-adventure text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl">
            King Tuerto's
          </h1>
          <h1 className="title-adventure text-6xl md:text-8xl font-bold mb-8 drop-shadow-2xl">
            Treasures
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-treasure-gold via-treasure-gold-light to-treasure-gold mx-auto rounded-full" />
          <p className="text-xl text-parchment/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Welcome to the legendary collection of King Tuerto. 
            Choose your path wisely, adventurer—some treasures are guarded more fiercely than others.
          </p>
        </div>

        {/* Treasure Chests Navigation */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <TreasureChest
            title="Public Treasures"
            description="Explore the open collection of artifacts, stories, and discoveries available to all brave souls who seek knowledge and adventure."
            image={openChestImage}
            onClick={() => navigate('/public')}
            locked={false}
          />

          <TreasureChest
            title="Private Vault"
            description="Enter the secured chambers where the most precious secrets and personal treasures await those with the proper key."
            image={lockedChestImage}
            onClick={() => navigate('/private')}
            locked={true}
          />
        </div>

        {/* Footer decoration */}
        <div className="text-center mt-20 opacity-60">
          <div className="flex items-center justify-center gap-4 text-treasure-gold/60">
            <div className="w-8 h-0.5 bg-current" />
            <span className="text-sm tracking-widest">EST. IN THE GOLDEN AGE</span>
            <div className="w-8 h-0.5 bg-current" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;