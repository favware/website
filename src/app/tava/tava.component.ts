import { Component, OnInit } from '@angular/core';
import { MatIconService } from '@services/mat-icon.service';
import { SeoService } from '@services/seo.service';
import { ASSET_BASE_PATH, TAVA_SITE } from '@util/constants';
import { IPrimaryTile, ITavaTile } from '@util/interfaces';

@Component({
  selector: 'favware-tava',
  templateUrl: './tava.component.html',
  styleUrls: ['./tava.component.scss'],
})
export class TavaComponent implements OnInit {

  headerTile: IPrimaryTile = {
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
  gameTileHeader: IPrimaryTile = {
    header: 'The Game',
    subheader: 'Ta\'Va is a puzzle/platform game made with Unity',
  };
  gameTile: ITavaTile[] = [
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
  mediaTileHeader: IPrimaryTile = {
    header: 'Media',
    subheader: '',
  };
  mediaTile: ITavaTile[] = [
    {
      icon: `/assets/screenshots/tava/village.png`,
      alt: 'village_screenshot',
      header: 'Explore',
      description: 'Mesoamerican mythology',
    },
    {
      icon: `/assets/screenshots/tava/cave.png`,
      alt: 'cave_screenshot',
      header: 'Challenges',
      description: 'The Boar Chase Challenge',
    },
    {
      icon: `/assets/screenshots/tava/puzzle.png`,
      alt: 'puzzle_screenshot',
      header: 'Puzzles',
      description: 'Push the boulders!',
    }
  ];
  teamTileHeader: IPrimaryTile = {
    header: 'Our Amazing Team',
    subheader: '',
  };
  teamTileFirstLine: ITavaTile[] = [
    {
      icon: `/assets/screenshots/tava/art.png`,
      alt: 'art_team_photo',
      header: 'Art Team',
      description: '',
    },
    {
      icon: `/assets/screenshots/tava/conceptowner.png`,
      alt: 'conceptowner_photo',
      header: 'Concept Owner',
      description: '',
    },
    {
      icon: `/assets/screenshots/tava/gameplay.png`,
      alt: 'gameplay_team_photo',
      header: 'Gameplay Team',
      description: '',
    }
  ];
  teamTileSecondLine: ITavaTile[] = [
    {
      icon: `/assets/screenshots/tava/programming.png`,
      alt: 'programming_team_photo',
      header: 'Programming Team',
      description: '',
    },
    {
      icon: `/assets/screenshots/tava/sound.png`,
      alt: 'sound_team_photo',
      header: 'Sound Owner',
      description: '',
    }
  ];
  metadata = {
    title: 'Ta\'Va - Trial of the Sun God',
    description: 'Mythological aztec puzzle game',
    image: 'https://favna.xyz/assets/icons/tava-share.png',
    imageAlt: 'Ta\'Va Preview Image',
    url: '/tava',
    summary: 'An epic puzzle adventure in a mythological aztec world. A game build by students in the Unity 3D engine.',
    keywords: ['unity', 'videogame', 'game', 'adventure', 'puzzle', 'action', 'studentgame', 'student', 'aztec', 'mythology', 'mythological'],
  };

  constructor (private matIconService: MatIconService, private seo: SeoService) {
    this.matIconService.init();
  }

  ngOnInit (): void {
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
      summary: this.metadata.summary,
      keywords: this.metadata.keywords,
    });
  }
}
