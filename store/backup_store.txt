export const strict = false
export const state = () => ({
	sites: [],
	landings: [],
	test: 'Sitemap',
	tokens: '',
	username: ''
})

export const  mutations = {
	sitemaps(state){
		state.sites.push(
			{id:1, name: 'Starter Page', url: 'https://evoush-landing-api.herokuapp.com'},
			{id:2, name: 'Landing Product', url:''}
		)
	},
	landingsite(state){
		state.landings.push(
			{id:1, name: 'Gilcam Propolis', url: 'https://propolis.netlify.app/'},
			{id:2, name: 'Brightening Beauty Soap', url: 'https://evoush-beauty-soap.netlify.app/'},
			{id:3, name: 'Kileon', url: 'https://kileon.netlify.app/'},
			{id:4, name: 'Perfect Lipmatte', url: 'https://evoush-perfect-lipmatte.netlify.app/'},
			{id:5, name: 'Peeling Spray', url: 'https://peeling-spray.netlify.app/'}
		)
	},

	authtoken(state){
		// console.log(process.client)
		state.tokens = localStorage.getItem('token') ? localStorage.getItem('token') : ''
	},

	authusername(state){
		state.username = localStorage.getItem('username') ? localStorage.getItem('username') : ''
	}
}

export const actions = {

}

export const getters = {
	getSitemap: state => {
		return state.sites
	},
	getLandingSite: state => {
		return state.landings
	},
	getToken: state => {
		return state.tokens
	},
	getUsername: state => {
		return state.username
	}
}