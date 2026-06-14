import styles from "../../_static-page.module.css";

export default function DownloadsPage() {
  const catalogs = [
    { name: "Marine Catalog", description: "Complete overview of all marine corrosion protection systems", format: "PDF" },
    { name: "Sacrificial Anodes Catalog", description: "Full range of aluminium and zinc alloy anodes", format: "PDF" },
    { name: "ICCP Systems Catalog", description: "Impressed Current Cathodic Protection product range", format: "PDF" },
    { name: "MGPS Systems Catalog", description: "Marine Growth Prevention System product range", format: "PDF" },
    { name: "Company Presentation", description: "Wilson Walton International overview and capabilities", format: "PPT" },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1>Downloads</h1>
        <p className={styles.lead}>
          The easiest way to consult our products is to always have the catalogs on hand. We have
          made our product catalog available in PDF format for you to download.
        </p>

        <section>
          <h2>Product Catalogs</h2>
          <ul className={styles.cardList}>
            {catalogs.map((catalog) => (
              <li key={catalog.name} className={styles.card}>
                <div>
                  <strong>{catalog.name}</strong>
                  <p>{catalog.description}</p>
                </div>
                <span className={styles.badge}>{catalog.format}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.cta}>
          <h2>Need a specific document?</h2>
          <p>Contact us if you require technical datasheets, certificates, or project-specific documentation.</p>
          <a href="/contact" className={styles.ctaButton}>Request documentation</a>
        </div>
      </div>
    </main>
  );
}
