"use client";
import React, { useState } from "react";
import styles from "./upload.module.css";

export default function UploadPage() {
  const [csvFile, setCsvFile] = useState(null);
  const [templateImg, setTemplateImg] = useState(null);

  const handleCsvUpload = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleImageUpload = (e) => {
    setTemplateImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload CSV & Template</h1>

      <div className={styles.uploadSection}>
        <label>CSV File</label>
        <input type="file" accept=".csv" onChange={handleCsvUpload} />
      </div>

      <div className={styles.uploadSection}>
        <label>Template Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      <div className={styles.preview}>
        <h2>Template Preview</h2>
        {templateImg && <img src={templateImg} alt="Template Preview" />}
      </div>

      <div className={styles.buttonSection}>
        <button className={styles.editButton}>Edit Template</button>
        <button className={styles.nextButton}>Next</button>
      </div>
    </div>
  );
}