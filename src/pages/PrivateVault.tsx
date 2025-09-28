import { useState } from 'react';
import { ArrowLeft, Lock, Key, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const PrivateVault = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock authentication - replace with real backend integration
  const handleLogin = () => {
    if (password === 'treasure123') {
      setIsAuthenticated(true);
      toast({
        title: "Access Granted",
        description: "Welcome to the private vault, Captain!",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "The key you provided doesn't match our records.",
        variant: "destructive",
      });
    }
  };

  const privateTreasures = [
    {
      id: 1,
      title: "Personal Journal Entries",
      description: "Private thoughts and reflections from maritime adventures",
      category: "Personal",
      confidential: true
    },
    {
      id: 2,
      title: "Secret Trade Routes",
      description: "Confidential navigation paths and hidden ports", 
      category: "Navigation",
      confidential: true
    },
    {
      id: 3,
      title: "Family Heritage Documents",
      description: "Genealogy and family history records",
      category: "Heritage",
      confidential: true
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen ocean-waves flex items-center justify-center">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="absolute top-8 left-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => navigate('/')}
              className="bg-wood-dark border-treasure-gold/30 hover:border-treasure-gold text-treasure-gold hover:bg-treasure-gold hover:text-wood-dark"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>

          {/* Login Card */}
          <Card className="max-w-md mx-auto bg-wood-dark border-treasure-gold/30 p-8">
            <div className="text-center space-y-6">
              {/* Lock Icon */}
              <div className="mx-auto w-16 h-16 bg-treasure-gold/20 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-treasure-gold" />
              </div>

              {/* Title */}
              <div>
                <h1 className="text-2xl font-bold text-treasure-gold mb-2">Private Vault Access</h1>
                <p className="text-parchment/80">Enter the secret key to unlock the treasure</p>
              </div>

              {/* Password Form */}
              <div className="space-y-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="password" className="text-parchment">Secret Key</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your secret key..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                      className="bg-wood-medium border-treasure-gold/30 text-parchment placeholder:text-parchment/50 focus:border-treasure-gold pr-10"
                    />
                    <Key className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-treasure-gold/50" />
                  </div>
                </div>

                <Button 
                  onClick={handleLogin}
                  className="w-full bg-treasure-gold text-wood-dark hover:bg-treasure-gold-light font-semibold"
                >
                  Unlock Vault
                </Button>
              </div>

              {/* Security Notice */}
              <div className="flex items-start gap-3 p-4 bg-ocean-deep/30 rounded-lg border border-ocean-light/20">
                <AlertCircle className="w-5 h-5 text-ocean-light flex-shrink-0 mt-0.5" />
                <div className="text-left text-sm text-ocean-light">
                  <p className="font-medium mb-1">Security Notice</p>
                  <p className="text-ocean-light/80">This vault contains sensitive personal materials. Access is restricted to authorized users only.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ocean-waves">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => navigate('/')}
              className="bg-wood-dark border-treasure-gold/30 hover:border-treasure-gold text-treasure-gold hover:bg-treasure-gold hover:text-wood-dark"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-treasure-gold">Private Vault</h1>
              <p className="text-parchment/80 mt-2">Confidential collection</p>
            </div>
          </div>

          <Button 
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="bg-transparent border-ocean-light text-ocean-light hover:bg-ocean-light hover:text-wood-dark"
          >
            Lock Vault
          </Button>
        </div>

        {/* Private Treasures Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {privateTreasures.map((treasure) => (
            <Card 
              key={treasure.id}
              className="bg-wood-dark border-ocean-light/30 hover:border-ocean-light/60 transition-all duration-300 cursor-pointer treasure-chest group"
            >
              <div className="p-6 space-y-4">
                {/* Confidential Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-ocean-light" />
                    <span className="text-xs text-ocean-light font-medium tracking-wide uppercase">
                      {treasure.category}
                    </span>
                  </div>
                  <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">
                    Confidential
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

                {/* Access Level */}
                <div className="pt-4 border-t border-ocean-light/20">
                  <div className="flex items-center gap-2 text-sm text-ocean-light">
                    <div className="w-2 h-2 bg-emerald-accent rounded-full" />
                    <span>Full Access Granted</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivateVault;