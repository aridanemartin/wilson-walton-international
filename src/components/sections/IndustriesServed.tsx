import type { IndustryCardData } from "@/types";
import IndustryCard from "@/components/ui/IndustryCard";
import styles from "./IndustriesServed.module.css";

interface IndustriesServedProps {
  industries: IndustryCardData[];
}

export default function IndustriesServed({ industries }: IndustriesServedProps) {
  return (
    <section className={styles.section} data-section="industries-served">
      <h2 className={styles.heading}>Industries We Serve</h2>
      <div className={styles.grid}>
        {industries.map((industry) => (
          <IndustryCard
            key={industry.id}
            name={industry.name}
            shortDescription={industry.shortDescription}
            imagePlaceholderLabel={industry.imagePlaceholderLabel}
            href={`/industries/${industry.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
