import PlaceholderImage from "@/components/ui/PlaceholderImage";
import styles from "./Footer.module.css";

const legalLinks = [
  { label: "Cookies Policy", href: "#" },
  { label: "Privacy Statement", href: "#" },
  { label: "Legal Notice", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.contact}>
          <p data-testid="footer-address">Calle Anabel Segura, 10. 3ª Planta 28108 — Alcobendas / Madrid — Spain</p>
          <p data-testid="footer-phone">Phone: +34 91 616 44 43</p>
          <p data-testid="footer-email">Email: info@wilsonwaltoninternational.com</p>
        </div>
        <div className={styles.cert}>
          <PlaceholderImage label="ISO 9001 certification badge" aspectRatio="1/1" className={styles.certImage} />
        </div>
      </div>
      <div className={styles.bottom}>
        <p data-testid="footer-copyright">© 2026 Wilson Walton International S.A.</p>
        <nav aria-label="Legal navigation">
          <ul className={styles.legal} role="list">
            {legalLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.legalLink}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
