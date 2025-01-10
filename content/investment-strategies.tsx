import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faChartPie, faCoins } from "@fortawesome/free-solid-svg-icons";
import { InvestmentStrategy } from "@/lib/types";

export const investmentStrategies: InvestmentStrategy[] = [
  {
    id: "inversor-arriesgado",
    title: "Inversor arriesgado",
    icon: faBitcoin,
    description: (
      <p>
        Busca <strong>altas ganancias</strong> en el corto plazo y está
        dispuesto a asumir <strong>riesgos significativos</strong>, incluso con
        posibilidades de pérdida total del capital invertido.
      </p>
    ),
    content: (
      <>
        <h4>Activos preferidos</h4>
        <ul>
          <li>Criptomonedas (Bitcoin, Ethereum, Altcoins).</li>
          <li>Activos de alta volatilidad (NFTs, DeFi).</li>
          <li>Startups o empresas emergentes.</li>
        </ul>

        <h4>Ventajas</h4>
        <ul>
          <li>Potencial de altos rendimientos en poco tiempo.</li>
          <li>Innovación y diversificación en sectores emergentes.</li>
        </ul>

        <h4>Desventajas</h4>
        <ul>
          <li>Alta volatilidad y riesgo de grandes pérdidas.</li>
          <li>Dependencia de mercados poco regulados.</li>
        </ul>

        <p>
          Ejemplo: Alguien invirtiendo en proyectos de criptomonedas en etapa
          inicial como ICOs o tokens específicos del metaverso.
        </p>
      </>
    ),
  },
  {
    id: "inversor-moderado",
    title: "Inversor moderado",
    icon: faChartPie,
    description: (
      <p>
        Busca un <strong>equilibrio entre riesgo y rentabilidad</strong>,
        invirtiendo en activos con potencial de crecimiento a medio o largo
        plazo, pero sin exponerse a demasiada volatilidad.
      </p>
    ),
    content: (
      <>
        <h4>Activos preferidos</h4>
        <ul>
          <li>Acciones de empresas consolidadas (blue chips).</li>
          <li>Fondos indexados (S&P 500, MSCI World).</li>
          <li>ETFs (Exchange Traded Funds) diversificados.</li>
          <li>Bonos corporativos de alta calificación.</li>
        </ul>

        <h4>Ventajas</h4>
        <ul>
          <li>Rendimientos moderados pero consistentes.</li>
          <li>Menos volatilidad comparada con criptomonedas.</li>
          <li>Diversificación en mercados regulados.</li>
        </ul>

        <h4>Desventajas</h4>
        <ul>
          <li>Crecimiento más lento que en activos de alto riesgo.</li>
          <li>Afectado por ciclos económicos y del mercado bursátil.</li>
        </ul>

        <p>
          Ejemplo: Un inversor que coloca su dinero en un fondo S&P 500 o en
          acciones de empresas tecnológicas como Apple o Microsoft.
        </p>
      </>
    ),
  },
  {
    id: "inversor-conservador",
    title: "Inversor conservador",
    icon: faCoins,
    description: (
      <p>
        Prioriza la <strong>seguridad del capital</strong> y busca protegerse
        contra la inflación o crisis económicas. Prefiere activos que{" "}
        <strong>preserven su valor</strong> a largo plazo.
      </p>
    ),
    content: (
      <>
        <h4>Activos preferidos</h4>
        <ul>
          <li>Oro físico (lingotes, monedas) o ETFs respaldados por oro.</li>
          <li>Plata y otros metales preciosos.</li>
          <li>Bonos del gobierno (como los T-Bonds de EE.UU.).</li>
          <li>Bienes raíces (propiedades para renta o tierras).</li>
        </ul>

        <h4>Ventajas</h4>
        <ul>
          <li>Menor riesgo y alta estabilidad.</li>
          <li>Buen resguardo durante crisis económicas.</li>
        </ul>

        <h4>Desventajas</h4>
        <ul>
          <li>Rendimientos bajos en comparación con activos de riesgo.</li>
          <li>Limitada liquidez en algunos casos (propiedades).</li>
        </ul>

        <p>
          Ejemplo: Invertir en oro físico para preservar valor o en bonos del
          gobierno como medida de seguridad.
        </p>
      </>
    ),
  },
];
