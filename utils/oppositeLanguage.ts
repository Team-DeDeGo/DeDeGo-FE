import { LanguageType } from "@/types";
import { LANGUAGES } from "@/constants";

const getOppositeLanguage = (lang: LanguageType): LanguageType => {
  return lang === LANGUAGES.PANGYO ? LANGUAGES.KOREAN : LANGUAGES.PANGYO;
};

export default getOppositeLanguage;
