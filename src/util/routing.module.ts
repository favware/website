import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
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
} from '../views';
import { DEXA_SKILL_URL, DISCORD_SERVER_URL, RIBBON_INVITE_URL } from './constants';
import { RedirectGuard } from './redirectguard.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [MetaGuard],
    canActivateChild: [MetaGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          meta: {
            title: 'Home Sweet Home',
            description: 'For Hearth and Home!',
          },
        },
      },
      {
        path: 'ribbon',
        component: RibbonComponent,
        data: {
          meta: {
            title: 'Ribbon',
            description: 'Awesome Discord Bot!',
            'og:image': `src/assets/backdrops/ribbon.png`,
            'twitter:image': `src/assets/backdrops/ribbon.png`,
          },
        },
      },
      {
        path: 'dexa',
        component: DexaComponent,
        data: {
          meta: {
            title: 'Dexa',
            description: 'Turn Alexa into your own Dexter',
            'og:image': `src/assets/backdrops/dexa.png`,
            'twitter:image': `src/assets/backdrops/dexa.png`,
          },
        },
      },
      {
        path: 'seedcheck',
        component: SeedcheckComponent,
        data: {
          meta: {
            title: 'SeedChecker',
            description: 'Ahoy 3DS mateys',
            'og:image': `src/assets/backdrops/seedcheck.png`,
            'twitter:image': `src/assets/backdrops/seedcheck.png`,
          },
        },
      },
      {
        path: 'convertbot',
        component: ConvertbotComponent,
        data: {
          meta: {
            title: 'ConverBot',
            description: 'Unit convertion maximum',
            'og:image': `src/assets/backdrops/convertbot.png`,
            'twitter:image': `src/assets/backdrops/convertbot.png`,
          },
        },
      },
      {
        path: 'catchcalc',
        component: CatchcalcComponent,
        data: {
          meta: {
            title: 'CatchCalc',
            description: 'Gotta Catch Em\' All!',
            'og:image': `src/assets/backdrops/catchcalc.png`,
            'twitter:image': `src/assets/backdrops/catchcalc.png`,
          },
        },
      },
      {
        path: 'tava',
        component: TavaComponent,
        data: {
          meta: {
            title: 'Ta\'Va',
            description: 'Awesome Aztec Adventure Game',
            'og:image': `src/assets/backdrops/tava.png`,
            'twitter:image': `src/assets/backdrops/tava.png`,
          },
        },
      },
      {
        path: 'unescape',
        component: UnescapeComponent,
        data: {
          meta: {
            title: 'Unescape',
            description: 'Convert HTML entities to HTML characters. For example "&amp;" converts to &',
          },
        },
      },
      {
        path: 'querystring',
        component: QuerystringComponent,
        data: {
          meta: {
            title: 'Querystring',
            description: 'Querystring that is robust in its working yet remains awesome to TypeScript users',
          },
        },
      },
      {
        path: 'awesome-querystring',
        component: QuerystringComponent,
        data: {
          meta: {
            title: 'Querystring',
            description: 'Querystring that is robust in its working yet remains awesome to TypeScript users',
          },
        },
      },
      {
        path: 'converter',
        component: ConverterComponent,
        data: {
          meta: {
            title: 'Converter',
            description: 'Awesome and typesafe unit converter, supports many different systems of units',
          },
        },
      },
      {
        path: 'awesome-converter',
        component: ConverterComponent,
        data: {
          meta: {
            title: 'Converter',
            description: 'Awesome and typesafe unit converter, supports many different systems of units',
          },
        },
      },
      {
        path: 'milkylint',
        component: MilkylintComponent,
        data: {
          meta: {
            title: 'Milky-TSLint',
            description: 'TypeScript linter plugin for Gulp',
          },
        },
      },
      {
        path: 'milky-tslint',
        component: MilkylintComponent,
        data: {
          meta: {
            title: 'Milky-TSLint',
            description: 'TypeScript linter plugin for Gulp',
          },
        },
      },
      {
        path: 'yamlreader',
        component: YamlreaderComponent,
        data: {
          meta: {
            title: 'Awesome YAML Reader',
            description: 'Awesome minimal wrapper around js-yaml for directly reading in YAML files',
          },
        },
      },
      {
        path: 'awesome-yaml-reader',
        component: YamlreaderComponent,
        data: {
          meta: {
            title: 'Awesome YAML Reader',
            description: 'Awesome minimal wrapper around js-yaml for directly reading in YAML files',
          },
        },
      },
      {
        path: 'awesome-yamlreader',
        component: YamlreaderComponent,
        data: {
          meta: {
            title: 'Awesome YAML Reader',
            description: 'Awesome minimal wrapper around js-yaml for directly reading in YAML files',
          },
        },
      },
      {
        path: 'zalgo',
        component: ZalgoComponent,
        data: {
          meta: {
            title: 'Awesome Zalgo',
            description: 'Unleash and banish the Zalgo Monster!',
          },
        },
      },
      {
        path: 'awesome-zalgo',
        component: ZalgoComponent,
        data: {
          meta: {
            title: 'Awesome Zalgo',
            description: 'Unleash and banish the Zalgo Monster!',
          },
        },
      },
      {
        path: 'crypto',
        component: CryptoComponent,
        data: {
          meta: {
            title: 'Awesome Crypto',
            description: 'Easily generate a random cryptographic!',
          },
        },
      },
      {
        path: 'awesome-crypto',
        component: CryptoComponent,
        data: {
          meta: {
            title: 'Awesome Crypto',
            description: 'Easily generate a random cryptographic!',
          },
        },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          meta: {
            title: 'Contact',
            description: 'Have questions, support requests or just want to get in contact? Go here!',
          },
        },
      },
      { path: 'redirect/server', canActivate: [RedirectGuard], component: RedirectGuard, data: { externalUrl: DISCORD_SERVER_URL } },
      { path: 'redirect/ribbon', canActivate: [RedirectGuard], component: RedirectGuard, data: { externalUrl: RIBBON_INVITE_URL } },
      { path: 'redirect/dexa', canActivate: [RedirectGuard], component: RedirectGuard, data: { externalUrl: DEXA_SKILL_URL } },
      { path: 'redirect/dexa-alexa', canActivate: [RedirectGuard], component: RedirectGuard, data: { externalUrl: DEXA_SKILL_URL } },
      { path: '**', component: HomeComponent }
    ],
    data: { meta: { title: 'Home Sweet home', description: 'For Hearth and Home!' } },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class RoutingModule {
}
