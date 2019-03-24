import { Component } from '@angular/core';
import { ASSET_BASE_PATH, IPrimaryTile, ITavaTile, MatIconService, TAVA_SITE } from 'src/util';

@Component({
  selector: 'favware-tava',
  templateUrl: './tava.component.html',
  styleUrls: ['./tava.component.scss'],
})
export class TavaComponent {
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
      icon: `${ASSET_BASE_PATH}/website-project-screenshots/tava/village.jpg`,
      alt: 'village_screenshot',
      header: 'Explore',
      description: 'Mesoamerican mythology',
    },
    {
      icon: `${ASSET_BASE_PATH}/website-project-screenshots/tava/cave.jpg`,
      alt: 'cave_screenshot',
      header: 'Challenges',
      description: 'The Boar Chase Challenge',
    },
    {
      icon: `${ASSET_BASE_PATH}/website-project-screenshots/tava/puzzle.jpg`,
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
      icon: `${ASSET_BASE_PATH}/website-project-screenshots/tava/art.jpg`,
      alt: 'art_team_photo',
      header: 'Art Team',
      description: '',
    },
    {
      icon: `${ASSET_BASE_PATH}/website-project-screenshots/tava/conceptowner.jpg`,
      alt: 'conceptowner_photo',
      header: 'Concept Owner',
      description: '',
    },
    {
      icon: `${ASSET_BASE_PATH}/website-project-screenshots/tava/gameplay.jpg`,
      alt: 'gameplay_team_photo',
      header: 'Gameplay Team',
      description: '',
    }
  ];

  public readonly teamTileSecondLine: ITavaTile[] = [
    {
      icon: `${ASSET_BASE_PATH}/website-project-screenshots/tava/programming.jpg`,
      alt: 'programming_team_photo',
      header: 'Programming Team',
      description: '',
    },
    {
      icon: `${ASSET_BASE_PATH}/website-project-screenshots/tava/sound.jpg`,
      alt: 'sound_team_photo',
      header: 'Sound Owner',
      description: '',
    }
  ];

  private matIconService: MatIconService;

  constructor (matIconService: MatIconService) {
    this.matIconService = matIconService;
    this.matIconService.init();
  }
}
