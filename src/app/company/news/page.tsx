import styles from "../../_static-page.module.css";

export default function NewsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1>News</h1>
        <p className={styles.lead}>
          Stay up to date with the latest news, projects, and developments from Wilson Walton
          International.
        </p>

        <section>
          <h2>Latest Updates</h2>
          <p>
            News articles and project updates will appear here. Wilson Walton International regularly
            publishes updates on new installations, industry developments, and company news across
            our maritime, offshore, and onshore sectors.
          </p>
        </section>

        <div className={styles.cta}>
          <h2>Get in touch</h2>
          <p>For press enquiries or further information, contact our team.</p>
          <a href="/contact" className={styles.ctaButton}>Contact us</a>
        </div>
      </div>
    </main>
  );
}
