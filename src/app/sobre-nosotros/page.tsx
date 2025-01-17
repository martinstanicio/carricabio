import { Metadata } from "next";

const title = "Sobre nosotros";
const description =
  "Conoce por qué Carricabio es tu mejor opción para invertir. Descubre quiénes somos, cómo trabajamos, y las ventajas de nuestro fondo de inversión.";
const url = "/sobre-nosotros";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url },
};

export default function Products() {
  return (
    <section className="prose mx-auto max-w-prose space-y-8 px-4 py-12">
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <main>
        <h2>Quiénes somos</h2>
        <p>
          En <span className="font-bold text-primary">Carricabio</span>, nos
          dedicamos a transformar la forma en que las personas invierten su
          capital. Somos un fondo de inversión diseñado para ofrecer{" "}
          <strong>oportunidades accesibles</strong>, <strong>seguras</strong> y{" "}
          <strong>diversificadas</strong>, adaptándonos a las necesidades y
          expectativas de cada inversor. Nuestro equipo está formado por
          profesionales con amplia experiencia en mercados financieros,
          comprometidos en guiarte hacia decisiones estratégicas que impulsen el{" "}
          <strong>crecimiento de tu patrimonio</strong>.
        </p>
        <p>
          <span className="font-bold text-primary">Carricabio</span> no solo se
          trata de invertir, sino de construir confianza, ofrecer{" "}
          <strong>transparencia</strong> y garantizar que cada paso esté
          orientado a maximizar los beneficios de nuestros clientes.
        </p>

        <h2>Nuestra filosofía</h2>
        <p>
          Creemos en la importancia de democratizar las inversiones y hacerlo de
          manera que todos puedan beneficiarse de las mejores oportunidades
          financieras. Nos esforzamos por ofrecer:
        </p>
        <ul>
          <li>
            <strong>Acceso a diversas opciones de inversión:</strong> Desde el
            oro como activo seguro, hasta criptomonedas y acciones para perfiles
            más dinámicos.
          </li>
          <li>
            <strong>Innovación constante:</strong> Utilizamos herramientas y
            estrategias modernas para garantizar resultados óptimos.
          </li>
          <li>
            <strong>Transparencia total:</strong> No hay costos ocultos, ni
            comisiones inesperadas.
          </li>
        </ul>

        <h2>
          Qué es <span className="font-bold text-primary">Carricabio</span>
        </h2>
        <p>
          <span className="font-bold text-primary">Carricabio</span> es un fondo
          de inversión estructurado mediante fideicomisos, una herramienta que
          permite combinar <strong>eficiencia fiscal</strong> con máxima
          protección del patrimonio. Esto significa que, al invertir con
          nosotros, disfrutas de múltiples ventajas como:
        </p>
        <ul>
          <li>
            <strong>Optimización fiscal:</strong> Exenciones y reducciones en
            impuestos como el IVA, ganancias y bienes personales.
          </li>
          <li>
            <strong>Seguridad jurídica:</strong> Operamos bajo un marco legal
            estable, ofreciendo confianza en cada transacción.
          </li>
          <li>
            <strong>Gestión simplificada:</strong> El fideicomiso centraliza las
            obligaciones fiscales, reduciendo las complejidades administrativas.
          </li>
        </ul>

        <h2>Por qué elegirnos</h2>
        <p>
          <span className="font-bold text-primary">Carricabio</span> se
          diferencia de otros fondos de inversión por:
        </p>
        <ol>
          <li>
            <strong>Ventajas impositivas inigualables</strong>
            <ul>
              <li>Exención de impuestos directos en muchos casos.</li>
              <li>
                Reducción o eliminación del IVA en operaciones específicas.
              </li>
              <li>Protección frente al impuesto sobre bienes personales.</li>
            </ul>
          </li>
          <li>
            <strong>Comisiones competitivas y justas</strong>
            <ul>
              <li>Solo el 5% anual sobre cada cuota parte.</li>
              <li>
                Para inversiones en criptomonedas, la comisión solo se aplica si
                hay ganancia.
              </li>
            </ul>
          </li>
          <li>
            <strong>Gestión profesional</strong>
            <ul>
              <li>Análisis de mercado continuo.</li>
              <li>
                Optimización de portafolios para maximizar el rendimiento.
              </li>
            </ul>
          </li>
          <li>
            <strong>Estabilidad y confianza</strong>
            <ul>
              <li>
                Un marco legal sólido que protege frente a cambios regulatorios.
              </li>
              <li>Transparencia total en cada operación.</li>
            </ul>
          </li>
        </ol>

        <h2>Ventajas impositivas de elegirnos</h2>
        <p>
          Invertir a través de{" "}
          <span className="font-bold text-primary">Carricabio</span> significa
          aprovechar un modelo fiscal eficiente que incluye:
        </p>
        <ul>
          <li>
            Exención de impuesto a las ganancias en los rendimientos generados.
          </li>
          <li>
            Posibilidad de diferir impuestos hasta el momento de la distribución
            de ganancias.
          </li>
          <li>
            Operaciones internas exentas de impuestos sobre transferencias de
            bienes.
          </li>
          <li>
            Reducción en retenciones para inversiones internacionales gracias a
            tratados fiscales.
          </li>
        </ul>
        <p>
          Esto no solo protege tu capital, sino que también optimiza tus
          resultados financieros al reducir las cargas fiscales y simplificar
          las obligaciones administrativas.
        </p>

        <h2>Nuestro compromiso</h2>
        <p>
          En <span className="font-bold text-primary">Carricabio</span>, nuestro
          propósito es ayudarte a <strong>alcanzar tus metas</strong>{" "}
          financieras con un enfoque personalizado, accesible y ético. Valoramos
          la confianza que depositas en nosotros y trabajamos día a día para
          ofrecerte:
        </p>
        <ul>
          <li>Un servicio de calidad superior.</li>
          <li>Oportunidades de inversión diseñadas a tu medida.</li>
          <li>Un entorno de inversión seguro y transparente.</li>
        </ul>
      </main>
    </section>
  );
}
