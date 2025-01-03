import Link from "next/link";
import ActiveSupport from "@/illustrations/active-support";
import { Button } from "./ui/button";

export default function QuickContact() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-x-8 gap-y-16 px-4 py-16 md:grid-cols-2 md:px-8">
      <div className="max-w-md space-y-8 max-md:mx-auto max-md:text-center">
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">
          Estamos aquí para ayudarte
        </h2>
        <p className="text-balance md:text-lg">
          ¿Tienes preguntas o necesitas <b>más información</b>? Nuestro equipo
          está disponible para <b>resolver tus dudas</b> y ayudarte a{" "}
          <b>alcanzar tus metas</b> de inversión.
        </p>
        <Button asChild className="max-md:w-full">
          <Link href="/contacto">Contáctanos ahora</Link>
        </Button>
      </div>
      <ActiveSupport className="mx-auto h-auto w-full max-md:max-w-md" />
    </section>
  );
}
