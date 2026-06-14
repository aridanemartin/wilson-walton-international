import PlaceholderImage from "./PlaceholderImage";
import styles from "./IndustryCard.module.css";

interface IndustryCardProps {
  name: string;
  shortDescription: string;
  imagePlaceholderLabel: string;
  href: string;
}

export default function IndustryCard({
  name,
  shortDescription,
  imagePlaceholderLabel,
  href,
}: IndustryCardProps) {
  return (
    <article className={styles.card}>
      <PlaceholderImage label={imagePlaceholderLabel} aspectRatio="4/3" />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{shortDescription}</p>
      <a className={styles.link} href={href}>
        Learn more
      </a>
    </article>
  );
}
