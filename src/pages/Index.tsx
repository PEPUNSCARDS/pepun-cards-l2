import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Fees from "@/components/Fees";
import RegisterInfo from "@/components/RegisterInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Fees />
        <RegisterInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
