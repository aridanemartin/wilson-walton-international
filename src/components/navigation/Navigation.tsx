"use client";

import { useState, useEffect, useRef } from "react";
import type { NavItem } from "@/types";
import { navigationTree } from "./nav-data";
import NavDropdown from "./NavDropdown";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleDropdownToggle(label: string) {
    setActiveDropdown((prev) => (prev === label ? null : label));
  }

  function renderItem(item: NavItem) {
    if (item.children && item.children.length > 0) {
      return (
        <li key={item.label} className={styles.item}>
          <NavDropdown
            item={item}
            isOpen={activeDropdown === item.label}
            onToggle={() => handleDropdownToggle(item.label)}
          />
        </li>
      );
    }
    return (
      <li key={item.label} className={styles.item}>
        <a href={item.href} className={styles.link}>{item.label}</a>
      </li>
    );
  }

  return (
    <nav ref={navRef} className={styles.nav} aria-label="Main navigation">
      <button
        className={styles.hamburger}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        ☰
      </button>
      <ul
        className={[styles.list, mobileOpen ? styles.mobileOpen : ""].filter(Boolean).join(" ")}
        role="list"
      >
        {navigationTree.map(renderItem)}
      </ul>
    </nav>
  );
}
