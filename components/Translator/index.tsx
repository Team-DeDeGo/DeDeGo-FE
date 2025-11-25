"use client";

import * as styles from "./style.css";
import { TranslatorInput } from "./Input";
import { TranslatorOutput } from "./Output";
import { TermsList } from "./List";
import { TranslatorFooter } from "./Footer";
import { useTranslator } from "./useTranslator";
import { getOppositeLanguage } from "@/utils";

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

  const targetLang = getOppositeLanguage(sourceLang);

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
            translatedText={translateResult?.translated || ""}
          />
        </div>

        <TermsList terms={translateResult?.terms ?? []} />

        <TranslatorFooter
          isPending={isPending}
          hasTranslation={!!translateResult?.translated}
          onTranslate={handleTranslate}
          onCopy={handleCopy}
        />
      </div>
    </div>
  );
}