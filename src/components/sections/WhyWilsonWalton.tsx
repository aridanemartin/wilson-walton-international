import styles from "./WhyWilsonWalton.module.css";

const stats = [
  { number: "58+", label: "Years" },
  { number: "500+", label: "Projects" },
  { number: "80+", label: "Countries" },
];

const points = [
  "50+ years of engineering expertise in corrosion and cathodic protection",
  "Global experience across Maritime, Offshore, and Onshore sectors",
  "In-house manufacturing of ICCP, MGPS, and sacrificial anode systems",
  "ISO 9001 certified — proven quality since 1966",
  "Dedicated technical support and field commissioning teams",
];

export default function WhyWilsonWalton() {
  return (
    <section className={styles.section} data-section="why-wilson-walton">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Why Us
          </p>
          <h2 className={styles.heading}>
            Why Wilson Walton International
          </h2>
          <div className={styles.statsRow} aria-label="Key metrics">
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNumber}>{s.number}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <ul className={styles.list} role="list">
            {points.map((point, i) => (
              <li key={point} className={styles.item}>
                <span className={styles.itemIndex} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.itemText}>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
