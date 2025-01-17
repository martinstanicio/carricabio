import { HTMLAttributes } from "react";
import { Highlight } from "@/lib/types";
import { Card, CardContent } from "./ui/card";

export type Props = HTMLAttributes<HTMLDivElement> & Highlight;

export default function HighlightCard({
  number,
  description,
  ...props
}: Props) {
  return (
    <Card {...props}>
      <CardContent className="flex h-full flex-col justify-between space-y-4 p-6 max-sm:items-center max-sm:text-center">
        <span className="text-7xl font-bold text-primary">{number}</span>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
