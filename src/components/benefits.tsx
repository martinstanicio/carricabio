import { benefits } from "~/benefits";
import BenefitCard from "./benefit-card";

export default function Benefits() {
  return benefits.map((benefit, i) => <BenefitCard key={i} {...benefit} />);
}
