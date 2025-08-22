import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CreditCard, Sparkles, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-pepuns-gradient opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
            Debit Cards
          </span>
          <br />
          <span className="text-foreground">on Pepe Unchained L2</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Top up with <span className="text-foreground font-semibold">PEPU</span>, the Pepe Unchained Token
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="default" size="lg" asChild className="shadow-glow">
            <Link to="/register" className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Register Now
            </Link>
          </Button>
          <Button variant="secondary" size="lg" className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/30 hover:border-foreground/50 transition-all duration-300">
            <CreditCard className="w-8 h-8 text-foreground mb-3 mx-auto" />
            <h3 className="font-semibold text-foreground mb-2">PEPU Powered</h3>
            <p className="text-muted-foreground text-sm">Direct integration with Pepe Unchained ecosystem</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/30 hover:border-foreground/50 transition-all duration-300">
            <Sparkles className="w-8 h-8 text-foreground mb-3 mx-auto" />
            <h3 className="font-semibold text-foreground mb-2">No Annual Fees</h3>
            <p className="text-muted-foreground text-sm">Keep more of your crypto with transparent pricing</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/30 hover:border-foreground/50 transition-all duration-300">
            <Globe className="w-8 h-8 text-foreground mb-3 mx-auto" />
            <h3 className="font-semibold text-foreground mb-2">Global Access</h3>
            <p className="text-muted-foreground text-sm">Works worldwide at millions of retailers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;