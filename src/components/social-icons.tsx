import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/lib/utils";

import { socialLinks } from "~/links";

import { Button } from "./ui/button";

export default function SocialIcons({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex justify-evenly gap-2", className)} {...props}>
      {socialLinks.map(({ label, href, icon }, i) => (
        <Button asChild variant="ghost" size="icon" key={i}>
          <a href={href} target="_blank">
            <FontAwesomeIcon icon={icon} className="w-8" />
            <span className="sr-only">{label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
