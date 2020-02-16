import { Component, OnInit } from '@angular/core';
import { SeoService, SeoTags } from '@services/seo.service';
import { GRAPHQL_POKEMON_GITHUB_URL, GRAPHQL_POKEMON_PLAYGROUND, GRAPHQL_POKEMON_YARN } from '@util/constants';
import { CodeTile, PrimaryTile } from '@util/interfaces';
import ngForTrackBy from '@util/ngForTrackBy';
import { oneLine } from 'common-tags';

@Component({
  selector: 'favware-graphql-pokemon',
  templateUrl: './graphql-pokemon.component.html',
  styleUrls: ['./graphql-pokemon.component.scss']
})
export class GraphqlPokemonComponent implements OnInit {
  public ngForTrackBy = ngForTrackBy;
  public headerTile: PrimaryTile = {
    header: 'GraphQL-Pokemon',
    subheader: 'GraphQL API for Pokémon data',
    buttons: [
      {
        text: 'yarn add --dev @favware/graphql-pokemon',
        color: 'accent',
        disabled: true
      },
      {
        text: 'View on Yarn',
        url: GRAPHQL_POKEMON_YARN,
        color: 'yarn',
        outer: true
      },
      {
        text: 'View on GitHub',
        url: GRAPHQL_POKEMON_GITHUB_URL,
        color: 'github',
        outer: true
      },
      {
        text: 'Use GraphQL Playground',
        url: GRAPHQL_POKEMON_PLAYGROUND,
        color: 'playground',
        outer: true
      }
    ]
  };
  public aboutTile: PrimaryTile = {
    header: 'About',
    subheader: '',
    text: [
      oneLine`
      The GraphQL Pokemon API is my first venture into building an open API offering data to consumers.
      I've written the API using GraphQL and type-graphql to achieve type-safety both in development and deployment.
      The API has many queries, which can best be explored using the [GraphQL Playground](${GRAPHQL_POKEMON_PLAYGROUND})`
    ]
  };
  public graphqlUsageTile: CodeTile = {
    header: 'Usage - Fetch',
    codeFile: '/assets/code/graphql-pokemon.ts'
  };
  public metadata: SeoTags = {
    title: 'Graphql-Pokemon',
    description: 'GraphQL API for Pokémon data',
    image: 'https://favware.tech/assets/icons/gqlp.png',
    imageAlt: 'GraphQL-Pokemon Logo',
    url: 'graphql-pokemon',
    summary: 'GraphQL based API offering a massive amount of Pokémon data',
    keywords: ['graphql', 'pokemon', 'api', 'favware']
  };

  constructor(private seo: SeoService) {}

  public ngOnInit(): void {
    this.seo.generateTags({
      title: this.metadata.title,
      description: this.metadata.description,
      image: this.metadata.image,
      imageAlt: this.metadata.imageAlt,
      url: this.metadata.url,
      summary: this.metadata.summary,
      keywords: this.metadata.keywords
    });
  }
}
