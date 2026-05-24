import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import styles from "./ServicesGrid.module.css";

export default function ServicesGrid() {
  return (
    <section className={styles.section} data-section="services">
      <h2 className={styles.heading}>This is What We Do</h2>
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
