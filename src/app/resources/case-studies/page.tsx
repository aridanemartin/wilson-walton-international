import styles from "../../_static-page.module.css";

export default function CaseStudiesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1>Case Studies</h1>
        <p className={styles.lead}>
          Wilson Walton International has delivered cathodic protection solutions for some of the
          biggest fleets of commercial vessels and offshore structures in the world.
        </p>

        <section>
          <h2>Maritime Projects</h2>
          <p>
            WWI&apos;s reputation has been built on providing marine growth prevention systems for
            major commercial fleet operators. With the ability to treat high volumes of sea water,
            our systems are suited to the requirements of VLCCs, container ships, LNG carriers,
            military vessels and numerous other types of ocean-going vessels.
          </p>
        </section>

        <section>
          <h2>Offshore Renewables</h2>
          <p>
            WWI and ICP Foundry have supplied sacrificial anode systems for protection of offshore
            wind turbine monopiles, transition pieces, jacket foundations, and floating foundations
            across multiple wind farm projects.
          </p>
        </section>

        <section>
          <h2>Oil &amp; Gas Structures</h2>
          <p>
            ICCP systems supplied for semi-submersibles and jack-up rigs operating throughout the
            world in locations ranging from the South Atlantic and Gulf of Mexico to the North Sea
            and Arctic waters off Russia.
          </p>
        </section>

        <section>
          <h2>Naval &amp; Defence</h2>
          <p>
            WWI is widely used by defence organisations worldwide to predict the performance of
            cathodic protection systems and to minimise the associated electric and magnetic
            signatures. Our systems have been installed on naval vessels across most of the world&apos;s
            navies.
          </p>
        </section>

        <div className={styles.cta}>
          <h2>Tell us about your project</h2>
          <p>Contact our team to discuss how we can deliver a cathodic protection solution for your structure.</p>
          <a href="/contact" className={styles.ctaButton}>Request a quote</a>
        </div>
      </div>
    </main>
  );
}
