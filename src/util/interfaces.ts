import { MatCarousel } from '@ngmodule/material-carousel';

type CardActions = {
  label: string;
  link: string;
  outer: boolean;
}

type CardHeader = {
  avatar: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

type Card = {
  header: CardHeader;
  content: string;
  actions: CardActions[];
}

type JSDocMeta = {
  lineno: number;
  filename: string;
  path: string;
}

export type Tile = {
  header: string;
  text?: string[];
}

export type ContactMethod = {
  logo: string;
  link: string;
  color: string;
  contact: string;
}

export type SidenavLink = {
  routerLink: string;
  label: string;
  image: string;
}

export type ButtonData = {
  text: string;
  url?: string;
  color: string;
  outer?: boolean;
  disabled?: boolean;
}

export type RibbonDocs = {
  name: string;
  aliases: string;
  description: string;
  category: string;
}

export type DexaDocs = {
  name: string;
  description: string;
  examples: string;
}

export type JSDocItem = {
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

export type JSDocJSON = {
  [propName: string]: JSDocItem[];
}

export interface IMatCarouselOptions extends MatCarousel {
  overlayColor: string;
  hideOverlay: boolean;
}

export interface IPrimaryTile extends Tile {
  subheader: string;
  buttons?: ButtonData[];
}

export interface ICodeTile extends Tile {
  codeFile: string;
}

export interface ITavaTile extends Tile {
  icon: string;
  alt?: string;
  description: string;
}

export interface IProjectTile extends Tile {
  cards: Card[];
}