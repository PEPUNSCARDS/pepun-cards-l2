import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Globe } from "lucide-react";

const Fees = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border/20">
            <DollarSign className="w-8 h-8 text-foreground mx-auto mb-2" />
            <h3 className="text-xl font-bold text-foreground">5% Top-up Fee</h3>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border/20">
            <Globe className="w-8 h-8 text-foreground mx-auto mb-2" />
            <h3 className="text-xl font-bold text-foreground">2% Non-USD Transactions</h3>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border/20">
            <h3 className="text-lg font-bold text-foreground">No Annual Fees</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;