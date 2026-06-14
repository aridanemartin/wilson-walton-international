import PlaceholderImage from "@/components/ui/PlaceholderImage";
import styles from "../../_static-page.module.css";

export default function InspectionsSurveysPage() {
  return (
    <main className={styles.page}>
      <PlaceholderImage label="Inspections & Surveys — cathodic protection assessment services" aspectRatio="21/9" />
      <div className={styles.content}>
        <h1>Inspections &amp; Surveys</h1>
        <p className={styles.lead}>
          WWI provides inspection and survey services to assess the performance of existing
          cathodic protection systems and identify areas requiring attention or upgrade.
        </p>

        <section>
          <h2>Cathodic Protection Surveys</h2>
          <p>
            Our team of CP engineers can design and optimise surveys to improve the quality of
            information about existing systems and reduce costs. Survey data can be used alongside
            computer modelling to simulate and identify root causes of anomalies.
          </p>
          <ul className={styles.list}>
            <li>Voltage potential surveys for offshore and subsea structures</li>
            <li>Hull inspection and anode condition assessment</li>
            <li>Seawater pipework inspection and MGPS performance monitoring</li>
            <li>Interpretation of field survey data</li>
            <li>Identification of corrosion hotspots and mitigation recommendations</li>
          </ul>
        </section>

        <section>
          <h2>Inspection Services</h2>
          <p>
            Our design and modelling experience combined with on-site inspection allows us to keep
            CP retrofit cost at a minimum, as well as ensuring optimal operation. Semi-submersibles
            and jack-up rigs generally have long periods between drydocking — WWI anodes and
            reference electrodes are designed to last up to 15 years and are diver changeable.
          </p>
        </section>

        <div className={styles.cta}>
          <h2>Schedule an inspection</h2>
          <p>Contact us to arrange a cathodic protection survey or inspection for your structure.</p>
          <a href="/contact" className={styles.ctaButton}>Request a survey</a>
        </div>
      </div>
    </main>
  );
}
