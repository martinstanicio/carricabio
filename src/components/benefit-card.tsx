import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";
import { Benefit } from "@/lib/types";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export type Props = HTMLAttributes<HTMLDivElement> & Benefit;

export default function BenefitCard({
  title,
  description,
  icon,
  ...props
}: Props) {
  return (
    <Card {...props}>
      <CardHeader className="space-y-4">
        <CardTitle className="flex flex-col items-center gap-4 text-center">
          <FontAwesomeIcon icon={icon} className="text-xl text-primary" />
          <span>{title}</span>
        </CardTitle>
        <CardDescription className="text-balance text-center">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
