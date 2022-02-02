const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "http://localhost:8080",
			urlCountries:"https://restcountries.com/v3.1/all",
			countries: [],
			children: [],
			elderly: [],
			others: [],
			favorites: [],
			bankData: [],
			organizations: [],
			email: localStorage.getItem("email") || undefined,
			token: localStorage.getItem("token") || undefined
			
		},
		actions: {
			getData: async endpoint => {
				const store = getStore();
					try {
						let response = await fetch(`${store.urlBase}/${endpoint}`, {
							method: "GET",
							headers: {
								 "Content-Type": "application/json",
								},
						});
						let data = await response.json()
						setStore({...store,[endpoint]: data.results});
					}
					catch (error) {
						console.log(error)
					}
			},
			getCountries: async () => {
				const store = getStore();		
				try{
					let response = await fetch(`${store.urlCountries}`)
					let data = await response.json()
					let allcountries = [];
					for(let name of data){
						allcountries.push(name.name.common)
						//console.log(name.name.common)
					}
					setStore({...store,countries:allcountries.sort()})
//					console.log(allcountries)
				}
				catch (error) {
					console.log(error)
				}
			},
			getDataOrgType: async endpoint => {
				const store = getStore();
					try {
						let response = await fetch(`${store.urlBase}/organizations/${endpoint}`, {
							method: "GET",
							headers: {
								 "Content-Type": "application/json",
								},
						});
						let data = await response.json()
						setStore({...store,[endpoint]: data.results});
					}
					catch (error) {
						console.log(error)
					}
			},
			
			userAuth: async loggedUser => {
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
					if (response.ok){
						setStore({
							...store,
							token:data.token, email:data.email
						})
						localStorage.setItem("token", data.token)
						localStorage.setItem("email", data.email)
						return(response)
					}
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
				}
				catch (error) {
					console.log("signup error", error)
				}
			},

			orgProfile: async orgProfile => {
				const store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/orgprofile`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
						body: JSON.stringify(orgProfile)
					});
					let data = await response.json()
					if(response.ok){
						return response
					}
				}
				catch (error) {
					console.log("Changes not applied", error)
				}
			},
			
			aiderProfile: async aiderProfile => {
				const store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/aiderprofile`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
						body: JSON.stringify(aiderProfile)
					});
					//let data = await response.json()
					if(response.ok){
						return response

					}
				}
				catch (error) {
					console.log("Changes not applied", error)
				}
			},

			logOut: ()=>{
				const store = getStore();
				setStore({...store, token:undefined, email:undefined})
				localStorage.removeItem("token")
				localStorage.removeItem("email")
			}
		}
	};
};

export default getState;
