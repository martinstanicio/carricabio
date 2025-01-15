import Link from "next/link";
import TeamSpirit from "@/illustrations/team-spirit";
import { Button } from "./ui/button";

export default function WhyChooseUs() {
  return (
    <section className="mx-auto grid max-w-4xl items-center gap-8 px-4 py-12 md:grid-cols-2 lg:max-w-6xl">
      <TeamSpirit className="h-auto w-full md:order-last" />
      <div className="prose">
        <h2 className="text-balance text-3xl font-bold">
          ¿Por qué nos eligen los inversores?
        </h2>
        <p className="text-justify">
          Elegir <span className="font-bold text-primary">Carricabio</span>{" "}
          significa optar por un modelo <strong>transparente</strong>, eficiente
          y con ventajas impositivas que{" "}
          <strong>maximizan tu rentabilidad</strong>.
        </p>
        <p className="text-justify">
          Con comisiones competitivas y un equipo{" "}
          <strong>comprometido con tu éxito</strong>, te brindamos la{" "}
          <strong>confianza</strong> y el respaldo necesarios para hacer{" "}
          <strong>crecer tu patrimonio</strong> de forma inteligente.
        </p>
        <div className="not-prose flex w-full gap-4 max-sm:flex-col">
          <Button asChild className="max-md:flex-grow">
            <Link href="/sobre-nosotros">Sobre nosotros</Link>
          </Button>
          <Button asChild variant="secondary" className="max-md:flex-grow">
            <Link href="/contacto">Contacto</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
