import { Component } from '@angular/core';
import { oneLine } from 'common-tags';
import moment from 'moment';
import {
    ASSET_BASE_PATH,
    AWESOME_CONVERTER_GITHUB,
    AWESOME_CONVERTER_NPM,
    AWESOME_QUERYSTRING_GITHUB,
    AWESOME_QUERYSTRING_NPM,
    CATCHCALC_GITHUB_URL,
    CONTACT_MAIL,
    CONVERTBOT_GITHUB_URL,
    DEXA_GITHUB_URL,
    DEXA_SKILL_URL,
    DISCORD_SERVER_URL,
    IPrimaryTile,
    IProjectTile,
    ITile,
    RIBBON_GITHUB_URL,
    RIBBON_INVITE_URL,
    RIBBONZONE_GITHUB_URL,
    SEEDCHECKER_GITHUB_URL,
    UNESCAPE_GITHUB,
    UNESCAPE_NPM
} from '../../util';

@Component({
    selector: 'favware-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public readonly headerTile: IPrimaryTile = {
        header: 'Developer in Web, NodeJS, Unity3D and Java',
        subheader: 'From Web design to discord bots to indie games',
        text: ['Scroll down to see my projects'],
    };
    public readonly aboutTile: ITile = {
        header: 'About me',
        text: [
            'Greetings, My name is Jeroen Claassens (a.k.a. Favna)',
            oneLine`
                    Currently ${moment().diff('1995-02-21', 'years')} years old I am a developer hailing from The Netherlands.
                    Ever since I was a boy I have been a tech enthusiast with my main focus being the software side of the ICT.
                    On High School my first choice of optional subject was Informatics and this quickly showed to be my calling.
                    After I graduated from High School I had no seconds thoughts about my next step - Software Engineering at a University.
                    The university of choice ended up being The Hague University of Applied Sciences.
                    I am currently in my last of the 4 years of this study and expect to be able to receive my Bachelor of ICT in July 2018.`,
            oneLine`
                    In my free time I have delved in a whole slew of small projects and some of these are used very actively!
                    Some notable mentions are my Discord bot "Ribbon" build with NodeJS and a Nintendo 3DS Utility "SEEDChecker" build with Java.
                    I have also learned C# as I have been delving into the Unity3D Game Engine for the Game Design minor
                    I have followed as part of my Software Engineering major.
                    Currently I am working at a frontend development job at Rijkswaterstaat as part of my graduation assignment.`,
            oneLine`
                   I still have a very broad future ahead of me but I hope to spend at least some of it in Game-
                   or frontend software development.
                   Playing games has always been my biggest hobby and now that I have had a taste of creating games I really
                   feel like it would be a perfect match for me, however I have also grown a passion for the frontend side of
                   regular development so I could totally see myself in that branch as well.`
        ],
    };
    public readonly projectsTile: IProjectTile = {
        header: 'My Projects',
        cards: [
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/ribbon.png`,
                    imageAlt: 'Ribbon',
                    title: 'Ribbon',
                    subtitle: 'Discord Bot',
                },
                content: oneLine`Ever expanding all purpose Discord bot build with Discord.JS in the Commando framework. Want a feature? Request it!`,
                actions: [
                    { label: 'add bot', link: RIBBON_INVITE_URL, outer: true },
                    { label: 'website', link: '/ribbon', outer: false },
                    { label: 'support', link: DISCORD_SERVER_URL, outer: true },
                    { label: 'github', link: RIBBON_GITHUB_URL, outer: true }
                ],
            },
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/ribbonzone.png`,
                    imageAlt: 'RibbonZone',
                    title: 'RibbonZone',
                    subtitle: 'Activity Simulator',
                },
                content: oneLine`Ambient life simulation driven by user activity for signed up servers where Ribbon is a member`,
                actions: [
                    { label: 'website', link: '/ribbonzone', outer: false },
                    { label: 'github', link: RIBBONZONE_GITHUB_URL, outer: true }
                ],
            },
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/sentience.png`,
                    imageAlt: 'Discord Sentience',
                    title: 'Discord Sentience',
                    subtitle: 'Cyberdyne Systems',
                },
                content: oneLine`Give your Discord Bot a sentience using this amazing webapp. Login with your bot token and talk as the bot`,
                actions: [
                    { label: 'website', link: '/sentience', outer: false },
                    { label: 'support', link: DISCORD_SERVER_URL, outer: true }
                ],
            },
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/dexa.png`,
                    imageAlt: 'Dexa',
                    title: 'Dexa',
                    subtitle: 'Advanced PokéDex Skill',
                },
                content: oneLine`Dexa is a PokéDex Skill for Alexa that gives you information on Pokémon, Items, Abilities, Moves and type matchups`,
                actions: [
                    { label: 'add skill', link: DEXA_SKILL_URL, outer: true },
                    { label: 'website', link: '/dexa', outer: false },
                    { label: 'github', link: DEXA_GITHUB_URL, outer: true }
                ],
            },
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/seedcheck.png`,
                    imageAlt: 'Seedchecker',
                    title: 'Seedchecker',
                    subtitle: '3DS Utility',
                },
                content: oneLine`A simple tool to check if the decryption SEED is available for a Nintendo 3DS eShop title`,
                actions: [
                    { label: 'download', link: `${ASSET_BASE_PATH}/website-dist/SEEDChecker.java`, outer: true },
                    { label: 'website', link: '/seedchecker', outer: false },
                    { label: 'github', link: SEEDCHECKER_GITHUB_URL, outer: true }
                ],
            },
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/convertbot.png`,
                    imageAlt: 'Convertbot',
                    title: 'Convertbot',
                    subtitle: 'Conversion Utility',
                },
                content: oneLine`A basic yet robust C++ tool for unit conversion, supporting temperature, distance, volume and more`,
                actions: [
                    { label: 'download', link: `${ASSET_BASE_PATH}/website-dist/ConvertBot.exe`, outer: true },
                    { label: 'website', link: '/convertbot', outer: false },
                    { label: 'github', link: CONVERTBOT_GITHUB_URL, outer: true }
                ],
            },
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/catchcalc.png`,
                    imageAlt: 'CatchCalc',
                    title: 'CatchCalc',
                    subtitle: 'Pokémon Helper Tool',
                },
                content: oneLine`Java application to calculate the catch rate of Pokemon in the Generation 6 games (XYORAS)`,
                actions: [
                    { label: 'download', link: `${ASSET_BASE_PATH}/website-dist/catchcalc.jar`, outer: true },
                    { label: 'website', link: '/catchcalc', outer: false },
                    { label: 'github', link: CATCHCALC_GITHUB_URL, outer: true }
                ],
            },
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/tava.png`,
                    imageAlt: 'Ta\'Va',
                    title: 'Ta\'Va - Trial of the Sun God',
                    subtitle: 'Aztec adventure game',
                },
                content: oneLine`Embark on a mythological aztec puzzle game to uncover the truth behind an ominous story`,
                actions: [
                    { label: 'windows', link: `${ASSET_BASE_PATH}/website-dist/tavawindows.7z`, outer: true },
                    { label: 'macos', link: `${ASSET_BASE_PATH}/website-dist/tavamac.7z`, outer: true },
                    { label: 'website', link: '/tava', outer: false }
                ],
            },
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/unescape.png`,
                    imageAlt: 'Unescape Project',
                    title: 'Unescape-es6',
                    subtitle: 'yarn add unescape-es6',
                },
                content: oneLine`Convert HTML entities to HTML characters. For example "&amp;" converts to &`,
                actions: [
                    { label: 'npm', link: UNESCAPE_NPM, outer: true },
                    { label: 'website', link: '/unescape', outer: false },
                    { label: 'github', link: UNESCAPE_GITHUB, outer: true }
                ],
            },
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/querystring.png`,
                    imageAlt: 'Awesome Querystring',
                    title: 'Awesome Querystring',
                    subtitle: 'yarn add awesome-querystring',
                },
                content: oneLine`Querystring that is robust in its working yet remains awesome to TypeScript users`,
                actions: [
                    { label: 'npm', link: AWESOME_QUERYSTRING_NPM, outer: true },
                    { label: 'website', link: '/unescape', outer: false },
                    { label: 'github', link: AWESOME_QUERYSTRING_GITHUB, outer: true }
                ],
            },
            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/converter.png`,
                    imageAlt: 'Awesome Converter',
                    title: 'Awesome Converter',
                    subtitle: 'yarn add awesome-converter',
                },
                content: oneLine`Awesome and typesafe unit converter, supports many different systems of units`,
                actions: [
                    { label: 'npm', link: AWESOME_CONVERTER_NPM, outer: true },
                    { label: 'website', link: '/unescape', outer: false },
                    { label: 'github', link: AWESOME_CONVERTER_GITHUB, outer: true }
                ],
            },

            {
                header: {
                    avatar: `${ASSET_BASE_PATH}/website-project-icons/contact.png`,
                    imageAlt: 'Contact Page',
                    title: 'Contact Page',
                    subtitle: 'Get in touch',
                },
                content: oneLine`Have questions, support requests or just want to get in contact? Go here!`,
                actions: [
                    { label: 'Get in touch', link: '/contact', outer: false },
                    { label: 'email now', link: CONTACT_MAIL, outer: true }
                ],
            }
        ],
    };
}
