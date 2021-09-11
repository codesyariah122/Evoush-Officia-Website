export const strict = false

export const state = () => {
	credential: {}
	route: {}
}

export const mutations = {
	credential(state){
		state.credential
	}
}

export const actions = {

}


export const getters = {
	getCredentialUser: state => {
		state.credential = {
			username: localStorage.getItem('username'),
			token: localStorage.getItem('token')
		}

		return state.credential
	}
}