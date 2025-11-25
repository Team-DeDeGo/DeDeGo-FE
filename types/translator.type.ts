import { LANGUAGES } from "@/constants";
import { translatorType } from "./translator.interface";

export type DirectionType = translatorType["direction"];
export type LanguageType = (typeof LANGUAGES)[keyof typeof LANGUAGES];