import { MatCarousel } from '@ngmodule/material-carousel';

export interface ITile {
  header: string;
  text?: string[];
}

interface ICardActions {
  label: string;
  link: string;
  outer: boolean;
}

interface ICardHeader {
  avatar: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

interface ICard {
  header: ICardHeader;
  content: string;
  actions: ICardActions[];
}

interface IJSDocMeta {
  lineno: number;
  filename: string;
  path: string;
}

export interface IContactMethod {
  logo: string;
  link: string;
  color: string;
  contact: string;
}

export interface IPrimaryTile extends ITile {
  subheader: string;
  buttons?: IButtonData[];
}

export interface IProjectTile extends ITile {
  cards: ICard[];
}

export interface ISidenavLink {
  routerLink: string;
  label: string;
  image: string;
}

export interface IButtonData {
  text: string;
  url: string;
  color: string;
  outer: boolean;
}

export interface IRibbonDocs {
  name: string;
  aliases: string;
  description: string;
  category: string;
}

export interface IDexaDocs {
  name: string;
  description: string;
  examples: string;
}

export interface IJSDocItem {
  id: string;
  longname: string;
  name: string;
  kind: string;
  description: string;
  meta: IJSDocMeta;
  preserveName: boolean;
  examples: string[];
  category: string;
  order: number;
  returns: IJSDocMeta[];

  [propName: string]: string | string[] | number | boolean | IJSDocMeta | IJSDocMeta[];
}

export interface IJSDocJSON {
  [propName: string]: IJSDocItem[];
}

export interface IMatCarouselOptions extends MatCarousel {
  overlayColor: string;
  hideOverlay: boolean;
}
