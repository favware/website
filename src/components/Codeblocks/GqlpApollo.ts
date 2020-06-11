export default `
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import fetch from 'cross-fetch';
import { Query, QueryGetPokemonDetailsByFuzzyArgs } from '@favware/graphql-pokemon';

type GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> = Record<K, Omit<Query[K], '__typename'>>;

const getPokemonDetailsByFuzzy = gql\`
  query pokemonDetails($pokemon: String!) {
    getPokemonDetailsByFuzzy(pokemon: $pokemon, skip: 0, take: 1, reverse: true) {
      num
      sprite
      species
      color
    }
  }
\`;

class GraphqlFetch {
  constructor() {
    this.apollo = new ApolloClient({
      uri: 'https://graphqlpokemon.favware.tech',
      fetch
    });
  }

  async getPokemonData(pokemon) {
    const { data } = await this.apollo.query<GraphQLPokemonResponse<'getPokemonDetailsByFuzzy'>, QueryGetPokemonDetailsByFuzzyArgs>({
      query: constants.getPokemonDetailsByFuzzy,
      variables: { pokemon }
    });

    const { getPokemonDetailsByFuzzy: pokeData } = data;

    return pokeData;
  }
}

const graphqlFetch = new GraphqlFetch();

const data = await graphqlFetch.getPokemonData('dragonite');
`;
