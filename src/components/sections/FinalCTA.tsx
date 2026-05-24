import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} data-section="final-cta">
      <h2 className={styles.heading}>Request Technical Information</h2>
      <p className={styles.body}>
        With more than 50 years in corrosion engineering, we are ready to support your project.
      </p>
      <a className={styles.cta} href="/contact">
        Contact us
      </a>
    </section>
  );
}
