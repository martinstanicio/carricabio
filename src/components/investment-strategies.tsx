import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import { investmentStrategies } from "~/investment-strategies";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function InvestmentStrategies() {
  const numberOfStrats = investmentStrategies.length;
  const defaultStrat = investmentStrategies[Math.floor(numberOfStrats / 2)];

  return (
    <section className="mx-auto box-content max-w-2xl space-y-8 px-4 py-12">
      <h2 className="text-center text-3xl font-bold">
        Descubrí la mejor inversión para vos
      </h2>
      <Tabs defaultValue={defaultStrat.id}>
        <TabsList
          className={cn(
            `grid-rows-${numberOfStrats}`,
            "md:grid-rows-1",
            `md:grid-cols-${numberOfStrats}`,
          )}
        >
          {investmentStrategies.map(({ id, title, icon }, i) => (
            <TabsTrigger value={id} key={i} className="flex flex-col gap-1">
              <FontAwesomeIcon icon={icon} className="size-4" />
              <span>{title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {investmentStrategies.map(({ id, title, description, content }, i) => (
          <TabsContent value={id} key={i}>
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-ul:list-[square]">
                {content}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
