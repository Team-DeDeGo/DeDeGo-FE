import { useState, useCallback, useMemo } from "react";
import { useTranslateMutation } from "@/service/translator/translator.mutation";
import { Toastify } from "@/components/Toastify";
import { LANGUAGES, TOAST } from "@/constants";
import { getTranslationDirection, copyToClipboard } from "@/utils";
import type { responseType, LanguageType, termType } from "@/types";

interface TermMapItem extends termType {
  index: number;
}

export const useTranslator = () => {
  const [inputText, setInputText] = useState("");
  const [translateResult, setTranslateResult] = useState<responseType | null>(
    null
  );
  const [sourceLang, setSourceLang] = useState<LanguageType>(LANGUAGES.PANGYO);

  const { mutate, isPending } = useTranslateMutation();
  
  const handleSwitchLanguage = useCallback(() => {
    if (isPending) return;
    setSourceLang((prev) =>
      prev === LANGUAGES.PANGYO ? LANGUAGES.KOREAN : LANGUAGES.PANGYO
    );
  }, [isPending]);

  const handleTranslate = useCallback(() => {
    const trimmedText = inputText.trim();

    if (!trimmedText) {
      Toastify({ content: TOAST.NO_INPUT, type: "info" });
      return;
    }

    const direction = getTranslationDirection(sourceLang);

    mutate(
      { text: trimmedText, direction },
      {
        onSuccess: setTranslateResult,
        onError: (error) => {
          console.error("Translation error:", error);
          Toastify({ content: TOAST.TRANSLATE_ERROR, type: "error" });
        },
      }
    );
  }, [inputText, sourceLang, mutate]);

  const handleCopy = useCallback(async () => {
    if (!translateResult?.translated) {
      Toastify({ content: TOAST.NO_RESULT, type: "info" });
      return;
    }

    try {
      await copyToClipboard(translateResult.translated);
      Toastify({ content: TOAST.COPY_SUCCESS, type: "info" });
    } catch (error) {
      console.error("Copy error:", error);
      Toastify({ content: TOAST.COPY_ERROR, type: "error" });
    }
  }, [translateResult?.translated]);
  
  const termMap = useMemo(() => {
    const terms = translateResult?.terms || [];
    if (!terms.length) return new Map<string, TermMapItem>();
    
    return new Map(
      terms
        .filter((term) => term.original)
        .map((term, index) => [
          term.original.toLowerCase(), 
          { ...term, index }
        ])
    );
  }, [translateResult?.terms]);
  
  const formattedTranslation = useMemo(() => {
    const translatedText = translateResult?.translated || "";
    
    if (!translatedText) return "";
    if (!termMap.size) return translatedText;

    const regex = new RegExp(
      `(${Array.from(termMap.keys()).join("|")})`, 
      "gi"
    );
    
    return translatedText.split(regex);
  }, [translateResult?.translated, termMap]);
  
  const getTermData = useCallback((text: string): TermMapItem | undefined => {
    return termMap.get(text.toLowerCase());
  }, [termMap]);

  const [activeTermIndex, setActiveTermIndex] = useState<number | null>(null);

  const handleTermHover = useCallback((index: number) => {
    setActiveTermIndex(index);
  }, []);

  const handleTermLeave = useCallback(() => {
    setActiveTermIndex(null);
  }, []);

  return {
    inputText,
    setInputText,
    translateResult,
    sourceLang,
    isPending,
    handleSwitchLanguage,
    handleTranslate,
    handleCopy,
    termMap,
    formattedTranslation,
    getTermData,
    activeTermIndex,
    handleTermHover,
    handleTermLeave,
  };
};