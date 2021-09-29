export const state = () => {
	tester: ''
}

export const  mutations = {
	testData(state) {
		state.tester = "Hallo World"
	}
}

export const actions = {

}

export const getters = {
	getTesterData: (state) => {
		return state.tester
	}
}