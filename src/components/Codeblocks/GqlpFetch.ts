export default `
import { Query } from '@favware/graphql-pokemon';

interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Omit<Query[K], '__typename'>>;
}

fetch('https://graphqlpokemon.favware.tech/', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		query: \`
		  {
			getPokemonDetails(pokemon: dragonite skip: 0 take: 2 reverse: true) {
				sprite
				num
				species
				color
			}
		  }
		\`
	})
})
	.then(res => res.json() as Promise<GraphQLPokemonResponse<'getPokemonDetails'>>)
	.then(json => console.log(json.data));
`;
