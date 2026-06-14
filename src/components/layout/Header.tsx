import Image from "next/image";
import Navigation from "@/components/navigation/Navigation";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.logoLink} aria-label="Wilson Walton International — go to homepage">
          <Image
            src="/logo_vertical.webp"
            alt="Wilson Walton International logo"
            width={48}
            height={48}
            className={styles.logoImage}
            priority
          />
        </a>
        <Navigation />
        <div className={styles.contact}>
          <span className={styles.contactItem}>Phone: +34 91 616 44 43</span>
          <span className={styles.contactItem}>Email: info@wilsonwaltoninternational.com</span>
        </div>
      </div>
    </header>
  );
}
