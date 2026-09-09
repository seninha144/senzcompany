import type { Locale } from './types';

// Add an approved founder photograph under public/ when supplied.
// This configuration is independent from the portfolio media.
export const studioMedia: {
  portrait: { src: string; width: number; height: number; alt: Record<Locale, string> } | null;
} = { portrait: null };
