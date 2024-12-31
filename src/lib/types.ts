import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type Benefit = {
  title: string;
  description: string;
  icon: IconDefinition;
};

export type FAQ = {
  question: string;
  answer: string;
};
