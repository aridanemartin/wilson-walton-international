import styles from "./FeaturedResources.module.css";

const resources = [
  { label: "Downloads", href: "/resources/downloads" },
  { label: "News", href: "/company/news" },
  { label: "Certifications", href: "/resources/certifications" },
  { label: "Case Studies", href: "/resources/case-studies" },
];

export default function FeaturedResources() {
  return (
    <section className={styles.section} data-section="featured-resources">
      <h2 className={styles.heading}>Resources</h2>
      <ul className={styles.list}>
        {resources.map(({ label, href }) => (
          <li key={label}>
            <a className={styles.link} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
