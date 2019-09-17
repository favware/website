import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEXA_SKILL_URL, DISCORD_SERVER_URL, GITHUB_PROFILE, RIBBON_INVITE_URL } from '@util/constants';
import { RedirectGuardComponent } from '@util/redirectguard.guard';
import { CatchcalcComponent } from './catchcalc/catchcalc.component';
import { ContactComponent } from './contact/contact.component';
import { ConvertbotComponent } from './convertbot/convertbot.component';
import { ConverterComponent } from './converter/converter.component';
import { CreateDjsBotComponentComponent } from './create-djs-bot-component/create-djs-bot-component.component';
import { CryptoComponent } from './crypto/crypto.component';
import { DexaComponent } from './dexa/dexa.component';
import { HomeComponent } from './home/home.component';
import { MilkylintComponent } from './milkylint/milkylint.component';
import { QuerystringComponent } from './querystring/querystring.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { SeedcheckComponent } from './seedcheck/seedcheck.component';
import { TavaComponent } from './tava/tava.component';
import { UnescapeComponent } from './unescape/unescape.component';
import { YamlreaderComponent } from './yamlreader/yamlreader.component';
import { ZalgoComponent } from './zalgo/zalgo.component';


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
    redirectTo: '/querystring',
  },
  {
    path: 'converter',
    component: ConverterComponent,
  },
  {
    path: 'awesome-converter',
    redirectTo: '/converter',
  },
  {
    path: 'milkylint',
    component: MilkylintComponent,
  },
  {
    path: 'milky-tslint',
    redirectTo: '/milkylint',
  },
  {
    path: 'yamlreader',
    component: YamlreaderComponent,
  },
  {
    path: 'awesome-yaml-reader',
    redirectTo: '/yamlreader',
  },
  {
    path: 'awesome-yamlreader',
    redirectTo: '/yamlreader',
  },
  {
    path: 'zalgo',
    component: ZalgoComponent,
  },
  {
    path: 'awesome-zalgo',
    redirectTo: '/zalgo',
  },
  {
    path: 'crypto',
    component: CryptoComponent,
  },
  {
    path: 'awesome-crypto',
    redirectTo: '/crypto',
  },
  {
    path: 'create-djsbot',
    component: CreateDjsBotComponentComponent,
  },
  {
    path: 'create-discordbot',
    redirectTo: '/create-djsbot',
  },
  {
    path: 'create-bot',
    redirectTo: '/create-djsbot',
  },
  {
    path: 'djsbot',
    redirectTo: '/create-djsbot',
  },
  {
    path: 'discordbot',
    redirectTo: '/create-djsbot',
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: 'redirect/server', canActivate: [RedirectGuardComponent], component: RedirectGuardComponent, data: { externalUrl: DISCORD_SERVER_URL } },
  { path: 'redirect/github', canActivate: [RedirectGuardComponent], component: RedirectGuardComponent, data: { externalUrl: GITHUB_PROFILE } },
  { path: 'redirect/ribbon', canActivate: [RedirectGuardComponent], component: RedirectGuardComponent, data: { externalUrl: RIBBON_INVITE_URL } },
  { path: 'redirect/dexa', canActivate: [RedirectGuardComponent], component: RedirectGuardComponent, data: { externalUrl: DEXA_SKILL_URL } },
  { path: 'redirect/dexa-alexa', canActivate: [RedirectGuardComponent], component: RedirectGuardComponent, data: { externalUrl: DEXA_SKILL_URL } },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    RedirectGuardComponent
  ],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule],
  entryComponents: [RedirectGuardComponent],
})
export class FavwareRoutingModule {
}
