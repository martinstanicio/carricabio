import Benefits from "@/components/benefits";
import FAQ from "@/components/faq";
import GetStarted from "@/components/get-started";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import InvestmentStrategies from "@/components/investment-strategies";
import QuickContact from "@/components/quick-contact";
import Reviews from "@/components/reviews";
import { Separator } from "@/components/ui/separator";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />

      <Separator />

      <div className="bg-secondary text-secondary-foreground">
        <Benefits />
      </div>

      <Separator />

      <WhyChooseUs />

      <Separator />

      <div className="bg-secondary text-secondary-foreground">
        <Highlights />
      </div>

      <Separator />

      <InvestmentStrategies />

      <Separator />

      <div className="bg-secondary text-secondary-foreground">
        <Reviews />
      </div>

      <Separator />

      <FAQ />

      <Separator />

      <div className="bg-primary text-primary-foreground">
        <GetStarted />
      </div>

      <Separator />

      <QuickContact />
    </main>
  );
}
