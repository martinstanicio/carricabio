import Link from "next/link";
import { description, siteName, title } from "@/lib/metadata";
import Illustration from "./illustration";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-x-8 gap-y-16 px-4 py-16 md:grid-cols-2 md:px-8">
      <div className="max-w-md space-y-4 max-md:mx-auto max-md:text-center">
        <h1 className="text-balance text-3xl font-bold sm:text-4xl">
          {title}: <span className="text-primary">{siteName}</span>
        </h1>
        <p className="text-balance md:text-lg">{description}</p>
        <div className="flex w-full gap-4 max-sm:flex-col">
          <Button asChild size="lg" className="max-md:flex-grow">
            <Link href="/sobre-nosotros">Sobre nosotros</Link>
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
      <Illustration className="mx-auto h-auto w-full max-md:max-w-md" />
    </section>
  );
}
