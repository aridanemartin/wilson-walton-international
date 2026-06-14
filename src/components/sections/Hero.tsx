import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section} data-section="hero">
      <div className={styles.bg}>
        <Image
          src="/landing-hero.webp"
          alt="Hero banner image"
          fill
          priority
          className={styles.bgImage}
          sizes="100vw"
        />
        <div className={styles.overlay} />
        <div className={styles.grid} aria-hidden="true" />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow} aria-hidden="true">
            <span className={styles.eyebrowLine} />
            Est. 1966 — Corrosion Protection
          </p>
          <h1 className={styles.headline}>
            Protecting<br />
            Marine &amp; Industrial<br />
            Assets Worldwide
          </h1>
          <p className={styles.subheading}>
            Cathodic protection and corrosion engineering for Maritime,
            Offshore &amp; Onshore installations — trusted by navies, shipyards
            and energy operators in over 80 countries.
          </p>
          <div className={styles.actions}>
            <a href="/contact" className={styles.cta}>Contact us</a>
            <a href="#core-solutions" className={styles.ctaSecondary}>Explore solutions</a>
          </div>
        </div>
      </div>

      <div className={styles.statsBar} aria-label="Company highlights">
        <div className={styles.statItem}>
          <span className={styles.statNumber}>58+</span>
          <span className={styles.statLabel}>Years Experience</span>
        </div>
        <div className={styles.statDivider} aria-hidden="true" />
        <div className={styles.statItem}>
          <span className={styles.statNumber}>500+</span>
          <span className={styles.statLabel}>Projects Delivered</span>
        </div>
        <div className={styles.statDivider} aria-hidden="true" />
        <div className={styles.statItem}>
          <span className={styles.statNumber}>80+</span>
          <span className={styles.statLabel}>Countries Served</span>
        </div>
        <div className={styles.statDivider} aria-hidden="true" />
        <div className={styles.statItem}>
          <span className={styles.statNumber}>ISO</span>
          <span className={styles.statLabel}>9001 Certified</span>
        </div>
      </div>
    </section>
  );
}
