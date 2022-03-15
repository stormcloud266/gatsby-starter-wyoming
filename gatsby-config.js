const path = require('path')
const config = require('./src/data/config')

module.exports = {
	siteMetadata: {
		title: config.title,
		description: config.description,
		author: config.author,
		creator: config.creator,
		siteUrl: config.siteUrl,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-robots-txt',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'static/favicon.png',
				short_name: config.manifest.short_name,
				start_url: `/`,
				background_color: config.manifest.background_color,
				theme_color: config.manifest.theme_color,
				display: `minimal-ui`,
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-google-fonts-with-attributes`,
			options: {
				fonts: config.webFonts,
				display: 'swap',
				attributes: {
					rel: 'stylesheet preload prefetch',
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: 'src/assets/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'static',
				path: 'static/',
			},
			__key: 'static',
		},
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: config.analytics.googleAnalyticsID, // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-analytics', // default
					anonymize: true, // default
				},
				googleTagManager: {
					trackingId: config.analytics.googleTagManagerID, // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-tagmanager', // default
					dataLayerName: 'dataLayer', // default
				},
				facebookPixel: {
					pixelId: config.analytics.facebookPixelID, // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-facebook-pixel', // default
				},
				// defines the environments where the tracking should be available  - default is ["production"]
				environments: ['production'],
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@components': path.resolve(__dirname, 'src/components'),
					'@global': path.resolve(__dirname, 'src/components/global'),
					'@UI': path.resolve(__dirname, 'src/components/UI'),
					'@images': path.resolve(__dirname, 'src/assets/images'),
					'@globalStyles': path.resolve(__dirname, 'src/assets/globalStyles'),
					'@data': path.resolve(__dirname, 'src/data'),
				},
			},
		},
	],
}
