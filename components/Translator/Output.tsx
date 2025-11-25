"use client";

import * as styles from "./style.css";
import { Loading } from "./Loading";
import type { LanguageType } from "@/types";

interface TranslatorOutputProps {
  targetLang: LanguageType;
  isPending: boolean;
  translatedText: string;
}

export const TranslatorOutput = ({
  targetLang,
  isPending,
  translatedText,
}: TranslatorOutputProps) => {
  return (
    <div className={styles.outputSection}>
      <div className={styles.languageHeader}>
        <div className={styles.languageLabel}>{targetLang}</div>
      </div>
      <div className={styles.outputText}>
        {isPending ? <Loading /> : translatedText}
      </div>
    </div>
  );
};