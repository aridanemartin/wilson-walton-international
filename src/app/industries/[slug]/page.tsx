import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { solutions } from "@/data/solutions";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relevantSolutions = solutions.filter((s) =>
    industry.relevantSolutionSlugs.includes(s.slug)
  );

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <PlaceholderImage label={industry.imagePlaceholderLabel} aspectRatio="21/9" />
        <div className={styles.heroContent}>
          <h1>{industry.name}</h1>
          <p className={styles.lead}>{industry.overview ?? industry.shortDescription}</p>
        </div>
      </div>

      {industry.sections && industry.sections.length > 0 && (
        <div className={styles.sections}>
          {industry.sections.map((section) => (
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

      <section className={styles.solutionsSection}>
        <h2>Relevant Solutions for {industry.name}</h2>
        <p>Wilson Walton International offers the following solutions for the {industry.name} sector:</p>
        <ul className={styles.solutionsList}>
          {relevantSolutions.map((s) => (
            <li key={s.slug} className={styles.solutionItem}>
              <a href={`/solutions/${s.slug}`} className={styles.solutionLink}>
                <strong>{s.name}</strong>
                <span>{s.shortDescription}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.cta}>
        <h2>Working in {industry.name}?</h2>
        <p>Contact our specialists to discuss your cathodic protection requirements.</p>
        <a href="/contact" className={styles.ctaButton}>Contact us</a>
      </div>
    </main>
  );
}
