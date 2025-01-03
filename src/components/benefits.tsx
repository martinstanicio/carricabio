import { benefits } from "~/benefits";
import BenefitCard from "./benefit-card";

export default function Benefits() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 lg:max-w-6xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, i) => (
          <BenefitCard key={i} {...benefit} />
        ))}
      </div>
    </section>
  );
}
