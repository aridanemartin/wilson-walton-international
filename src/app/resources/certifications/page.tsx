import styles from "../../_static-page.module.css";

export default function CertificationsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1>Certifications</h1>
        <p className={styles.lead}>
          Wilson Walton International products and systems are manufactured and tested to meet the
          highest international quality and safety standards.
        </p>

        <section>
          <h2>Quality Certifications</h2>
          <ul className={styles.list}>
            <li><strong>ISO 9001</strong> — Quality Management System covering design, manufacture and supply</li>
            <li><strong>NES 704</strong> — Naval Engineering Standard for military ICCP systems</li>
            <li><strong>Stanag 1008</strong> — NATO standardisation for AC input requirements</li>
            <li><strong>Mil-Spec</strong> — U.S. Military Specification for sacrificial anode alloys</li>
          </ul>
        </section>

        <section>
          <h2>Classification Society Approvals</h2>
          <p>
            Our MGPS and ICCP systems are approved by major international classification societies.
            Systems have been installed on vessels and structures inspected by the world&apos;s leading
            maritime classification organisations.
          </p>
        </section>

        <div className={styles.cta}>
          <h2>Request certification documentation</h2>
          <p>Contact us for project-specific certification documents and test reports.</p>
          <a href="/contact" className={styles.ctaButton}>Contact us</a>
        </div>
      </div>
    </main>
  );
}
