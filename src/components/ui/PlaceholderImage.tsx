import type { PlaceholderImageProps } from "@/types";
import styles from "./PlaceholderImage.module.css";

export default function PlaceholderImage({ label, aspectRatio = "16/9", className }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={[styles.placeholder, className].filter(Boolean).join(" ")}
      style={{ aspectRatio }}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
}
