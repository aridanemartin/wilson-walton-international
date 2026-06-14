import type { IndustryCardData } from "@/types";
import styles from "./IndustriesServed.module.css";

interface IndustriesServedProps {
  industries: IndustryCardData[];
}

export default function IndustriesServed({ industries }: IndustriesServedProps) {
  return (
    <section className={styles.section} data-section="industries-served">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Industries
          </p>
          <h2 className={styles.heading}>Industries We Serve</h2>
          <p className={styles.subheading}>
            From naval vessels to offshore wind platforms — precision corrosion
            protection across every demanding environment.
          </p>
        </header>

        <ul className={styles.grid} role="list">
          {industries.map((industry) => (
            <li key={industry.id} className={styles.card}>
              <a href={`/industries/${industry.slug}`} className={styles.cardLink}>
                <span className={styles.ghost} aria-hidden="true">
                  {industry.name.split(" ")[0]}
                </span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardName}>{industry.name}</h3>
                  <p className={styles.cardDescription}>{industry.shortDescription}</p>
                  <span className={styles.arrow} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
