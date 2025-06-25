"use client";
import styles from "../Landing.module.css";
import contentStyles from "../content/content.module.css";
import templateStyles from "./template.module.css";
import Image from "next/image";
import { useState } from "react";

function Chevron({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={open ? `${templateStyles.placeholderChevron} ${templateStyles.placeholderChevronOpen}` : templateStyles.placeholderChevron}
    >
      <path
        d="M6 8L10 12L14 8"
        stroke="#5b159a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TemplatePage() {
  // Static placeholder data
  const placeholders = [
    { label: "Name", desc: "Placeholder 1", options: ["Placeholder 1", "Placeholder 2", "Placeholder 3"] },
    { label: "Title", desc: "Placeholder 2", options: ["Placeholder 1", "Placeholder 2", "Placeholder 3"] },
    { label: "Company", desc: "Placeholder 3", options: ["Placeholder 1", "Placeholder 2", "Placeholder 3"] },
    { label: "Location", desc: "Placeholder 4", options: ["Placeholder 1", "Placeholder 2", "Placeholder 3"] },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selected, setSelected] = useState(placeholders.map(ph => ph.desc));

  const handleDropdown = idx => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  const handleSelect = (phIdx, option) => {
    setSelected(selected.map((val, idx) => (idx === phIdx ? option : val)));
    setOpenDropdown(null);
  };

  return (
    <div className={styles.landing}>
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className={styles.logoRow}>
          <img src="/logo_image.svg" alt="Logo" className={styles.logo} />
          <span className={styles.brand}>Image-Template-Filler</span>
        </div>
        <nav className={contentStyles.navLinks}>
          <a href="/" className={contentStyles.navLink}>Home</a>
          <a href="https://github.com/alvin-dennis/Image-Template-Filler" target="_blank" rel="noopener noreferrer" className={contentStyles.navLink}>Github</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className={contentStyles.mainContent} style={{ alignItems: "flex-start", marginTop: 48 }}>
        {/* Sidebar: Map Placeholders */}
        <section className={templateStyles.sidebarSection}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 32 }}>Map Placeholders</h2>
          <div className={templateStyles.placeholdersBox}>
            <div className={templateStyles.placeholdersTitle}>Placeholders</div>
            {placeholders.map((ph, idx) => (
              <div key={idx} className={templateStyles.placeholderDropdown}>
                <div
                  className={templateStyles.placeholderDropdownLabel}
                  onClick={() => handleDropdown(idx)}
                >
                  <span>{ph.label}</span>
                  <Chevron open={openDropdown === idx} />
                </div>
                <div className={templateStyles.placeholderValue} onClick={() => handleDropdown(idx)}>
                  {selected[idx]}
                </div>
                {/* Dropdown */}
                {openDropdown === idx && (
                  <div className={templateStyles.dropdownMenu}>
                    {ph.options.map((option, oidx) => (
                      <div
                        key={oidx}
                        className={
                          selected[idx] === option
                            ? `${templateStyles.dropdownOption} ${templateStyles.dropdownOptionSelected}`
                            : templateStyles.dropdownOption
                        }
                        onClick={() => handleSelect(idx, option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className={templateStyles.previewAllButton}>
              Preview All
            </button>
          </div>
        </section>

        {/* Template Preview */}
        <section className={templateStyles.previewSection}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 32 }}>Template Preview</h2>
          <div className={templateStyles.previewBox}>
            <Image src="/templatepage.png" alt="Template Preview" width={800} height={600} style={{ borderRadius: 16, objectFit: "cover", maxWidth: "100%", height: "auto" }} />
          </div>
        </section>
      </main>
    </div>
  );
}
