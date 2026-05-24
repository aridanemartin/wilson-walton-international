import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { solutions } from "@/data/solutions";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

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
    <div>
      <PlaceholderImage
        label={industry.imagePlaceholderLabel}
        aspectRatio="21/9"
      />
      <h1>{industry.name}</h1>
      <p>{industry.shortDescription}</p>

      <section>
        <h2>Relevant Solutions for {industry.name}</h2>
        <ul>
          {relevantSolutions.map((s) => (
            <li key={s.slug}>
              <a href={`/solutions/${s.slug}`}>{s.name}</a>
            </li>
          ))}
        </ul>
      </section>

      <a href="/contact">Contact us about {industry.name}</a>
    </div>
  );
}
