import PlaceholderImage from "@/components/ui/PlaceholderImage";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section} data-section="hero">
      <div className={styles.image}>
        <PlaceholderImage label="Hero banner image" aspectRatio="21/9" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.headline}>Proven quality since 1966</h1>
        <p className={styles.subheading}>
          Cathodic protection and corrosion engineering for Maritime, Offshore &amp; Onshore installations
        </p>
        <div className={styles.actions}>
          <a href="/contact" className={styles.cta}>Contact us</a>
          <a href="#core-solutions" className={styles.ctaSecondary}>Explore solutions</a>
        </div>
      </div>
    </section>
  );
}
