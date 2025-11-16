"use client";

import { useState } from "react";
import * as styles from "./style.css";
import { useTranslateMutation } from "@/service/translator/translator.mutation";
import type { responseType } from "@/types";

export default function Translator() {
  const [inputText, setInputText] = useState("");
  const [translateResult, setTranslateResult] = useState<responseType | null>(
    null
  );
  const [sourceLang, setSourceLang] = useState("판교어");

  const { mutate, isPending } = useTranslateMutation();

  const oppositeLanguage = sourceLang === "판교어" ? "일반어" : "판교어";

  const handleTranslate = () => {
    if (!inputText.trim()) {
      alert("번역할 내용을 입력해주세요!");
      return;
    }

    const direction = sourceLang === "판교어" ? "to_korean" : "to_pangyo";

    mutate(
      { text: inputText, direction },
      {
        onSuccess: (data) => {
          setTranslateResult(data);
        },
        onError: (error) => {
          alert(`번역 실패: ${error.message}`);
        },
      }
    );
  };

  const handleCopy = () => {
    if (!translateResult?.translated) {
      alert("복사할 번역 결과가 없습니다!");
      return;
    }
    navigator.clipboard.writeText(translateResult.translated);
    alert("번역된 텍스트가 클립보드에 복사되었습니다!");
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
                  disabled={isPending}
                >
                  <option value="판교어">판교어</option>
                  <option value="일반어">일반어</option>
                </select>
                <img
                  src="/arrow.png"
                  alt="arrow"
                  className={styles.selectArrow}
                />
              </div>
            </div>
            <textarea
              className={styles.textArea}
              placeholder="번역할 내용을 입력하세요"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isPending}
            />
          </div>
          <div className={styles.outputSection}>
            <div className={styles.languageHeader}>
              <div className={styles.languageLabel}>{oppositeLanguage}</div>
            </div>
            <div className={styles.outputText}>
              {isPending ? (
                <div className={styles.loader}>
                  <div className={styles.loaderDot} />
                </div>
              ) : (
                translateResult?.translated || ""
              )}
            </div>
          </div>
        </div>

        {translateResult && translateResult.terms.length > 0 && (
          <div className={styles.termsSection}>
            <div className={styles.termsList}>
              {translateResult.terms.map((term, index) => (
                <div key={index} className={styles.termItem}>
                  <div className={styles.termHeader}>
                    <span className={styles.termWord}>{term.term}</span>
                    {term.original && (
                      <span className={styles.termOriginal}>
                        ({term.original})
                      </span>
                    )}
                  </div>
                  <p className={styles.termMeaning}>{term.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.footer}>
          <button
            className={styles.translateButton}
            onClick={handleTranslate}
            disabled={isPending}
          >
            {isPending ? "번역 중..." : "번역하기"}
          </button>
          <div className={styles.iconButtons}>
            <button className={styles.iconButton}>
              <img src="/github.png" alt="GitHub" className={styles.icon} />
            </button>
            <button
              className={styles.iconButton}
              onClick={handleCopy}
              disabled={isPending || !translateResult?.translated}
            >
              <img src="/copy.png" alt="Copy" className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
