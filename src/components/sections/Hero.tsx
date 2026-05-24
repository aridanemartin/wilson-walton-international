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
        <a href="#" className={styles.cta}>Discover our services</a>
      </div>
    </section>
  );
}
