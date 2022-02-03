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
			aiders: [],
			email: localStorage.getItem("email") || undefined,
			token: localStorage.getItem("token") || undefined,
			user_type: localStorage.getItem("user_type") || undefined,
			myOrgById: localStorage.getItem("myOrgById") || undefined,
			orgbyid: undefined,
			full_name: localStorage.getItem("full_name") || undefined,
			organization_name: localStorage.getItem("organization_name") || undefined
			
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

			getOrgbyid: async (id) => {
				const store = getStore();
				let orgbyid = store.organizations.filter((organization)=>
					{
						return organization.id === id
					})
					setStore({...store, orgbyid: orgbyid[0]})
					localStorage.setItem("myOrgById", JSON.stringify(orgbyid));
			},

			getCountries: async () => {
				const store = getStore();		
				try{
					let response = await fetch(`${store.urlCountries}`)
					let data = await response.json()
					let allcountries = [];
					for(let name of data){
						allcountries.push(name.name.common)
					}
					setStore({...store,countries:allcountries.sort()})
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
							token:data.token, 
							email:data.email, 
							user_type: data.user_type,
							full_name: data.full_name,
							organization_name: data.organization_name
						})
						localStorage.setItem("token", data.token)
						localStorage.setItem("email", data.email)
						localStorage.setItem("user_type", data.user_type)
						localStorage.setItem("full_name", data.full_name)
						localStorage.setItem("organization_name", data.organization_name)
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
					//let data = await response.json()
					if(response.ok){
						return response
					}
				}
				catch (error) {
					console.log("Changes not applied", error)
				}
			},

			delProfile: async () => {
				const store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/delprofile`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
					});
					//let data = await response.json()
					if(response.ok){
						return response
					}
				}
				catch (error) {
					console.log("Account could not be deleted", error)
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
				localStorage.removeItem("user_type")
			},
		}
	};
};

export default getState;
