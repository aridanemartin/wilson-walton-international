import styles from "./FeaturedResources.module.css";

const resources = [
  {
    label: "Downloads",
    href: "/resources/downloads",
    description: "Product catalogues, technical datasheets and installation guides.",
    tag: "Library",
  },
  {
    label: "News",
    href: "/company/news",
    description: "Company updates, project completions and industry developments.",
    tag: "Updates",
  },
  {
    label: "Certifications",
    href: "/resources/certifications",
    description: "ISO 9001, NES 704 and military-spec compliance documentation.",
    tag: "Compliance",
  },
  {
    label: "Case Studies",
    href: "/resources/case-studies",
    description: "Real-world corrosion protection outcomes across sectors.",
    tag: "Portfolio",
  },
];

export default function FeaturedResources() {
  return (
    <section className={styles.section} data-section="featured-resources">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Resources
          </p>
          <h2 className={styles.heading}>Technical Resources</h2>
        </header>

        <ul className={styles.grid} role="list">
          {resources.map(({ label, href, description, tag }) => (
            <li key={label} className={styles.card}>
              <a href={href} className={styles.cardLink} aria-label={label}>
                <span className={styles.cardTag}>{tag}</span>
                <span className={styles.cardLabel}>{label}</span>
                <span className={styles.cardDescription}>{description}</span>
                <span className={styles.cardArrow} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
