import { DirectionType, LanguageType } from "@/types";
import { LANGUAGES } from "@/constants";

const getTranslationDirection = (sourceLang: LanguageType): DirectionType => {
  return sourceLang === LANGUAGES.PANGYO ? "to_korean" : "to_pangyo";
};

export default getTranslationDirection;