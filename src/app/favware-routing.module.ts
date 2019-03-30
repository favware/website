import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DEXA_SKILL_URL, DISCORD_SERVER_URL, RedirectGuard, RIBBON_INVITE_URL } from '../util';

import {
  CatchcalcComponent,
  ContactComponent,
  ConvertbotComponent,
  ConverterComponent,
  CryptoComponent,
  DexaComponent,
  HomeComponent,
  MilkylintComponent,
  QuerystringComponent,
  RibbonComponent,
  SeedcheckComponent,
  TavaComponent,
  UnescapeComponent,
  YamlreaderComponent,
  ZalgoComponent
} from '.';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ribbon',
    component: RibbonComponent,
  },
  {
    path: 'dexa',
    component: DexaComponent,
  },
  {
    path: 'seedcheck',
    component: SeedcheckComponent,
  },
  {
    path: 'convertbot',
    component: ConvertbotComponent,
  },
  {
    path: 'catchcalc',
    component: CatchcalcComponent,
  },
  {
    path: 'tava',
    component: TavaComponent,
  },
  {
    path: 'unescape',
    component: UnescapeComponent,
  },
  {
    path: 'querystring',
    component: QuerystringComponent,
  },
  {
    path: 'awesome-querystring',
    component: QuerystringComponent,
  },
  {
    path: 'converter',
    component: ConverterComponent,
  },
  {
    path: 'awesome-converter',
    component: ConverterComponent,
  },
  {
    path: 'milkylint',
    component: MilkylintComponent,
  },
  {
    path: 'milky-tslint',
    component: MilkylintComponent,
  },
  {
    path: 'yamlreader',
    component: YamlreaderComponent,
  },
  {
    path: 'awesome-yaml-reader',
    component: YamlreaderComponent,
  },
  {
    path: 'awesome-yamlreader',
    component: YamlreaderComponent,
  },
  {
    path: 'zalgo',
    component: ZalgoComponent,
  },
  {
    path: 'awesome-zalgo',
    component: ZalgoComponent,
  },
  {
    path: 'crypto',
    component: CryptoComponent,
  },
  {
    path: 'awesome-crypto',
    component: CryptoComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: 'redirect/server', canActivate: [RedirectGuard], component: RedirectGuard, data: { externalUrl: DISCORD_SERVER_URL } },
  { path: 'redirect/ribbon', canActivate: [RedirectGuard], component: RedirectGuard, data: { externalUrl: RIBBON_INVITE_URL } },
  { path: 'redirect/dexa', canActivate: [RedirectGuard], component: RedirectGuard, data: { externalUrl: DEXA_SKILL_URL } },
  { path: 'redirect/dexa-alexa', canActivate: [RedirectGuard], component: RedirectGuard, data: { externalUrl: DEXA_SKILL_URL } },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class FavwareRoutingModule {
}
