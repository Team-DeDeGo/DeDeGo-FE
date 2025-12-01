"use client";

import * as styles from "./style.css";
import type { LanguageType } from "@/types";
import Image from "next/image";

interface TranslatorInputProps {
  sourceLang: LanguageType;
  inputText: string;
  isPending: boolean;
  onInputChange: (text: string) => void;
  onSwitchLanguage: () => void;
}

export const TranslatorInput = ({
  sourceLang,
  inputText,
  isPending,
  onInputChange,
  onSwitchLanguage,
}: TranslatorInputProps) => {
  return (
    <div className={styles.inputSection}>
      <div className={styles.languageHeader}>
        <div className={styles.languageLabel}>{sourceLang}</div>
        <button
          className={styles.switchButton}
          onClick={onSwitchLanguage}
          disabled={isPending}
          aria-label="언어 전환"
        >
          <Image src="/switch.png" alt="언어 전환" width={18} height={18} />
        </button>
      </div>
      <textarea
        className={styles.textArea}
        placeholder="번역할 내용을 입력하세요"
        value={inputText}
        onChange={(e) => onInputChange(e.target.value)}
        disabled={isPending}
      />
    </div>
  );
};
