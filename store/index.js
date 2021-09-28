export const strict = false

export const state = () => {
	credential: {}
	route: {}
	crisp:''
	tester: ''
}

export const mutations = {
	credential(state){
		state.credential
	},
	crispHide(state){
		state.crisp
	},
	testingData(sate){
		state.tester
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
	},

	getHiddenCrisp: state => {
		state.crisp = $crisp.push(['do', 'chat:show'])
	},

	getTestingData: state => {
		state.tester = "Hallo World"
	}
}