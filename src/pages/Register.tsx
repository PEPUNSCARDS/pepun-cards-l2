import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, UserPlus, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    walletAddress: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Registration Successful! 🎉",
      description: "You will get access to your personal dashboard within 24 hours.",
    });

    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      country: "",
      walletAddress: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/e3178880-45a5-4a21-b02a-7d641b243495.png" 
                  alt="PEPUNS Crystal" 
                  className="w-16 h-16 mx-auto animate-pulse-glow"
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Join <span className="text-accent">PEPUNS</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Register for your PEPUNS debit card and start spending PEPU
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <UserPlus className="w-6 h-6 text-accent" />
                  Registration Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="bg-input/50 border-border/50 text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="bg-input/50 border-border/50 text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-foreground">Country</Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                      <SelectTrigger className="bg-input/50 border-border/50 text-foreground">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="es">Spain</SelectItem>
                        <SelectItem value="it">Italy</SelectItem>
                        <SelectItem value="nl">Netherlands</SelectItem>
                        <SelectItem value="se">Sweden</SelectItem>
                        <SelectItem value="no">Norway</SelectItem>
                        <SelectItem value="dk">Denmark</SelectItem>
                        <SelectItem value="fi">Finland</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="kr">South Korea</SelectItem>
                        <SelectItem value="sg">Singapore</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wallet" className="text-foreground">PEPU Wallet Address</Label>
                    <Input
                      id="wallet"
                      type="text"
                      value={formData.walletAddress}
                      onChange={(e) => handleInputChange("walletAddress", e.target.value)}
                      placeholder="0x..."
                      required
                      className="bg-input/50 border-border/50 text-foreground font-mono"
                    />
                    <p className="text-muted-foreground text-sm">
                      Enter your Pepe Unchained wallet address for PEPU top-ups
                    </p>
                  </div>

                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Processing Time</h4>
                        <p className="text-muted-foreground text-sm">
                          You will get access to your personal dashboard within 24 hours after registration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full shadow-glow" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Register for PEPUNS"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;