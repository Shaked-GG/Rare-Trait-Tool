var axios = require('axios');
const clientaxios = axios.create();
const get_NFTs = (collection_slug) => {
	return new Promise((resolve, reject) => {
		var configToken = {
			method: 'get',
			url: `https://api.opensea.io/api/v1/collection/${collection_slug}`,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Token: ':(',
			},
		};
		clientaxios(configToken)
			.then(async function (response) {
				resolve(response);
			})
			.catch((e) => console.log(e.data));
	});
};

get_NFTs('invisiblefriends').then(async (data) => {
	let arrayOfTraits = data.traits;
	console.log(arrayOfTraits);
	let min = { name: '', value: 100 }; // the default have 100% so each trait would have lower then this
	arrayOfTraits.forEach((trait) => {
		for (const [keyTrait, valueTrait] of Object.entries(trait)) {
			// {keyTrait:'burning head',valueTrait:'23.16'}
			if (valueTrait < min.value) {
				min = { name: keyTrait, value: valueTrait };
				// give back the trait that return the least times
			}
		}
	});
	console.log(max);
});
