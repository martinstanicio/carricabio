import Link from "next/link";
import GetStartedIllustration from "./get-started-illustration";
import { Button } from "./ui/button";

export default function GetStarted() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-x-8 gap-y-16 px-4 py-16 md:grid-cols-2 md:px-8">
      <GetStartedIllustration className="mx-auto h-auto w-3/4 max-md:max-w-md" />
      <div className="max-w-md space-y-8 max-md:mx-auto max-md:text-center">
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">
          ¿Listo para comenzar?
        </h2>
        <p className="text-balance md:text-lg">
          Empieza a construir tu futuro financiero <b>hoy mismo</b>. Regístrate
          en <strong>Carricabio</strong> y accede <b>las mejores inversiones</b>{" "}
          para tu perfil.
        </p>
        <Button asChild size="lg" variant="secondary" className="max-md:w-full">
          <Link href="#">Inicia tu inversión</Link>
        </Button>
      </div>
    </section>
  );
}
