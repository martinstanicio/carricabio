import { benefits } from "~/benefits";
import BenefitCard from "./benefit-card";

export default function Benefits() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {benefits.map((benefit, i) => (
        <BenefitCard key={i} {...benefit} />
      ))}
    </div>
  );
}
