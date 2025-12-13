"use client";

import * as styles from "./style.css";
import { TranslatorInput } from "./Input";
import { TranslatorOutput } from "./Output";
import { TermsList } from "./List";
import { TranslatorFooter } from "./Footer";
import { useTranslator } from "./useTranslator";
import { getOppositeLanguage } from "@/utils";
import { useState, useCallback, useMemo } from "react";
import type { termType } from "@/types";

const EMPTY_TERMS: termType[] = [];

export default function Translator() {
  const {
    inputText,
    setInputText,
    translateResult,
    sourceLang,
    isPending,
    handleSwitchLanguage,
    handleTranslate,
    handleCopy,
  } = useTranslator();

  const [scrollToTermIndex, setScrollToTermIndex] = useState<number | undefined>();

  const targetLang = getOppositeLanguage(sourceLang);

  const handleTermClick = useCallback((index: number) => {
    setScrollToTermIndex(index);
    setTimeout(() => setScrollToTermIndex(undefined), 100);
  }, []); 

  const terms = useMemo(
    () => translateResult?.terms ?? EMPTY_TERMS,
    [translateResult?.terms]
  );

  const translatedText = useMemo(
    () => translateResult?.translated || "",
    [translateResult?.translated]
  );

  const hasTranslation = useMemo(
    () => !!translateResult?.translated,
    [translateResult?.translated]
  );

  return (
    <div className={styles.container}>
      <div className={styles.translatorBox}>
        <div className={styles.mainContent}>
          <TranslatorInput
            sourceLang={sourceLang}
            inputText={inputText}
            isPending={isPending}
            onInputChange={setInputText}
            onSwitchLanguage={handleSwitchLanguage}
          />
          <TranslatorOutput
            targetLang={targetLang}
            isPending={isPending}
            translatedText={translatedText}
            terms={terms}
            onTermClick={handleTermClick}
          />
        </div>

        <TermsList
          terms={terms}
          scrollToIndex={scrollToTermIndex}
        />

        <TranslatorFooter
          isPending={isPending}
          hasTranslation={hasTranslation}
          onTranslate={handleTranslate}
          onCopy={handleCopy}
        />
      </div>
    </div>
  );
}