import { parse } from "query-string";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "http://localhost:8080",
			urlCountries: "https://restcountries.com/v3.1/all",
			countries: [],
			children: [],
			elderly: [],
			others: [],
			favorites: [],
			bankData: [],
			organizations: [],
			aiders: [],
			user_id: localStorage.getItem("user_id") || undefined,
			email: localStorage.getItem("email") || undefined,
			token: localStorage.getItem("token") || undefined,
			user_type: localStorage.getItem("user_type") || undefined,
			myOrgById: localStorage.getItem("myOrgById") || undefined,
			orgbyid: undefined,
			full_name: localStorage.getItem("full_name") || undefined,
			organization_name: localStorage.getItem("organization_name") || undefined,
			profile: JSON.parse(localStorage.getItem("profile")) || undefined,
			aiderProfile: JSON.parse(localStorage.getItem("aiderProfile")) || undefined

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
					setStore({ ...store, [endpoint]: data.results });
					return true
				}
				catch (error) {
					console.log(error)
				}
			},

			getOrgbyid: async (id) => {
				const store = getStore();
				let orgbyid = store.organizations.filter((organization) => {
					return organization.id === id
				})
				setStore({ ...store, orgbyid: orgbyid[0] })
				localStorage.setItem("myOrgById", JSON.stringify(orgbyid));
			},



			getProfileInfo: async () => {
				const store = getStore();
				let profileinfo = store.organizations.filter((organization) => {

					return organization.user_id == parseInt(store.user_id)
				})
				if (profileinfo[0] != undefined) {
					setStore({ ...store, profile: profileinfo[0] })
					console.log(JSON.stringify(profileinfo[0]));
					localStorage.setItem("profile", JSON.stringify(profileinfo[0]));
				}
			},

			getAiderProfile: async () => {
				const store = getStore();
				let aiderinfo = store.aiders.filter((aider) => {

					return aider.user_id == parseInt(store.user_id)
				})
				if (aiderinfo[0] != undefined) {
					setStore({ ...store, aiderProfile: aiderinfo[0] })
					console.log(JSON.stringify(aiderinfo[0]));
					localStorage.setItem("AiderProfile", JSON.stringify(aiderinfo[0]));
				}
			},

			getCountries: async () => {
				const store = getStore();
				try {
					let response = await fetch(`${store.urlCountries}`)
					let data = await response.json()
					let allcountries = [];
					for (let name of data) {
						allcountries.push(name.name.common)
					}
					setStore({ ...store, countries: allcountries.sort() })
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
					setStore({ ...store, [endpoint]: data.results });
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
					if (response.ok) {
						setStore({
							...store,
							token: data.token,
							email: data.email,
							user_type: data.user_type,
							full_name: data.full_name,
							organization_name: data.organization_name,
							user_id: data.user_id
						})
						localStorage.setItem("token", data.token)
						localStorage.setItem("email", data.email)
						localStorage.setItem("user_type", data.user_type)
						localStorage.setItem("full_name", data.full_name)
						localStorage.setItem("organization_name", data.organization_name)
						localStorage.setItem("user_id", data.user_id)
						return (response)
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
					if (response.ok) {
						return response
					}
				}
				catch (error) {
					console.log("Changes not applied", error)
				}
			},

			editOrgProfile: async orgProfile => {
				const store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/orgprofile`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
						body: JSON.stringify(orgProfile)
					});
					//let data = await response.json()
					if (response.ok) {
						return response
					}
				}
				catch (error) {
					console.log("Changes not applied", error)
				}
			},

			editAiderProfile: async aiderProfile => {
				const store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/aiderprofile`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
						body: JSON.stringify(aiderProfile)
					});
					//let data = await response.json()
					if (response.ok) {
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
					console.log(response.ok)//let data = await response.json()
					if (response.ok) {
						// logOut()
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
					if (response.ok) {
						return true
					}
				}
				catch (error) {
					console.log("Changes not applied", error)
				}
			},

			logOut: () => {
				const store = getStore();
				setStore({ ...store, token: undefined, email: undefined, profile: undefined})
				localStorage.removeItem("token")
				localStorage.removeItem("email")
				localStorage.removeItem("user_type")
				localStorage.removeItem("organization_name")
				localStorage.removeItem("full_name")
				localStorage.removeItem("user_id")
				localStorage.removeItem("profile")
				localStorage.removeItem("aiderProfile")
				//localStorage.removeItem("")



			},
		}
	};
};

export default getState;
