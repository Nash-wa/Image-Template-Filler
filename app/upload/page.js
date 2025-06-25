"use client";
import styles from "../Landing.module.css";
import contentStyles from "../content/content.module.css";
import uploadStyles from "./upload.module.css";
import Image from "next/image";
import { useRef, useState } from "react";

export default function UploadPage() {
  const [csvName, setCsvName] = useState("");
  const [imgPreview, setImgPreview] = useState("/upload.png");
  const [menuOpen, setMenuOpen] = useState(false);
  const csvInput = useRef();
  const imgInput = useRef();

  function handleCsv(e) {
    setCsvName(e.target.files[0]?.name || "");
  }
  function handleImg(e) {
    if (e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImgPreview(url);
    }
  }

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
        <button className={uploadStyles.hamburger} aria-label="Open menu" onClick={()=>setMenuOpen(v=>!v)}>
          <span className={uploadStyles.hamburgerBar}></span>
          <span className={uploadStyles.hamburgerBar}></span>
          <span className={uploadStyles.hamburgerBar}></span>
        </button>
        {menuOpen && <div className={uploadStyles.menuOverlay + ' ' + uploadStyles.show} onClick={()=>setMenuOpen(false)}></div>}
        {menuOpen && (
          <nav className={uploadStyles.mobileNav + ' ' + uploadStyles.show}>
            <a href="/" onClick={()=>setMenuOpen(false)}>Home</a>
            <a href="https://github.com/alvin-dennis/Image-Template-Filler" target="_blank" rel="noopener noreferrer" onClick={()=>setMenuOpen(false)}>Github</a>
          </nav>
        )}
      </header>
      <main className={uploadStyles.uploadMain}>
        <h1 className={uploadStyles.uploadTitle}>Upload CSV & Template</h1>
        <label className={uploadStyles.uploadLabel}>CSV File</label>
        <div style={{marginBottom:24}}>
          <input
            type="file"
            accept=".csv"
            ref={csvInput}
            style={{display:"none"}}
            onChange={handleCsv}
          />
          <div
            className={uploadStyles.uploadInput}
            tabIndex={0}
            onClick={()=>csvInput.current?.click()}
            style={{cursor:"pointer", userSelect:"none"}}
          >
            {csvName ? csvName : <span style={{color:'#b3a9c9'}}>Drag or click to upload</span>}
          </div>
        </div>
        <label className={uploadStyles.uploadLabel}>Template Image</label>
        <div style={{marginBottom:24}}>
          <input
            type="file"
            accept="image/*"
            ref={imgInput}
            style={{display:"none"}}
            onChange={handleImg}
          />
          <div
            className={uploadStyles.uploadInput}
            tabIndex={0}
            onClick={()=>imgInput.current?.click()}
            style={{cursor:"pointer", userSelect:"none"}}
          >
            <span style={{color:'#b3a9c9'}}>Drag or click to upload</span>
          </div>
        </div>
        <label className={uploadStyles.uploadPreviewLabel}>Template Preview</label>
        <div className={uploadStyles.uploadPreview}>
          <Image src={imgPreview} alt="Template Preview" width={700} height={440} style={{objectFit:"cover", width:"100%", height:"100%", borderRadius:16}} />
        </div>
        <div className={uploadStyles.uploadActions}>
          <button className={uploadStyles.uploadButton} type="button" style={{background:'#ececec', color:'#181028', fontWeight:600}}>Edit Template</button>
          <button className={uploadStyles.uploadButton} type="button">Next</button>
        </div>
      </main>
    </div>
  );
}
