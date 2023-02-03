import 'nuxt';

const description = "For Hearth and Home! This is Favna's personal website.";

export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	typescript: {
		shim: false
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Favware',
			htmlAttrs: { lang: 'en_GB' },
			link: [
				{ rel: 'manifest', href: '/manifest.webmanifest' },
				{ rel: 'alternate', href: 'https://favware.tech' },
				{ rel: 'canonical', href: 'https://favware.tech' },
				{ rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png' },
				{ rel: 'apple-touch-startup-image', href: '/favicons/apple-startup.png' },
				{ rel: 'icon', href: '/favicons/android-chrome-192x192.png' },
				{ rel: 'icon', href: '/favicon.ico' },
				{ rel: 'icon', href: '/favicons/favicon-16x16.png' },
				{ rel: 'icon', href: '/favicons/android-chrome-192x192.png' },
				{ rel: 'icon', href: '/favicons/favicon-32x32.png' },
				{ rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg' },
				{ rel: 'shortcut icon', href: '/favicon.ico' }
			],
			meta: [
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'apple-mobile-web-app-title', content: 'Favware' },
				{ name: 'application-name', content: 'Favware' },
				{ name: 'audience', content: 'all' },
				{ name: 'author', content: `Jeroen Claassens, support@favware.tech` },
				{ name: 'coverage', content: 'Worldwide' },
				{ name: 'description', content: description },
				{ name: 'distribution', content: 'Global' },
				{ name: 'HandheldFriendly', content: 'True' },
				{ name: 'keywords', content: 'favna favware portfolio development skyra ribbon graphql-pokemon dexa' },
				{ name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
				{ name: 'msapplication-TileColor', content: '#00bcd4' },
				{ name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'reply-to', content: 'support@favware.tech' },
				{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
				{
					name: 'summary',
					content: [
						'On this website I am listing all the notable projects I have worked on.',
						'Consider it to be my portfolio of sorts as well as a knowledge base of information.',
						'There are also some small fun features here and more will be added in the future.'
					].join(' ')
				},
				{ name: 'target', content: 'all' },
				{ name: 'theme-color', content: '#00bcd4' },
				{ property: 'fb:app_id', content: '977960562367980' },
				{ property: 'og:description', content: description },
				{ property: 'og:email', content: 'support@favware.tech' },
				{ property: 'og:image:alt', content: 'OpenGraphImage' },
				{ property: 'og:image', content: 'https://favware.tech/images/og.png' },
				{ property: 'og:locale', content: 'en_GB' },
				{ property: 'og:site_name', content: 'Favware' },
				{ property: 'og:title', content: 'Favware' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://favware.tech' },
				{ property: 'twitter:card', content: 'summary' },
				{ property: 'twitter:creator', content: '@Favna_' },
				{ property: 'twitter:site', content: '@Favna_' }
			]
		}
	}
});
