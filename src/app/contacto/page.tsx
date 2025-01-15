import { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import SocialIcons from "@/components/social-icons";
import { Separator } from "@/components/ui/separator";

const title = "Contacto";
const description =
  "Puedes comunicarte con nosotros mediante el formulario que encontrarás a continuación. También puedes encontrarnos en Instagram, Facebook y X.";
const url = "/contacto";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url },
};

export default function Contacto() {
  return (
    <main className="mx-auto max-w-prose space-y-8 px-4 py-12 lg:max-w-6xl">
      <header className="prose">
        <h1>{title}</h1>
        <p>{description}</p>
        <SocialIcons />
        <p>
          Nos comprometemos a responder tu mensaje lo antes posible, para
          brindarte la información y el apoyo que necesites.
        </p>
      </header>
      <Separator />
      <section className="prose">
        <h2>Formulario</h2>
        <p>
          En caso de tener inconvenientes con el formulario, puedes comunicarte
          mediante los medios detallados arriba.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
