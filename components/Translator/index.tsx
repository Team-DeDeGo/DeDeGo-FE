"use client";

import React, { useState } from "react";
import * as styles from "./style.css";

export default function Translator() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [sourceLang, setSourceLang] = useState("판교어");

  const oppositeLanguage = sourceLang === "판교어" ? "일반어" : "판교어";

  const handleTranslate = () => {
    setOutputText(`번역된 텍스트: ${inputText}`);
  };

  const handleCopy = () => {
    alert("번역된 텍스트가 클립보드에 복사되었습니다!");
    navigator.clipboard.writeText(outputText);
  };

  return (
    <div className={styles.container}>
      <div className={styles.translatorBox}>
        <div className={styles.mainContent}>
          <div className={styles.inputSection}>
            <div className={styles.languageHeader}>
              <div className={styles.selectWrapper}>
                <select
                  className={styles.select}
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                >
                  <option value="판교어">판교어</option>
                  <option value="일반어">일반어</option>
                </select>
                <img src="/arrow.png" alt="arrow" className={styles.selectArrow} />
              </div>
            </div>
            <textarea
              className={styles.textArea}
              placeholder="번역할 내용을 입력하세요"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <div className={styles.outputSection}>
            <div className={styles.languageHeader}>
              <div className={styles.languageLabel}>{oppositeLanguage}</div>
            </div>
            <div className={styles.outputText}>{outputText}</div>
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.translateButton} onClick={handleTranslate}>
            번역하기
          </button>
          <div className={styles.iconButtons}>
            <button className={styles.iconButton}>
              <img src="/github.png" alt="GitHub" className={styles.icon} />
            </button>
            <button className={styles.iconButton} onClick={handleCopy}>
              <img src="/copy.png" alt="Copy" className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}