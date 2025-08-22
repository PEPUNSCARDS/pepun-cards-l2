import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Globe } from "lucide-react";

const Fees = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transparent <span className="text-foreground">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, clear fees with no hidden charges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-foreground/50 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <DollarSign className="w-16 h-16 text-foreground mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">5%</h3>
              <h4 className="text-xl font-semibold text-foreground mb-4">Top-up Fee</h4>
              <p className="text-muted-foreground text-lg">
                Simple 5% fee when loading your PEPUNS card with PEPU tokens
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-foreground/50 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Globe className="w-16 h-16 text-foreground mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">2%</h3>
              <h4 className="text-xl font-semibold text-foreground mb-4">Non-USD Transactions</h4>
              <p className="text-muted-foreground text-lg">
                Only 2% fee on transactions in currencies other than USD
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-foreground/10 border border-foreground/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-foreground text-lg font-medium">
              <span className="text-foreground font-bold">No Annual Fees</span> • 
              <span className="text-foreground font-bold"> No Monthly Fees</span> • 
              <span className="text-foreground font-bold"> No Hidden Charges</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;