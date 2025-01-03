import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageNotFound from "@/illustrations/page-not-found";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 text-center">
      <PageNotFound className="h-auto w-full max-w-sm" />
      <div className="space-y-8">
        <h1 className="text-balance text-3xl font-bold">
          Esta página no existe
        </h1>
        <p className="text-balance">
          Error 404: La URL a la que intentas acceder no existe.
        </p>
        <div className="flex w-full justify-center gap-4 max-sm:flex-col">
          <Button asChild size="lg" className="max-md:flex-grow">
            <Link href="/">Inicio</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="max-md:flex-grow"
          >
            <Link href="/contacto">Contacto</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
