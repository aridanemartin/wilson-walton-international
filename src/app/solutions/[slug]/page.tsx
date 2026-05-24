import { notFound } from "next/navigation";
import { solutions } from "@/data/solutions";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

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
    <div>
      <PlaceholderImage
        label={solution.imagePlaceholderLabel}
        aspectRatio="21/9"
      />
      <h1>{solution.name}</h1>
      <p>{solution.fullDescription}</p>
      <a href="/contact">Request technical information</a>
    </div>
  );
}
