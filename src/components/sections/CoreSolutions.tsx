import type { SolutionCardData } from "@/types";
import styles from "./CoreSolutions.module.css";

interface CoreSolutionsProps {
  solutions: SolutionCardData[];
}

export default function CoreSolutions({ solutions }: CoreSolutionsProps) {
  return (
    <section className={styles.section} id="core-solutions" data-section="core-solutions">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Our Solutions
          </p>
          <h2 className={styles.heading}>
            Engineering-Grade<br />Protection Systems
          </h2>
        </header>

        <ul className={styles.list} role="list">
          {solutions.map((solution, i) => (
            <li key={solution.id} className={styles.card}>
              <span className={styles.cardNumber} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{solution.name}</h3>
                <p className={styles.cardDescription}>{solution.shortDescription}</p>
              </div>
              <a
                href={`/solutions/${solution.slug}`}
                className={styles.cardLink}
                aria-label={`Learn about ${solution.name}`}
              >
                <span className={styles.cardLinkText}>Explore</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
