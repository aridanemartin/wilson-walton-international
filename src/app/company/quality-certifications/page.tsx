import PlaceholderImage from "@/components/ui/PlaceholderImage";
import styles from "../../_static-page.module.css";

export default function QualityCertificationsPage() {
  return (
    <main className={styles.page}>
      <PlaceholderImage label="Quality & Certifications — ISO 9001 certified manufacturing" aspectRatio="21/9" />
      <div className={styles.content}>
        <h1>Quality &amp; Certifications</h1>
        <p className={styles.lead}>
          Wilson Walton International operates under a rigorous quality management system,
          manufacturing products and delivering services in accordance with internationally
          recognised standards.
        </p>

        <section>
          <h2>ISO 9001 Quality Management</h2>
          <p>
            All WWI products are designed and built to ISO9001 Quality Control. Our manufacturing
            processes are subject to continuous audit and improvement to ensure that every product
            leaving our facilities meets the highest quality standards.
          </p>
        </section>

        <section>
          <h2>Military & Defence Standards</h2>
          <p>
            Our ICCP and MGPS systems are designed in accordance with NES 704 and comply with
            Stanag 1008 requirements, meeting the stringent demands of EMC/EFI, shock, and vibration
            for military environments. Our products are approved by major naval classification
            authorities.
          </p>
        </section>

        <section>
          <h2>Classification Society Approvals</h2>
          <p>
            WWI marine growth prevention systems are approved by major international classification
            societies. Our ICCP and MGPS systems have been installed on vessels and structures
            surveyed by leading maritime classification organisations worldwide.
          </p>
        </section>

        <section>
          <h2>Material Standards</h2>
          <ul className={styles.list}>
            <li>Sacrificial anodes manufactured to U.S. Military Specification (Mil-Spec)</li>
            <li>Aluminium alloys cast from High Purity Ingots of grade 99.40% minimum</li>
            <li>P0404 premium low-iron alloy for maximum performance offshore applications</li>
            <li>Zinc alloys to Special High Grade (SHG) and Mil-Spec</li>
            <li>ICCP ripple content of less than 0.1% measured to 0.02% accuracy</li>
          </ul>
        </section>

        <div className={styles.cta}>
          <h2>Request certification documentation</h2>
          <p>Our team can provide specific certification documents for your project requirements.</p>
          <a href="/contact" className={styles.ctaButton}>Contact us</a>
        </div>
      </div>
    </main>
  );
}
