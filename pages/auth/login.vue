<template>
	<div>
		<div class="container">
			<div class="row justify-content-center mt-5">
				<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
					<div class="float-right">
						<ColorModePicker/>
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div class="card">

						<!-- <pre>
						{{username}}
					</pre> -->

					<form class="box" @submit.prevent="login">

						<Logo/>
						<h5 class="text-white mt-3">Login Web Replika Evoush</h5>
						<p class="text-muted mt-3 mb-2"> Please enter your username and password!</p>

						<div v-if="loginFailed" class="alert alert-danger mb-2">
							{{message}} <br>
							<a v-if="activated" :href="`https://wa.me/${sponsor.phone}?text=Hallo%20${sponsor.name}%20saya%20telah%20join%20menjadi%20member%20anda, %20apa%20anda%20bisa%20bantu%20saya%20untuk%20proses%20aktivasi%20member%20saya`" class="btn btn-success btn-sm mt-3">Request Aktivasi</a>

							<a v-if="join" href="/#members" class="btn btn-primary btn-sm mt-3">Silahkan Join</a>
						</div>

						<input type="text" name="username" v-model="user.username" placeholder="Username">
						<small v-if="validation.username" class="mt-2 text-danger">
							{{ validation.username[0] }}
						</small>
						<input type="password" name="password" v-model="user.password" placeholder="Password">
						<small v-if="validation.password" class="mt-2 text-danger">
							{{ validation.password[0] }}
						</small>
						<input type="submit" name="" value="Login" href="#">
						<br>
						<a @click="historyBack()" class="back">Kembali</a>

						<nuxt-link to="/#members" class="home">Home Page</nuxt-link>
						<div class="col-md-12">
							<ul class="social-network social-circle">
								<li><a href="https://twitter.com/EvoushOfficial" class="twitter"><i class="bx bxl-twitter"></i></a></li>
								<li><a href="https://www.facebook.com/evoush.evoush.12" class="facebook"><i class="bx bxl-facebook"></i></a></li>
								<li><a href="https://www.instagram.com/evoush.official" class="instagram"><i class="bx bxl-instagram"></i></a></li>
								<li><a href="https://www.youtube.com/channel/UCIzNgeNDD58z8XNppkopwzw" class="linkedin"><i class="bx bxl-youtube"></i></a></li>
							</ul>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import ColorModePicker from '@/components/molecules/ColorModePicker'
	import Logo from '~/components/molecules/Logo'

	export default {
		layout: 'auth',
		components: {
			ColorModePicker,
			Logo
		},

		async asyncData({params}){
			const username = params.username
			return {
				username
			}
		},

		data(){
			return{
				message: '',
				alert: '',
				sponsor: {},
				user: {
					username: '',
					password: ''
				},
				validation: {},
				loginFailed: null,
				activated: null,
				join: null,
				token: localStorage.getItem('token')
			}
		},

        mounted(){
            // console.log(this.credentialUser)
            this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
            this.$axios.get('/user')
            .then(response => {
                // console.log(response)
                if(this.token){
                    this.$swal({
                        position: 'top-end',
                        icon: 'success',
                        title: `Anda telah login menggunakan username : ${response.data.username}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    return this.$router.push({
                        name: 'profile-username',
                        params: {username: response.data.username}
                    })
                }
            })
            .catch(error => {
                console.log(error.response)
            })
        },

		methods:{
			login(){
				let username = this.user.username
				let password = this.user.password
				this.$axios.post('https://app.evoush.com/api/login', {
					username,
					password
				})
				.then(res => {
					console.log(res)
					if(res.data.success){
						localStorage.setItem('token', res.data.token)
						localStorage.setItem('username', res.data.data.username)
						// this.$swal({
						// 	position: 'top-center',
						// 	icon: 'success',
						// 	title: `Login success, anda telah login sebagai <strong>${username}</strong>`,
						// 	showConfirmButton: false,
						// 	timer: 1500
						// })
                        // this.$toast('Login success')
						return this.$router.push({
							name:'profile-username',
							params: {username: res.data.data.username}
						})
					}

					this.loginFailed = true
					this.message = res.data.message

					if(res.data.message === "Status member anda belum di aktivasi oleh pihak sponsor, coba hubungi pihak sponsor anda."){
						this.activated = true
						this.sponsor = res.data.sponsor
					}else if(res.data.message === "Username yang anda gunakan belum terdaftar silahkan, lakukan join ke sponsor pilihan anda yang ada di halaman leader"){
						this.join = true
					}

				})
				.catch(err => {
					// console.log(err)
					this.validation = err.response.data
				})
			},

			historyBack(){
				return this.$router.back()
			},

		}
	}
</script>


<style scoped>
/*body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: linear-gradient(to right, #b92b27, #1565c0)
    }*/
    .card {
    	margin-bottom: 2px;
    	border: none
    }

    .box {
    	width: 300px;
    	padding: 30px;
    	position: absolute;
    	/*top: 70%!important;*/
    	margin-top: -.5rem!important;
    	left: 4%;
    	background: #191919;
    	text-align: center;
    	transition: 0.25s;
    	margin-top: 100px;
    	font-size: 14px;
    }

    .box h5{
    	font-size: 16px;
    }

    .box p{
    	font-size: 13px;
    }

    .box input[type="text"],
    .box input[type="password"] {
    	border: 0;
    	background: none;
    	display: block;
    	margin: 20px auto;
    	text-align: left;
    	border: 2px solid #3498db;
    	padding: 10px 10px;
    	width: 250px;
    	outline: none;
    	color: white;
    	border-radius: 24px;
    	transition: 0.25s
    }

    .box h1 {
    	color: white;
    	text-transform: uppercase;
    	font-weight: 500
    }

    .box input[type="text"]:focus,
    .box input[type="password"]:focus {
    	width: 250px;
    	border-color: #2ecc71
    }

    .box input[type="submit"] {
    	border: 0;
    	background: none;
    	display: block;
    	margin: 20px auto;
    	text-align: center;
    	border: 2px solid #2ecc71;
    	padding: 15px 40px;
    	outline: none;
    	color: white;
    	border-radius: 24px;
    	transition: 0.25s;
    	cursor: pointer;
    	width:200px;
    }

    .box input[type="submit"]:hover {
    	background: #2ecc71
    }

    .box .back{
    	border: 0;
    	background: none;
    	display: block;
    	margin: 20px auto;
    	text-align: center;
    	border: 2px solid salmon;
    	padding: 14px 40px;
    	outline: none;
    	color: white;
    	border-radius: 24px;
    	transition: 0.25s;
    	cursor: pointer
    }
    .box .back:hover{
    	background: #E67E22;
    }

    .box .home{
    	border: 0;
    	background: none;
    	display: block;
    	margin: 20px auto;
    	text-align: center;
    	border: 2px solid salmon;
    	padding: 14px 40px;
    	outline: none;
    	color: white;
    	border-radius: 24px;
    	transition: 0.25s;
    	cursor: pointer
    }
    .box .home:hover{
    	background:  #e74c3c;
    }


    .forgot {
    	text-decoration: underline
    }

    ul.social-network {
    	list-style: none;
    	display: inline;
    	margin-left: 0 !important;
    	padding: 0
    }

    ul.social-network li {
    	display: inline;
    	margin: 0 5px
    }

    .social-network a.icoFacebook:hover {
    	background-color: #3B5998
    }

    .social-network a.icoTwitter:hover {
    	background-color: #33ccff
    }

    .social-network a.icoGoogle:hover {
    	background-color: #BD3518
    }

    .social-network a.icoFacebook:hover i,
    .social-network a.icoTwitter:hover i,
    .social-network a.icoGoogle:hover i {
    	color: #fff
    }

    a.socialIcon:hover,
    .socialHoverClass {
    	color: #44BCDD
    }

    .social-circle li a {
    	display: inline-block;
    	position: relative;
    	margin: 0 auto 0 auto;
    	border-radius: 50%;
    	text-align: left;
    	width: 20px;
    	height: 50px;
    	font-size: 20px
    }

    .social-circle li i {
    	margin: 0;
    	line-height: 50px;
    	text-align: center
    }

    .social-circle li a:hover i,
    .triggeredHover {
    	transform: rotate(360deg);
    	transition: all 0.2s
    }

    .social-circle i {
    	color: #fff;
    	transition: all 0.8s;
    	transition: all 0.8s
    }


    @media (min-width: 992px) {
    	.box {
    		width: 600px;
    		padding: 100px;
    		position: absolute;
    		/*top: 30%;*/
    		margin-top: 3rem!important;
    		left: 25%;
    		background: #191919;
    		text-align: center;
    		transition: 0.25s;
    		margin-top: 100px;
    	}

    	.box h5{
    		font-size: 25px;
    	}

    	.box p{
    		font-size: 18px;
    	}

    	.box input[type="text"],
    	.box input[type="password"] {
    		border: 0;
    		background: none;
    		display: block;
    		/*margin: 20px auto;*/
    		text-align: left;
    		border: 2px solid #3498db;
    		padding: 10px 10px;
    		width: 350px;
    		outline: none;
    		color: white;
    		border-radius: 24px;
    		transition: 0.25s
    	}

    	.box h1 {
    		color: white;
    		text-transform: uppercase;
    		font-weight: 500
    	}

    	.box input[type="text"]:focus,
    	.box input[type="password"]:focus {
    		width: 250px;
    		border-color: #2ecc71
    	}

    	.box input[type="submit"] {
    		border: 0;
    		background: none;
    		display: block;
    		margin: 20px auto;
    		text-align: center;
    		border: 2px solid #2ecc71;
    		padding: 10px 25px;
    		outline: none;
    		color: white;
    		border-radius: 24px;
    		transition: 0.25s;
    		cursor: pointer;
    		width:250px;
    	}

    	.box input[type="submit"]:hover {
    		background: #2ecc71
    	}

    	.social-circle li a {
    		display: inline-block;
    		position: relative;
    		margin: 0 auto 0 auto;
    		border-radius: 50%;
    		text-align: left;
    		width: 50px;
    		height: 50px;
    		font-size: 35px
    	}

    }
</style>