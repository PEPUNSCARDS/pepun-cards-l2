import React from "react";
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
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Why Choose PEPUNS?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border/20 hover:border-foreground/30 transition-all duration-300">
              <div className="mb-2">
                {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-foreground mx-auto" })}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-xs">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;