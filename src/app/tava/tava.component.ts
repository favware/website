import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ASSET_BASE_PATH, COMMON_META_TAGS, IPrimaryTile, ITavaTile, MatIconService, TAVA_SITE } from '../../util';

@Component({
  selector: 'favware-tava',
  templateUrl: './tava.component.html',
  styleUrls: ['./tava.component.scss'],
})
export class TavaComponent implements OnInit {

  constructor (private matIconService: MatIconService , private title: Title, private meta: Meta) {
    this.matIconService.init();
  }

  private readonly metadata = {
    name: 'Ta\'Va - Trial of the Sun God',
    description: 'Mythological aztec puzzle game',
    image: 'https://favna.xyz/assets/icons/tava-share.webp',
    imageAlt: 'Ta\'Va Preview Image',
  };

  public readonly headerTile: IPrimaryTile = {
    header: 'Ta\'Va - Trial of the Sun God',
    subheader: 'Embark on a mythological aztec puzzle game',
    buttons: [
      {
        text: 'Download Windows Version',
        url: `${ASSET_BASE_PATH}/website-dist/tavawindows.7z`,
        color: 'primary',
        outer: true,
      },
      {
        text: 'Download MacOS Version',
        url: `${ASSET_BASE_PATH}/website-dist/tavamac.7z`,
        color: 'primary',
        outer: true,
      },
      {
        text: 'Visit game website',
        url: TAVA_SITE,
        color: 'secondary',
        outer: true,
      }
    ],
  };

  public readonly gameTileHeader: IPrimaryTile = {
    header: 'The Game',
    subheader: 'Ta\'Va is a puzzle/platform game made with Unity',
  };

  public readonly gameTile: ITavaTile[] = [
    {
      icon: 'mat-tava-puzzle-icon',
      header: 'Puzzles',
      description: 'One of the major game elements of Ta\'Va is the puzzles, during the game you will be solving puzzles using the abilities gained throughout the game.',
    },
    {
      icon: 'mat-tava-star-icon',
      header: 'Challenging',
      description: 'During the game you will be faced with many different challenges, from being chased down by boars to scaling giant towers.',
    },
    {
      icon: 'mat-tava-temple-icon',
      header: 'Mythological',
      description: 'The world of Ta\'Va is a mythological place. During your travels you will explore floating islands, mythical creatures and the plane of the gods.',
    }
  ];

  public readonly mediaTileHeader: IPrimaryTile = {
    header: 'Media',
    subheader: '',
  };

  public readonly mediaTile: ITavaTile[] = [
    {
      icon: `assets/screenshots/tava/village.webp`,
      alt: 'village_screenshot',
      header: 'Explore',
      description: 'Mesoamerican mythology',
    },
    {
      icon: `assets/screenshots/tava/cave.webp`,
      alt: 'cave_screenshot',
      header: 'Challenges',
      description: 'The Boar Chase Challenge',
    },
    {
      icon: `assets/screenshots/tava/puzzle.webp`,
      alt: 'puzzle_screenshot',
      header: 'Puzzles',
      description: 'Push the boulders!',
    }
  ];

  public readonly teamTileHeader: IPrimaryTile = {
    header: 'Our Amazing Team',
    subheader: '',
  };

  public readonly teamTileFirstLine: ITavaTile[] = [
    {
      icon: `assets/screenshots/tava/art.webp`,
      alt: 'art_team_photo',
      header: 'Art Team',
      description: '',
    },
    {
      icon: `assets/screenshots/tava/conceptowner.webp`,
      alt: 'conceptowner_photo',
      header: 'Concept Owner',
      description: '',
    },
    {
      icon: `assets/screenshots/tava/gameplay.webp`,
      alt: 'gameplay_team_photo',
      header: 'Gameplay Team',
      description: '',
    }
  ];

  public readonly teamTileSecondLine: ITavaTile[] = [
    {
      icon: `assets/screenshots/tava/programming.webp`,
      alt: 'programming_team_photo',
      header: 'Programming Team',
      description: '',
    },
    {
      icon: `assets/screenshots/tava/sound.webp`,
      alt: 'sound_team_photo',
      header: 'Sound Owner',
      description: '',
    }
  ];

  ngOnInit (): void {
    this.title.setTitle(this.metadata.name);
    this.meta.addTags([
      { name: 'og:url', content: '/tava' },
      { name: 'og:title', content: this.metadata.name },
      { name: 'og:description', content: this.metadata.description },
      { name: 'og:image', content: this.metadata.image },
      { name: 'og:image:alt', content: this.metadata.imageAlt },
      { name: 'twitter:title', content: this.metadata.name },
      { name: 'twitter:description', content: this.metadata.description },
      { name: 'twitter:image', content: this.metadata.image },
      { name: 'twitter:image:alt', content: this.metadata.imageAlt },
      ...COMMON_META_TAGS
    ]);
  }
}
