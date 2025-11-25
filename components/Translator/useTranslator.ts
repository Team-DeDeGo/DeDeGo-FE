import { useState, useCallback } from "react";
import { useTranslateMutation } from "@/service/translator/translator.mutation";
import { Toastify } from "@/components/Toastify";
import { LANGUAGES, TOAST } from "@/constants";
import { getTranslationDirection, copyToClipboard } from "@/utils";
import type { responseType, LanguageType } from "@/types";

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
  }, [inputText, sourceLang, mutate, isPending]);

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

  return {
    inputText,
    setInputText,
    translateResult,
    sourceLang,
    isPending,
    handleSwitchLanguage,
    handleTranslate,
    handleCopy,
  };
};
