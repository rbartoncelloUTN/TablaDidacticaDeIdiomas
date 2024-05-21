export enum Languages {
  ES = 'es',
  PO = 'po',
  EN = 'en',
}
export enum Themes {
  COLORS = 'colors',
  NUMBERS = 'numbers',
  ANIMALS = 'animals',
}

export interface OptionsGame {
  language: Languages;
  theme: Themes;
}
