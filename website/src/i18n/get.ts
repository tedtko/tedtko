import type { Locale } from "./config";
import type { Dict } from "./types";
import en from "./dictionaries/en";
import de from "./dictionaries/de";
import fr from "./dictionaries/fr";
import es from "./dictionaries/es";
import it from "./dictionaries/it";

const dicts: Record<Locale, Dict> = { en, de, fr, es, it };

export const getDict = (locale: Locale): Dict => dicts[locale];
