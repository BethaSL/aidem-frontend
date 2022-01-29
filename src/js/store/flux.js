const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "localhost:3000/",
			children: [],
			elderly: [],
			others: [],
			favorites: [],
			bankData: []
		},
		actions: {

			// //Gets info from de API
			// getData: async endpoint => {
			// 	try {
			// 		const store = getStore();
			// 		const response = await fetch(`${store.urlBase}/${endpoint}`);
			// 		if (response.ok) {
			// 			const data = await response.json();
			// 			setStore({
			// 				...store,
			// 				[endpoint]: data.results
			// 			});
			// 		}
			// 	} catch (error) {
			// 		console.log("Oh no!");
			// 	}
			// },

			userAuth: async loggedUser => {
				console.log('me ejecuto desde userAuth')
				// let store = getStore();
				// try {
				// 	let response = await fetch(`${store.urlBase}/signin`, {
				// 		method: "POST",
				// 		headers: {
				// 			 "Content-Type": "application/json",

				// 			},
				// 		body: JSON.stringify(loggedUser)
				// 	});
				// 	console.log(response)
				// }
				// catch (error) {
				// 	console.log("signin error",error)

				// }
			},

		}
	};
};

export default getState;
