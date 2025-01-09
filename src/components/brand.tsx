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
      className={cn("flex items-center gap-4", className)}
      {...props}
    >
      <Image src={logo} alt="" sizes="auto" className="h-8 w-auto md:h-12" />
      <span className="font-script leading-tight md:text-lg md:leading-snug">
        Carricabio
        <br />
        Inversiones
      </span>
    </Link>
  );
}
