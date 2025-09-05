// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'CHAI BUILDER',
			description: 'Complete guide to ChaiBuilder - The React-based visual website builder',
			logo: {
				src: './src/assets/chai-logo.png',
				replacesTitle: false,

			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/chaibuilder' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/czkgwX2rnD' },
				{ icon: 'twitter', label: 'Twitter', href: 'https://x.com/chaibuilder' },
			],
			editLink: {
				baseUrl: 'https://github.com/surajair/chaibuilder-docs/edit/main/',
			},
			customCss: [
				'./src/styles/global.css',
			],
			sidebar: [
				{
					label: '🏠 Overview',
					autogenerate: { directory: 'overview' },
				},
				{
					label: '🚀 Getting Started',
					autogenerate: { directory: 'developers/getting-started' },
				},
				{
					label: '✏️ For Editors',
					autogenerate: { directory: 'editors' },
				},
				{
					label: '🔧 For Developers',
					autogenerate: { directory: 'developers/extending-builder' },
				},
				{
					label: '📦 Open Source',
					autogenerate: { directory: 'open-source' },
				}
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'shortcut icon',
						href: '/favicon.png',
						type: 'image/png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.png',
						type: 'image/png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: '',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: 'https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&display=swap',
						as: 'style',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: '../../assets/chai-logo.png',
					},
				},
			],
		}),
	],
});
