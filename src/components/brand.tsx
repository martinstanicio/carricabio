import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "./logo";

export default function Brand({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-4", className)}
      {...props}
    >
      <Logo className="h-8 w-auto fill-primary md:h-12" />
      <span className="font-script leading-tight text-primary md:text-lg md:leading-snug">
        Carricabio
        <br />
        Inversiones
      </span>
    </Link>
  );
}
