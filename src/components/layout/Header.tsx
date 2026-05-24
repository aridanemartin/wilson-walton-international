import Navigation from "@/components/navigation/Navigation";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <PlaceholderImage label="Wilson Walton International logo" aspectRatio="4/1" className={styles.logoImage} />
        </div>
        <Navigation />
        <div className={styles.contact}>
          <span className={styles.contactItem}>Phone: +34 91 616 44 43</span>
          <span className={styles.contactItem}>Email: info@example.com</span>
        </div>
      </div>
    </header>
  );
}
