import styles from "./WhyWilsonWalton.module.css";

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
      <h2 className={styles.heading}>Why Wilson Walton International</h2>
      <ul className={styles.list}>
        {points.map((point) => (
          <li key={point} className={styles.item}>
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
