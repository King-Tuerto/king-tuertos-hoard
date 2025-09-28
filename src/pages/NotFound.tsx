import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen ocean-waves flex items-center justify-center">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-6xl font-bold text-treasure-gold mb-4">404</h1>
          <h2 className="text-2xl text-parchment mb-4">Treasure Not Found</h2>
          <p className="text-xl text-parchment/80 max-w-md mx-auto leading-relaxed">
            The treasure you seek has been lost to the depths of the ocean. 
            Perhaps it was never here to begin with.
          </p>
        </div>
        
        <Button 
          onClick={() => navigate('/')}
          className="bg-treasure-gold text-wood-dark hover:bg-treasure-gold-light font-semibold px-8 py-3"
        >
          Return to Treasure Map
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
