export const strict = false
export const state = () => ({
	likes: [],
	count: 0
})

export const  mutations = {
	likes(state){
		const likedata = {
			name: 'likes',
			total: state.count += 1
		}
		state.likes = localStorage.setItem('likes', JSON.stringify(likedata))
	}
}

export const actions = {

}

export const getters = {
	getLike: state => {
		return state.likes
	}
}