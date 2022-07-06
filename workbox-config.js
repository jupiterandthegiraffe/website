module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,css,js,png,mp3,vcf,eot,svg,ttf,woff,jpg,webp,avif,glb,xml,txt,ico,wasm}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^pginfo/,
		/^node_modules/
	],
	maximumFileSizeToCacheInBytes: 500 * 1024 * 1024
};