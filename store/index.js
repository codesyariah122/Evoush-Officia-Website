export const strict = false
export const state = () => ({
	counter: 0,
	colorMode: '',
	credential: {
		username: '',
		token: ''
	}
})

export const mutations = {
	color(state){
		state.colorMode = localStorage.getItem('nuxt-color-mode')
	},
	increment(state){
		state.counter += 1
	},
	decrement(state){
		if(state.counter > 0){
			state.counter -= 1
		}
	},
	credential(state) {
		state.credential
	}
}

export const getters = {
	getCounter: state => {
		return state.counter
	},
	getColorMode: state => {
		return state.colorMode
	},
	getCredentialUser: state => {
		state.credential = {
  			username: localStorage.getItem('username'),
  			token: localStorage.getItem('token')
  		}
		return state.credential
	}
}