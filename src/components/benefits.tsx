import {
  faChartSimple,
  faCircleCheck,
  faShield,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import BenefitCard from "./benefit-card";

export default function Benefits() {
  return (
    <section className="mx-auto grid max-w-4xl grid-cols-1 gap-4 px-4 py-12 sm:grid-cols-2 lg:max-w-6xl lg:grid-cols-4">
      <BenefitCard
        title="Transparencia"
        description="Información clara sobre costos y rendimientos."
        icon={faCircleCheck}
      />
      <BenefitCard
        title="Seguridad"
        description="Protección avanzada para tus datos y operaciones."
        icon={faShield}
      />
      <BenefitCard
        title="Opciones"
        description="Inversiones en oro, crypto y acciones."
        icon={faChartSimple}
      />
      <BenefitCard
        title="Soporte"
        description="Expertos disponibles para resolver tus dudas."
        icon={faUserGear}
      />
    </section>
  );
}
