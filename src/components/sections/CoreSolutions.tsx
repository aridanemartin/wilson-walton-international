import type { SolutionCardData } from "@/types";
import ServiceCard from "@/components/ui/ServiceCard";
import styles from "./CoreSolutions.module.css";

interface CoreSolutionsProps {
  solutions: SolutionCardData[];
}

export default function CoreSolutions({ solutions }: CoreSolutionsProps) {
  return (
    <section className={styles.section} data-section="core-solutions">
      <h2 className={styles.heading}>Our Solutions</h2>
      <div className={styles.grid}>
        {solutions.map((solution) => (
          <ServiceCard
            key={solution.id}
            id={solution.id}
            name={solution.name}
            description={solution.shortDescription}
            imagePlaceholderLabel={solution.imagePlaceholderLabel}
          />
        ))}
      </div>
    </section>
  );
}
