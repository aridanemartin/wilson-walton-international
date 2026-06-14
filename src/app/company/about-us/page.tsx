import PlaceholderImage from "@/components/ui/PlaceholderImage";
import styles from "../../_static-page.module.css";

export default function AboutUsPage() {
  return (
    <main className={styles.page}>
      <PlaceholderImage label="About Us — Wilson Walton International headquarters" aspectRatio="21/9" />
      <div className={styles.content}>
        <h1>About Us</h1>
        <p className={styles.lead}>
          With more than 50 years in the world of corrosion, WWI Spain is a company with an extensive
          and well-known career in the Maritime, Offshore and Onshore sectors, being one of the
          pioneering companies in the design and manufacture of systems and equipment for cathodic
          protection.
        </p>

        <section>
          <h2>Our Company</h2>
          <p>
            Wilson Walton International Spain is currently divided into three different business
            sectors with union links, which allows us and makes it necessary to have a consolidated
            engineering and consulting service that supports any of the industries mentioned above.
          </p>
          <p>
            As more and more it is necessary to carry out predictive and justifying analyses of the
            cathodic protection systems used in the projects presented to us, WWI Spain has
            incorporated a team of highly qualified engineers in corrosion and cathodic protection.
          </p>
        </section>

        <section>
          <h2>Our Know-How</h2>
          <p>
            Our main objective is to offer our clients a service of the highest quality that
            encompasses all the phases that can be presented in any project, such as: technical,
            normative, quality, environment, safety, etc., and always from a personalised perspective
            and under a principle of maximum optimisation of the resources used that allows us to
            offer lasting products and services.
          </p>
        </section>

        <section>
          <h2>Our Headquarters</h2>
          <p>
            Our main office is located in Madrid, Spain, which allows us to meet the needs of our
            clients quickly and effectively. We also have local agents and strategic collaborators in
            other countries that provide a more personalised service and always with the technical and
            commercial support of our headquarters.
          </p>
          <address className={styles.address}>
            <strong>Wilson Walton International S.A.</strong><br />
            Calle Anabel Segura, 10, 3ª Planta<br />
            28108 — Alcobendas / Madrid — Spain<br />
            Phone: <a href="tel:+34916164443">+34 91 616 44 43</a><br />
            Email: <a href="mailto:info@wilsonwaltoninternational.com">info@wilsonwaltoninternational.com</a>
          </address>
        </section>

        <div className={styles.cta}>
          <h2>Endorsed by more than 50 years of solid experience</h2>
          <p>Get in touch to discuss how we can help with your cathodic protection requirements.</p>
          <a href="/contact" className={styles.ctaButton}>Contact us</a>
        </div>
      </div>
    </main>
  );
}
