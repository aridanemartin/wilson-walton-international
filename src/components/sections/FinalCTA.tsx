import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} data-section="final-cta">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.glow} />
      </div>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Get in Touch
        </p>
        <h2 className={styles.heading}>
          Ready to Protect<br />Your Installation?
        </h2>
        <p className={styles.body}>
          With more than 50 years in corrosion engineering, we are ready to support your project.
          Our engineers are available to provide technical specifications, system designs and
          on-site commissioning support.
        </p>
        <div className={styles.actions}>
          <a className={styles.cta} href="/contact">Contact us</a>
          <a className={styles.ctaSecondary} href="/solutions/iccp-systems">
            View technical specs
          </a>
        </div>
      </div>
      <div className={styles.decorNumber} aria-hidden="true">1966</div>
    </section>
  );
}
