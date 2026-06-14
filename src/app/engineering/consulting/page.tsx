import PlaceholderImage from "@/components/ui/PlaceholderImage";
import styles from "../../_static-page.module.css";

export default function EngineeringConsultingPage() {
  return (
    <main className={styles.page}>
      <PlaceholderImage label="Engineering & Consulting — cathodic protection design services" aspectRatio="21/9" />
      <div className={styles.content}>
        <h1>Engineering &amp; Consulting</h1>
        <p className={styles.lead}>
          With a strong tradition and vocation in the development of the design and manufacture of
          all our products and services, WWI has engineers specialized in corrosion, naval
          architecture, marine engineering and structural engineering.
        </p>

        <section>
          <h2>Our Engineering Capability</h2>
          <p>
            When designing a structure, whether it&apos;s a new one, a retrofit modification or a
            life extension, it is important to ensure full cathodic protection throughout its entire
            design life. This is achieved through a proper cathodic protection design, where the
            required amounts of anodes are calculated, and anode placement is determined.
          </p>
          <p>
            We hold a large team of experts, with experience from deep waters to onshore facilities,
            and from case studies to research and development. We provide CP design and evaluations
            of jackets, subsea structures, pipelines, FPSOs, semi submersibles, wind foundations,
            caissons and other confined areas.
          </p>
        </section>

        <section>
          <h2>CP Design Services</h2>
          <ul className={styles.list}>
            <li>Traditional CP design with both impressed current and sacrificial anodes</li>
            <li>CP design verification</li>
            <li>CP retrofit design</li>
            <li>Anode protection range and attenuation calculations</li>
            <li>Jackets, subsea structures, pipelines and FPSOs</li>
            <li>Semi-submersibles, wind foundations and caissons</li>
            <li>Other confined areas, chain connectors and more</li>
          </ul>
        </section>

        <section>
          <h2>Commissioning &amp; Technical Assistance</h2>
          <p>
            WWI offers the commissioning and technical assistance of all our equipment as well as
            any advice or consultancy requested by our customers. We can also give support on other
            equipment and systems.
          </p>
          <p>
            We have qualified engineers and technicians who can give the necessary support at any
            time and in any part of the world, through our collaboration and association with a wide
            representation of companies in the main countries with maritime, offshore and onshore
            presence.
          </p>
        </section>

        <div className={styles.cta}>
          <h2>Discuss your project</h2>
          <p>Contact our engineering team to discuss your cathodic protection design requirements.</p>
          <a href="/contact" className={styles.ctaButton}>Request a consultation</a>
        </div>
      </div>
    </main>
  );
}
