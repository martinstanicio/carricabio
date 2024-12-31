import Benefits from "@/components/benefits";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />

      <Separator />

      <div className="bg-secondary text-secondary-foreground">
        <section className="mx-auto grid max-w-4xl grid-cols-1 gap-4 px-4 py-12 sm:grid-cols-2 lg:max-w-6xl lg:grid-cols-4">
          <Benefits />
        </section>
      </div>
    </main>
  );
}
