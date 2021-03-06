'use strict';

/**
 * Render given html string into full page markup
 *
 * @param {String} html
 * @param {Object} initialState
 * @param {String[]} styleSheets
 *
 * @return {String}
 */
export default function renderFullPage(html, initialState, styleSheets) {
	styleSheets = styleSheets.map(sheet => (
		`<link rel="stylesheet" href="${sheet}">`
	));

	const config = {
		API_URL: process.env.API_URL
	};

	const analytics = !process.env.GOOGLE_ANALYTICS ? '' : `<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', '${process.env.GOOGLE_ANALYTICS}', 'auto');
ga('send', 'pageview');
</script>`;

	return (
`<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<title>React + Redux boilerplate</title>
		<link rel="stylesheet" href="/css/app.css">
		${styleSheets}
	</head>
	<body>
		<div id="app-root">${html}</div>
		<script>window.__config = ${JSON.stringify(config)}</script>
		<script>window.__initialState = ${JSON.stringify(initialState)};</script>
		<script src="/js/app.js"></script>
		${analytics}
	</body>
</html>`
	);
}
