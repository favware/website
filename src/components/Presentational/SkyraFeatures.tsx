import theme from '@Config/Theme';
import { Box, Paper } from '@material-ui/core';
import Link from '@Mui/Link';
import {
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordMention,
  DiscordMessage,
  DiscordMessages
} from '@skyra/discord-components-react';
import React from 'react';
import { Twemoji } from 'react-emoji-render';

const heavyRightPointingArrow = '\u276F';

export default [
  {
    name: 'Moderation',
    text: [
      'Skyra offers all the standard moderation commands you expect, like banning, muting, kicking, softbanning and more.',
      'However she includes a wide range of unique features such as logging images and reactions, and a very advanced filter.',
      'For a full list of moderation commands, visit the commands page.'
    ].join(' '),
    previewContent: (
      <Paper elevation={8}>
        <DiscordMessages>
          <DiscordMessage profile="favna">
            Skyra, mute <DiscordMention>Kyra</DiscordMention> 10m Spamming.
          </DiscordMessage>
          <DiscordMessage profile="skyra">
            <DiscordEmbed
              slot="embeds"
              color="#FFD54F"
              authorImage="/avatars/favna.png"
              authorName="Favna#0001"
              footerImage="/avatars/skyra.png"
              timestamp={new Date()}
            >
              <strong>{heavyRightPointingArrow} Type</strong>: Temporary Mute
              <br />
              <strong>{heavyRightPointingArrow} User</strong>: Kyra#0001 (242043489611808769)
              <br />
              <strong>{heavyRightPointingArrow} Reason</strong>: Spamming.
              <br />
              <strong>{heavyRightPointingArrow} Expires In</strong>: 10 minutes
              <Box component="span" slot="footer">
                Case 11
              </Box>
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>
      </Paper>
    )
  },
  {
    name: 'Fun',
    text: [
      'Skyra can brighten up your server with many commands aimed at just adding fun, social interaction to your server',
      'She can find a random blurb of text using markov, roll a magic eightball, generate memes and much much more!'
    ].join(' '),
    previewContent: (
      <Paper elevation={8}>
        <DiscordMessages>
          <DiscordMessage profile="kyra">Skyra, markov</DiscordMessage>
          <DiscordMessage profile="skyra">
            <DiscordEmbed slot="embeds" color="#FF9D01">
              Big mama is beyond Merlin's powers I'm basing this though i like it, and calls <code>renderToString()</code> and throw if I'd add test
              to them are down to go that can be <i>reviewed</i> by myself and its loaded from google them the client due to send the avatar in
              actually did automod stuff need to the dice! You rolled the id wdym
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>
      </Paper>
    )
  },
  {
    name: 'Tools',
    text: [
      'Skyra will add a powerful toolset at your fingertips.',
      'From searching YouTube or Wikipedia to looking up games on IGDB or the Nintendo eShop or movies on TheMovieDatabase.',
      "She can also create polls, quote messages, get full size versions of users' avatars and many more tools alike!"
    ].join(' '),
    previewContent: (
      <Paper elevation={8}>
        <DiscordMessages>
          <DiscordMessage profile="kyra">Skyra, youtube Big Buck Bunny</DiscordMessage>
          <DiscordMessage profile="skyra">
            <DiscordEmbed
              slot="embeds"
              color="#FF0000"
              provider="YouTube"
              authorName="Blender"
              authorUrl="https://www.youtube.com/user/BlenderFoundation"
              url="https://youtu.be/aqz-KE-bpKQ"
              video="https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg"
              embedTitle="Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film"
              image="https://cdn.skyra.pw/dashboard/bigbuckbunny.jpg"
            ></DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>
      </Paper>
    )
  },
  {
    name: 'Pokémon',
    text: (
      <span>
        Skyra has a rich dataset of Pokémon data powered by{' '}
        <Link style={{ color: theme.palette.secondary.main, fontSize: theme.spacing(2), lineHeight: 1.5 }} href="/graphql-pokemon" nextPage>
          GraphQL Pokemon
        </Link>{' '}
        Query for data on any Pokémon, get details on items, moves and abilities, Find how types matchup or learn whether a Pokémon learns a move or
        not. Data is (nearly) always up-to-date by using the amazing GraphQL Pokémon API!
      </span>
    ),
    previewContent: (
      <Paper elevation={8}>
        <DiscordMessages>
          <DiscordMessage profile="favna">Skyra, pokedex Dragonite</DiscordMessage>
          <DiscordMessage profile="skyra">
            <DiscordEmbed
              slot="embeds"
              color="#A3501A"
              authorImage="https://cdn.skyra.pw/img/pokemon/dex.png"
              authorName="#149 - Dragonite"
              thumbnail="https://play.pokemonshowdown.com/sprites/ani/dragonite.gif"
            >
              <DiscordEmbedFields slot="fields">
                <DiscordEmbedField fieldTitle="Type(s)" inline inlineIndex={1}>
                  Dragon, Flying
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Abilities" inline inlineIndex={2}>
                  Inner Focus, <i>Multiscale</i>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Gender Ratio" inline inlineIndex={3}>
                  <Twemoji text="50% ♂️ | 50% ♀️" />
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Evolutionary line">
                  <code>Dratini</code> → <code>Dragonair</code> (30) → <strong>Dragonite (55)</strong>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Base Stats">
                  HP: <strong>91</strong>, ATK: <strong>134</strong>, DEF: <strong>95</strong>, SPA: <strong>100</strong>, SPD: <strong>100</strong>,
                  SPE: <strong>80</strong> (<i>BST</i>: <strong>600</strong>)
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="External resources">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/dragonite_%28Pokemon%29">Bulbapedia</a> |{' '}
                  <a href="https://www.serebii.net/pokedex-sm/149.shtml">Serebii</a> |{' '}
                  <a href="https://www.smogon.com/dex/sm/pokemon/dragonite">Smogon</a>
                </DiscordEmbedField>
              </DiscordEmbedFields>
              <Box component="span" slot="footer">
                1/3
              </Box>
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>
      </Paper>
    )
  },
  {
    name: 'Weeb',
    text: [
      'This is for you people of the modern age who love anime. Skyra has many anime related commands.',
      "You can make Skyra slap that annoying guy that likes Ram instead of Rem or get the cutest anime cats that you just can't wait to cuddle to death.",
      "If you're just looking for your next watch or read then Skyra has got you covered by offering you to look up anime and manga on kitsu.io."
    ].join(' '),
    previewContent: (
      <Paper elevation={8}>
        <DiscordMessages>
          <DiscordMessage profile="favna">Skyra, anime Yu-Gi-Oh</DiscordMessage>
          <DiscordMessage profile="skyra">
            <DiscordEmbed
              slot="embeds"
              color="#80C33E"
              embedTitle="Yu-Gi-Oh!"
              url="https://kitsu.io/anime/442"
              thumbnail="https://media.kitsu.io/anime/poster_images/442/original.jpg?1408441484"
            >
              <DiscordEmbedFields slot="fields">
                <DiscordEmbedField inline fieldTitle="Type" inlineIndex={1}>
                  <Twemoji text="📺 TV" />
                </DiscordEmbedField>
                <DiscordEmbedField inline fieldTitle="Score" inlineIndex={2}>
                  72.46%
                </DiscordEmbedField>
                <DiscordEmbedField inline fieldTitle="Episode(s)" inlineIndex={3}>
                  224
                </DiscordEmbedField>
                <DiscordEmbedField inline fieldTitle="Episode length" inlineIndex={1}>
                  23 minutes
                </DiscordEmbedField>
                <DiscordEmbedField inline fieldTitle="Age rating" inlineIndex={2}>
                  PG
                </DiscordEmbedField>
                <DiscordEmbedField inline fieldTitle="First air date" inlineIndex={3}>
                  April 18th 2000
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Watch it here">
                  <strong>
                    <a href="https://kitsu.io/anime/442">Yu-Gi-Oh!</a>
                  </strong>
                </DiscordEmbedField>
              </DiscordEmbedFields>
              <strong>English title:</strong> Yu-Gi-Oh!
              <br />
              {/* eslint-disable-next-line no-irregular-whitespace */}
              <strong>Japanese title:</strong> 遊☆戯☆王　デュエルモンスターズ
              <br />
              <strong>Canonical title:</strong> Yu☆Gi☆Oh! Duel Monsters
              <br />
              Legend says that the enigmatic Millennium Puzzle will grant one wish to whoever deciphers its ancient secrets. Upon solving it, high
              school student Yuugi Mutou unleashes "another Yuugi," a peculiar presence contained inside. Now, whenever he is faced with a dilemma,
              this mysterious alter ego makes an appearance and aids him in his troubles.
              <Box component="span" slot="footer">
                1/10 - © kitsu.io
              </Box>
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>
      </Paper>
    )
  }
];
