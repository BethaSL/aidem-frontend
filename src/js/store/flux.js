const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "http://localhost:8080",
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
				console.log(loggedUser)
				let store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/signin`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(loggedUser)
					});
					let data = await response.json()
					console.log(data)
				}
				catch (error) {
					console.log("signin error", error)
				}
			},

			userReg: async userRegister => {
				const store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/signup`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(userRegister)
					});
					let data = await response.json()
					console.log(data)
				}
				catch (error) {
					console.log("signup error", error)
				}
			},
			orgProfile: async orgProfile => {
				const store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/orgprofile`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(orgProfile)
					});
					let data = await response.json()
					console.log(data)
				}
				catch (error) {
					console.log("signup error", error)
				}
			},
			aiderProfile: async aiderProfile => {
				const store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/aiderprofile`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(aiderProfile)
					});
					let data = await response.json()
					console.log(data)
				}
				catch (error) {
					console.log("signup error", error)
				}
			},
		}
	};
};

export default getState;
