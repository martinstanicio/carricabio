import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type Benefit = {
  title: string;
  description: string;
  icon: IconDefinition;
};

export type Highlight = {
  number: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Review = {
  avatar: string;
  name: string;
  comment: string;
};

export type InvestmentStrategy = {
  id: string;
  title: string;
  icon: IconDefinition;
  description: React.ReactNode;
  content: React.ReactNode;
};
