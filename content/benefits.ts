import {
  faChartSimple,
  faCircleCheck,
  faShield,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { Benefit } from "@/lib/types";

export const benefits: Benefit[] = [
  {
    title: "Transparencia",
    description: "Información clara sobre costos y rendimientos.",
    icon: faCircleCheck,
  },
  {
    title: "Seguridad",
    description: "Protección avanzada para tus datos y operaciones.",
    icon: faShield,
  },
  {
    title: "Opciones",
    description: "Inversiones en oro, crypto y acciones.",
    icon: faChartSimple,
  },
  {
    title: "Soporte",
    description: "Expertos disponibles para resolver tus dudas.",
    icon: faUserGear,
  },
];
