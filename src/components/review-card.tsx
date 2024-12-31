import { Review } from "@/lib/types";
import { getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export type Props = React.HTMLAttributes<HTMLDivElement> & Review;

export default function ReviewCard({ avatar, name, comment, ...props }: Props) {
  return (
    <Card {...props}>
      <CardHeader className="space-y-4">
        <CardTitle className="flex flex-col items-center gap-4 text-center">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>

          <span>{name}</span>
        </CardTitle>
        <CardDescription className="mx-auto max-w-sm text-balance text-center">
          {comment}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
