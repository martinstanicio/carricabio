import Link from "next/link";
import { faq } from "~/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

export default function FAQ() {
  return (
    <section className="mx-auto max-w-2xl space-y-8 px-4 py-12">
      <h2 className="text-center text-3xl font-bold">Preguntas frecuentes</h2>
      <Accordion
        type="single"
        collapsible
        defaultValue={faq[0].question}
        className="w-full space-y-4"
      >
        {faq.map(({ question, answer }, i) => (
          <AccordionItem
            value={question}
            key={i}
            className="overflow-hidden rounded-md border"
          >
            <AccordionTrigger className="w-full bg-secondary p-4 font-bold text-secondary-foreground transition-all hover:brightness-95 focus:brightness-95 data-[state='open']:bg-primary data-[state='open']:text-primary-foreground">
              {question}
            </AccordionTrigger>
            <AccordionContent className="bg-card p-4 text-card-foreground">
              <p>{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-center">
        ¿Aún tenés dudas?{" "}
        <Button variant="link" asChild>
          <Link href="/contacto">Contáctanos</Link>
        </Button>
      </p>
    </section>
  );
}
