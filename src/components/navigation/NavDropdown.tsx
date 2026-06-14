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
        <svg
          className={[styles.chevron, isOpen ? styles.chevronOpen : ""].filter(Boolean).join(" ")}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={[styles.dropdown, isOpen ? styles.dropdownOpen : ""].filter(Boolean).join(" ")}>
        {isOpen && (
          <ul role="list" className={styles.dropdownList}>
            {item.children?.map((child) => (
              <li key={child.label}>
                <a href={child.href} className={styles.link}>
                  {child.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
