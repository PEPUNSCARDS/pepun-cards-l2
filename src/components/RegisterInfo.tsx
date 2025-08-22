import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, UserCheck, ArrowRight } from "lucide-react";

const RegisterInfo = () => {
  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the PEPUNS ecosystem in just a few simple steps
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border/30">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 rounded-full p-3">
                    <UserCheck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Step 1: Register
                    </h3>
                    <p className="text-muted-foreground">
                      Go to the /register page to enter your details and PEPU wallet address
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 rounded-full p-3">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Step 2: Wait for Access
                    </h3>
                    <p className="text-muted-foreground">
                      You will get access to your personal dashboard within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-pepuns-gradient rounded-2xl p-8 shadow-pepuns">
                  <img 
                    src="/lovable-uploads/e3178880-45a5-4a21-b02a-7d641b243495.png" 
                    alt="PEPUNS Crystal" 
                    className="w-20 h-20 mx-auto mb-6 animate-pulse-glow"
                  />
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    Join PEPUNS Today
                  </h4>
                  <Button variant="default" size="lg" asChild className="shadow-glow">
                    <Link to="/register" className="flex items-center gap-2">
                      Register Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegisterInfo;