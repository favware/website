import 'nuxt';

const description = "For Hearth and Home! This is Favna's personal website.";

export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '~/modules/sitemap'],
	typescript: {
		shim: false
	},
	sitemap: {
		hostname: 'https://favware.tech'
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Favware',
			htmlAttrs: { lang: 'en_GB' },
			meta: [
				{ name: 'description', content: description },
				{ name: 'keywords', content: 'favna favware portfolio development skyra ribbon graphql-pokemon dexa' },
				{
					name: 'summary',
					content: [
						'On this website I am listing all the notable projects I have worked on.',
						'Consider it to be my portfolio of sorts as well as a knowledge base of information.',
						'There are also some small fun features here and more will be added in the future.'
					].join(' ')
				},
				{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
				{ name: 'author', content: `Jeroen Claassens, support@favware.tech` },
				{ name: 'reply-to', content: 'support@favware.tech' },
				{ name: 'target', content: 'all' },
				{ name: 'audience', content: 'all' },
				{ name: 'coverage', content: 'Worldwide' },
				{ name: 'distribution', content: 'Global' },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'HandheldFriendly', content: 'True' },
				{ name: 'apple-mobile-web-app-title', content: 'Favware' },
				{ name: 'application-name', content: 'Favware' },
				{ name: 'msapplication-TileColor', content: '#00bcd4' },
				{ name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
				{ name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
				{ name: 'theme-color', content: '#00bcd4' },
				{ property: 'og:email', content: 'support@favware.tech' },
				{ property: 'twitter:card', content: 'summary' },
				{ property: 'twitter:site', content: '@Favna_' },
				{ property: 'twitter:creator', content: '@Favna_' },
				{ property: 'fb:app_id', content: '977960562367980' },
				{ property: 'og:title', content: 'Favware' },
				{ property: 'og:description', content: description },
				{ property: 'og:url', content: 'https://favware.tech' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:image', content: 'https://favware.tech/images/og.png' },
				{ property: 'og:image:alt', content: 'OpenGraphImage' },
				{ property: 'og:locale', content: 'en_GB' },
				{ property: 'og:site_name', content: 'Favware' }
			]
		}
	}
});
