export type Cat = 'mesas' | 'monitores' | 'brazos' | 'oficina' | 'sillas' | 'macs';

export interface Offer {
  store: string;
  price: number | null;
  url: string;
}

export interface Item {
  id: string;
  cat: Cat;
  name: string;
  store: string;
  url: string;
  image?: string | null;
  price: number | null;
  /** Cuántas unidades cuenta el configurador (p. ej. 2 monitores). */
  qty: number;
  priceNote?: string | null;
  specs: [string, string][];
  pros?: string | null;
  cons?: string | null;
  badge?: string | null;
  offers?: Offer[];
}

export interface Section {
  cat: Cat;
  title: string;
  kicker: string;
  intro: string;
  pick: string;
  items: Item[];
}
