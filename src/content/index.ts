import en from './en';
import pt from './pt';
import fr from './fr';
import it from './it';
import de from './de';
import type { Locale } from './types';
export { locales, slugs, isLocale } from './types';
export type { Locale, Content, Project } from './types';
export const dictionaries = { en, pt, fr, it, de };
export const getContent = (locale: Locale) => dictionaries[locale];
export const navigation = ['work', 'services', 'about', 'contact'];
export const site = {
  name: 'SENZ',
  url: 'https://senzcompany.com',
  email: 'hello@senzcompany.com',
  founder: 'Enzo Sena',
  socials: { instagram: '', linkedin: '', github: '' },
};
