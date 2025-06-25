"use client";
import styles from "../Landing.module.css";
import contentStyles from "../content/content.module.css";
import downloadStyles from "./download.module.css";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/download/image_001.png", name: "image_001.png" },
  { src: "/download/image_002.png", name: "image_002.png" },
  { src: "/download/image_003.png", name: "image_003.png" },
  { src: "/download/image_004.png", name: "image_004.png" },
  { src: "/download/image_005.png", name: "image_005.png" },
  { src: "/download/image_006.png", name: "image_006.png" },
  { src: "/download/image_007.png", name: "image_007.png" },
  { src: "/download/image_008.png", name: "image_008.png" },
  { src: "/download/image_009.png", name: "image_009.png" },
  { src: "/download/image_010.png", name: "image_010.png" },
  { src: "/download/image_011.png", name: "image_011.png" },
  { src: "/download/image_012.png", name: "image_012.png" },
];

export default function DownloadPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.landing}>
      <header className={styles.navbar} style={{position:'relative'}}>
        <div className={styles.logoRow}>
          <img src="/logo_image.svg" alt="Logo" className={styles.logo} />
          <span className={styles.brand}>Image-Template-Filler</span>
        </div>
        <nav className={contentStyles.navLinks}>
          <a href="/" className={contentStyles.navLink}>Home</a>
          <a href="https://github.com/alvin-dennis/Image-Template-Filler" target="_blank" rel="noopener noreferrer" className={contentStyles.navLink}>Github</a>
        </nav>
        <button className={downloadStyles.hamburger} aria-label="Open menu" onClick={()=>setMenuOpen(v=>!v)}>
          <span className={downloadStyles.hamburgerBar}></span>
          <span className={downloadStyles.hamburgerBar}></span>
          <span className={downloadStyles.hamburgerBar}></span>
        </button>
        {menuOpen && <div className={downloadStyles.menuOverlay + ' ' + downloadStyles.show} onClick={()=>setMenuOpen(false)}></div>}
        {menuOpen && (
          <nav className={downloadStyles.mobileNav + ' ' + downloadStyles.show}>
            <a href="/" onClick={()=>setMenuOpen(false)}>Home</a>
            <a href="https://github.com/alvin-dennis/Image-Template-Filler" target="_blank" rel="noopener noreferrer" onClick={()=>setMenuOpen(false)}>Github</a>
          </nav>
        )}
      </header>
      <main className={downloadStyles.downloadMain}>
        <div className={downloadStyles.downloadHeaderRow}>
          <h1 className={downloadStyles.downloadTitle}>View & Download</h1>
          <button className={downloadStyles.downloadButton} type="button">
            Download Selected as ZIP
          </button>
        </div>
        <div className={downloadStyles.downloadGrid}>
          {images.map(img => (
            <div key={img.name} className={downloadStyles.downloadCard}>
              <div className={downloadStyles.downloadImageWrap}>
                <Image src={img.src} alt={img.name} width={220} height={220} className={downloadStyles.downloadImage} />
              </div>
              <span className={downloadStyles.downloadFilename}>{img.name}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
