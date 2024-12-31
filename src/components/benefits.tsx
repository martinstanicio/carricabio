import { benefits } from "~/benefits";
import BenefitCard from "./benefit-card";

export default function Benefits() {
  return (
    <section className="mx-auto grid max-w-4xl grid-cols-1 gap-4 px-4 py-12 sm:grid-cols-2 lg:max-w-6xl lg:grid-cols-4">
      {benefits.map((benefit, i) => (
        <BenefitCard key={i} {...benefit} />
      ))}
    </section>
  );
}
