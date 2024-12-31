import { faq } from "~/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQAccordion() {
  return (
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
          <AccordionContent className="p-4">
            <p>{answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
