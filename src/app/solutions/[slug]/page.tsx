import { notFound } from "next/navigation";
import { solutions } from "@/data/solutions";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <PlaceholderImage
          label={solution.imagePlaceholderLabel}
          aspectRatio="21/9"
        />
        <div className={styles.heroContent}>
          <h1>{solution.name}</h1>
          <p className={styles.lead}>{solution.fullDescription}</p>
        </div>
      </div>

      {solution.sections && solution.sections.length > 0 && (
        <div className={styles.sections}>
          {solution.sections.map((section) => (
            <section key={section.heading} className={styles.section}>
              <h2>{section.heading}</h2>
              {section.body && (
                <div className={styles.body}>
                  {section.body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
              {section.items && section.items.length > 0 && (
                <ul className={styles.list}>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      )}

      <div className={styles.cta}>
        <h2>Interested in {solution.name}?</h2>
        <p>Contact our team of specialists for a quote or technical consultation.</p>
        <a href="/contact" className={styles.ctaButton}>Request technical information</a>
      </div>
    </main>
  );
}
