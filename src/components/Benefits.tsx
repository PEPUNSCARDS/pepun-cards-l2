import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Shield, Zap, CreditCard } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-foreground" />,
      title: "Powered by PEPU",
      description: "Top up with Pepe Unchained Token and enjoy seamless L2 transactions"
    },
    {
      icon: <Shield className="w-12 h-12 text-foreground" />,
      title: "No Annual Fees",
      description: "No hidden charges. Keep more of your crypto with transparent pricing"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-foreground" />,
      title: "Apple Pay & Google Pay Compatible",
      description: "Use PEPUNS anywhere IRL with contactless payment support"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-foreground" />,
      title: "Works Worldwide",
      description: "Accepted globally at retailers wherever Visa is accepted"
    }
  ];

  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-foreground">PEPUNS</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of crypto spending with seamless integration and global acceptance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-foreground/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 group-hover:animate-float">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;