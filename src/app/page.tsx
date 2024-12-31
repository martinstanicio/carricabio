import Link from "next/link";
import Benefits from "@/components/benefits";
import FAQAccordion from "@/components/faq-accordion";
import Hero from "@/components/hero";
import Reviews from "@/components/reviews";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />

      <Separator />

      <div className="bg-secondary text-secondary-foreground">
        <section className="mx-auto max-w-4xl px-4 py-12 lg:max-w-6xl">
          <Benefits />
        </section>
      </div>

      <Separator />

      <div className="bg-secondary text-secondary-foreground">
        <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 lg:max-w-6xl">
          <h2 className="text-center text-3xl font-bold">Reseñas</h2>
          <Reviews />
        </section>
      </div>

      <Separator />

      <section className="mx-auto max-w-2xl space-y-8 px-4 py-12">
        <h2 className="text-center text-3xl font-bold">Preguntas frecuentes</h2>
        <FAQAccordion />
        <p className="text-center">
          ¿Aún tenés dudas?{" "}
          <Button variant="link" asChild>
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </p>
      </section>
    </main>
  );
}
