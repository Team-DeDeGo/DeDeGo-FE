"use client";

import * as styles from "./style.css";
import { Loading } from "../Loading";
import type { LanguageType, termType } from "@/types";
import { useMemo, useCallback } from "react";

interface TranslatorOutputProps {
  targetLang: LanguageType;
  isPending: boolean;
  translatedText: string;
  terms?: termType[];
  onTermClick?: (index: number) => void;
}

interface TermMapItem extends termType {
  index: number;
}

export const TranslatorOutput = ({
  targetLang,
  isPending,
  translatedText,
  terms = [],
  onTermClick,
}: TranslatorOutputProps) => {
  const handleTermHover = useCallback(
    (index: number) => {
      onTermClick?.(index);
    },
    [onTermClick]
  );

  const termMap = useMemo(() => {
    if (!terms.length) return new Map<string, TermMapItem>();

    return new Map(
      terms
        .filter((term) => term.original)
        .map((term, index) => [term.original.toLowerCase(), { ...term, index }])
    );
  }, [terms]);

  const formattedText = useMemo(() => {
    if (!translatedText) return "";
    if (!termMap.size) return translatedText;

    const regex = new RegExp(`(${Array.from(termMap.keys()).join("|")})`, "gi");
    const parts = translatedText.split(regex);

    return parts
      .filter((part) => part)
      .map((part, index) => {
        const termData = termMap.get(part.toLowerCase());

        if (termData) {
          return (
            <span
              key={`term-${termData.index}-${index}`}
              className={styles.termWrapper}
            >
              <span
                className={styles.underlinedTerm}
                onMouseEnter={() => handleTermHover(termData.index)}
              >
                {part}
              </span>
              <span className={styles.termLabel}>{termData.term}</span>
            </span>
          );
        }

        return <span key={`text-${index}`}>{part}</span>;
      });
  }, [translatedText, termMap, handleTermHover]);

  return (
    <div className={styles.outputSection}>
      <div className={styles.languageHeader}>
        <div className={styles.languageLabel}>{targetLang}</div>
      </div>
      <div className={styles.outputText}>
        {isPending ? <Loading /> : formattedText}
      </div>
    </div>
  );
};