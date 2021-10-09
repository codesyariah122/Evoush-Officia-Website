<template>
	<div>
		<nav class="nav-menu">
			<ul>
				<div v-if="token && username">
					<!-- <pre>
						{{ token }}
					</pre> -->
					<li>
						<nuxt-link :to="`/profile/${user.username}`"><i class='bx bxs-user-detail'></i> <span>{{username}}</span></nuxt-link>
					</li>
				</div>
				<div v-else>
					<li class="active">
						<nuxt-link to="/auth/login"><i class='bx bxs-key'></i> <span>Login Profile</span></nuxt-link>
					</li>
				</div>
				<li>
					<a href="#hero"><i class="bx bx-home"></i> <span>Home</span></a>
				</li>
				<li>
					<a href="#news"
					><i class='bx bx-news' ></i> <span>News</span></a
					>
				</li>
				<li>
					<a href="#products"
					><i class='bx bxs-shopping-bag-alt'></i><span>Product</span></a
					>
				</li>
				<li>
					<a href="#members"><i class='bx bxs-network-chart'></i> <span>Leaders</span></a>
				</li>
				<!-- <li>
					<a href="#management">
						<i class='bx bx-sitemap' ></i> <span>Management</span>
					</a>
				</li> -->

				<li>
					<a href="#pages"
					><i class='bx bxs-widget'></i> <span>Pages</span></a
					>
				</li>
				<li>
					<a href="#contact"
					><i class="bx bx-envelope"></i> <span>Contact</span></a
					>
				</li>
			</ul>
		</nav>
		<!-- .nav-menu -->
	</div>
</template>


<script>
	export default{
		data(){
			return {
				token: (localStorage.getItem('token') ? localStorage.getItem('token') : ''),
				username: (localStorage.getItem('username') ? localStorage.getItem('username') : ''),
				user: ''
			}
		},

		mounted(){
			// console.log(this.token),
			if(this.token){
				this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
				this.$axios.get('/api/user')
				.then(response => {
					this.user = response
				})
				.catch(error => {
					console.log(error.response.data)
				})
			}

		}
	}
</script>