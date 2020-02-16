import { ThemePalette } from '@angular/material/core';

interface CardActions {
  label: string;
  link: string;
  outer: boolean;
}

interface CardHeader {
  avatar: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

interface Card {
  header: CardHeader;
  content: string;
  actions: CardActions[];
}

interface JSDocMeta {
  lineno: number;
  filename: string;
  path: string;
}

export interface Tile {
  header: string;
  text?: string[];
}

export interface ContactMethod {
  logo: string;
  link: string;
  color: string;
  contact: string;
}

export interface SidenavLink {
  routerLink: string;
  label: string;
  image: string;
}

export interface ButtonData {
  text: string;
  url?: string;
  color: string;
  outer?: boolean;
  disabled?: boolean;
}

export interface RibbonDocs {
  name: string;
  aliases: string;
  description: string;
  category: string;
}

export interface DexaDocs {
  name: string;
  description: string;
  examples: string;
}

export interface JSDocItem {
  id: string;
  longname: string;
  name: string;
  kind: string;
  description: string;
  meta: JSDocMeta;
  preserveName: boolean;
  examples: string[];
  category: string;
  order: number;
  returns: JSDocMeta[];

  [propName: string]: string | string[] | number | boolean | JSDocMeta | JSDocMeta[];
}

export interface JSDocJSON {
  [propName: string]: JSDocItem[];
}

export interface MatCarouselOptions {
  timings: string;
  autoplay: boolean;
  interval: number;
  loop: boolean;
  hideArrows: boolean;
  hideIndicators: boolean;
  color: ThemePalette;
  maxWidth: string;
  proportion: number;
  slides: number;
  useKeyboard: boolean;
  useMouseWheel: boolean;
  orientation: 'ltr' | 'rtl';
  overlayColor: string;
  hideOverlay: boolean;
}

export interface PrimaryTile extends Tile {
  subheader: string;
  buttons?: ButtonData[];
}

export interface CodeTile extends Tile {
  codeFile: string;
}

export interface TavaTile extends Tile {
  icon: string;
  alt?: string;
  description: string;
}

export interface ProjectTile extends Tile {
  cards: Card[];
}
