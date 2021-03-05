
const { howlongtobeat } = require('jam-my-stack');
const fsp = require('fs').promises;


(async function() {
	console.log("1. adding Howlongtobeat info...")
	await howlongtobeat.howlong(`${__dirname}/content/articles`)

	console.log("-- all done!")
})()
