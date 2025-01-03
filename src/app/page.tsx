import Benefits from "@/components/benefits";
import FAQ from "@/components/faq";
import GetStarted from "@/components/get-started";
import Hero from "@/components/hero";
import QuickContact from "@/components/quick-contact";
import Reviews from "@/components/reviews";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />

      <Separator />

      <div className="bg-secondary text-secondary-foreground">
        <Benefits />
      </div>

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
