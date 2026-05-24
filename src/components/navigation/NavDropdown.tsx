"use client";

import type { NavItem } from "@/types";
import styles from "./NavDropdown.module.css";

interface NavDropdownProps {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}

export default function NavDropdown({ item, isOpen, onToggle }: NavDropdownProps) {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.trigger}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
      >
        {item.label}
      </button>
      {isOpen && item.children && (
        <ul className={styles.dropdown} role="list">
          {item.children.map((child) => (
            <li key={child.label}>
              <a href={child.href} className={styles.link}>
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
