module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,css,js,json,png,mp3,eot,svg,ttf,woff,jpg,webp,glb,xml,ico,wasm,webmanifest}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	maximumFileSizeToCacheInBytes: 500 * 1024 * 1024
};