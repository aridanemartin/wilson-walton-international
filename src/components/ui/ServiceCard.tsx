import type { ServiceCardData } from "@/types";
import PlaceholderImage from "./PlaceholderImage";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ name, description, imagePlaceholderLabel }: ServiceCardData) {
  return (
    <article className={styles.card}>
      <PlaceholderImage label={imagePlaceholderLabel} aspectRatio="1/1" />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
