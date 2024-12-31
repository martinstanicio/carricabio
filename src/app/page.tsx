import Benefits from "@/components/benefits";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />
      <Separator />
      <div className="bg-secondary text-secondary-foreground">
        <Benefits />
      </div>
    </main>
  );
}
