import Image from "next/image";
import Link from "next/link";
import logo from "@/app/icon.svg";
import { cn } from "@/lib/utils";

export default function Brand({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      className={cn("inline-block h-8 w-auto md:h-12", className)}
      {...props}
    >
      <Image
        src={logo}
        alt="Logo de Carricabio"
        sizes="auto"
        className="h-full w-full"
      />
      <span className="sr-only">Carricabio</span>
    </Link>
  );
}
