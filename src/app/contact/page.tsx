import styles from "../_static-page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1>Contact</h1>
        <p className={styles.lead}>
          Get in touch with us to find out how our specialists in protection against corrosion and
          cathodic protection can help you.
        </p>

        <div className={styles.contactGrid}>
          <section>
            <h2>Get in Touch</h2>
            <address className={styles.address}>
              <strong>Wilson Walton International S.A.</strong><br />
              Calle Anabel Segura, 10 / 3ª Planta<br />
              28108 — Alcobendas / Madrid — Spain<br /><br />
              Phone: <a href="tel:+34916164443">+34 91 616 44 43</a><br />
              Email: <a href="mailto:info@wilsonwaltoninternational.com">info@wilsonwaltoninternational.com</a>
            </address>
          </section>

          <section>
            <h2>How Can We Help?</h2>
            <ul className={styles.list}>
              <li><strong>Quick questions</strong> — Browse our product pages for detailed technical information on ICCP, MGPS, and Sacrificial Anodes.</li>
              <li><strong>Customer care</strong> — Existing customers can contact our team for support on specific products or installations.</li>
              <li><strong>General enquiries</strong> — Call us for immediate assistance with all general enquiries about our solutions.</li>
              <li><strong>Request a quote</strong> — Contact us to discuss your project requirements and receive a technical proposal.</li>
            </ul>
          </section>
        </div>

        <section>
          <h2>Send Us a Message</h2>
          <p>
            To request a quote or discuss a project, please contact us by phone or email and one of
            our specialists will respond promptly. We work with clients across maritime, offshore,
            oil &amp; gas, military and onshore sectors worldwide.
          </p>
          <a href="mailto:info@wilsonwaltoninternational.com" className={styles.ctaButton}>
            Email us directly
          </a>
        </section>
      </div>
    </main>
  );
}
