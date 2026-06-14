import PlaceholderImage from "@/components/ui/PlaceholderImage";
import styles from "./CompanyOverview.module.css";

export default function CompanyOverview() {
  return (
    <section className={styles.section} data-section="about">
      <div className={styles.content}>
        <h2 className={styles.headline}>Perfection in every inch of our products</h2>
        <p className={styles.subheading}>More than 50 years of experience</p>
        <p className={styles.body} data-testid="company-body">
          For more than 50 years Wilson Walton International has specialised in the world of
          corrosion and cathodic protection, delivering turnkey engineering solutions across
          maritime, offshore, and industrial sectors.
        </p>
        <a href="#" className={styles.cta}>More about us</a>
      </div>
      <div className={styles.image}>
        <PlaceholderImage label="Company overview background" aspectRatio="4/3" />
      </div>
    </section>
  );
}
