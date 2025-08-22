import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="border-b border-border/20 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-foreground">PEPUNS</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-foreground hover:text-accent transition-colors ${
              location.pathname === '/' ? 'text-accent' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/register" 
            className={`text-foreground hover:text-accent transition-colors ${
              location.pathname === '/register' ? 'text-accent' : ''
            }`}
          >
            Register
          </Link>
          <span className="text-foreground hover:text-accent transition-colors cursor-pointer">
            About
          </span>
        </nav>

        <Button variant="default" size="sm" asChild className="shadow-glow">
          <Link to="/register">Get Started</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;