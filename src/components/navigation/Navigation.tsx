"use client";

import { useState, useEffect, useRef } from "react";
import type { NavItem } from "@/types";
import { navigationTree } from "./nav-data";
import NavDropdown from "./NavDropdown";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function openDropdown(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }

  function handleDropdownToggle(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  }

  function toggleMobileExpanded(label: string) {
    setMobileExpanded((prev) => (prev === label ? null : label));
  }

  function renderDesktopItem(item: NavItem) {
    if (item.children && item.children.length > 0) {
      return (
        <li
          key={item.label}
          className={styles.item}
          onMouseEnter={() => openDropdown(item.label)}
          onMouseLeave={scheduleClose}
        >
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
    <>
      <nav className={styles.nav} aria-label="Main navigation">
        <ul className={styles.list} role="list">
          {navigationTree.map(renderDesktopItem)}
        </ul>

        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className={[styles.bar, mobileOpen ? styles.barOpen1 : ""].filter(Boolean).join(" ")} />
          <span className={[styles.bar, mobileOpen ? styles.barOpen2 : ""].filter(Boolean).join(" ")} />
          <span className={[styles.bar, mobileOpen ? styles.barOpen3 : ""].filter(Boolean).join(" ")} />
        </button>
      </nav>

      {mobileOpen && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav aria-label="Mobile navigation">
            <ul className={styles.mobileList} role="list">
              {navigationTree.map((item, i) => (
                <li
                  key={item.label}
                  className={styles.mobileItem}
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {item.children && item.children.length > 0 ? (
                    <>
                      <button
                        className={styles.mobileTrigger}
                        onClick={() => toggleMobileExpanded(item.label)}
                        aria-expanded={mobileExpanded === item.label}
                      >
                        {item.label}
                        <span
                          className={[
                            styles.mobileArrow,
                            mobileExpanded === item.label ? styles.mobileArrowOpen : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          aria-hidden="true"
                        >›</span>
                      </button>
                      {mobileExpanded === item.label && (
                        <ul className={styles.mobileChildren} role="list">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className={styles.mobileChildLink}
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className={styles.mobileLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.mobileFooter}>
            <a href="tel:+34916164443" className={styles.mobileContactLine}>
              +34 91 616 44 43
            </a>
            <a href="mailto:info@wilsonwaltoninternational.com" className={styles.mobileContactLine}>
              info@wilsonwaltoninternational.com
            </a>
            <a href="/contact" className={styles.mobileCtaBtn} onClick={() => setMobileOpen(false)}>
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </>
  );
}
