import Benefits from "@/components/benefits";
import FAQAccordion from "@/components/faq-accordion";
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

      <Separator />

      <section className="mx-auto max-w-2xl space-y-8 px-4 py-12">
        <h2 className="text-center text-3xl font-bold">Preguntas frecuentes</h2>
        <FAQAccordion />
      </section>
    </main>
  );
}
