<template>
	<div>
		<!-- Navbar-->
		<header class="header">
			<nav class="navbar navbar-expand-lg navbar-light py-3">
				<div class="container">
					<!-- Navbar Brand -->
					<a href="#" class="navbar-brand">
						<!-- <Logo/>voush -->
						<nuxt-link class="btn btn-danger ml-3 mt-3" :to="`/member/${dataSponsor[0].username}`"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
					</a>
				</div>
			</nav>
		</header>


		<div class="container">
			<div class="row py-5 mt-4 align-items-center">
				<!-- For Demo Purpose -->
				<div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
					<img :src="`https://app.evoush.com/storage/${dataSponsor[0].avatar}`" alt="" class="img-fluid mb-3 d-none d-md-block img-responsive" width="300">
					<h1>Join Member Baru</h1>
					<p class="font-italic text-muted mb-0">Anda akan diarahkan untuk join member baru dari sponsor <strong class="text-primary" style="text-transform: capitalize;">{{dataSponsor[0].name}}</strong>.</p>
					<p class="font-italic text-muted">Silahkan isi data <a href="https://bootstrapious.com" class="text-muted">
						<u>di form join berikut dengan lengkap dan benar sesuai data informasi yang kami sediakan.</u></a>
					</p>
				</div>

				<!-- Registeration Form -->
				<div class="col-md-7 col-lg-6 ml-auto">
					<form action="#">
						<div class="row">

							<!-- First Name -->
							<div class="input-group col-lg-6 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-user text-muted'></i>
									</span>
								</div>
								<input id="firstName" type="text" name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md">
							</div>

							<!-- Last Name -->
							<div class="input-group col-lg-6 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-user text-muted'></i>
									</span>
								</div>
								<input id="lastName" type="text" name="lastname" placeholder="Last Name" class="form-control bg-white border-left-0 border-md">
							</div>

							<!-- Email Address -->
							<div class="input-group col-lg-12 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-envelope-open text-muted'></i>
									</span>
								</div>
								<input id="email" type="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md">
							</div>

							<!-- Phone Number -->
							<div class="input-group col-lg-12 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-phone text-muted'></i>
									</span>
								</div>
								<!-- <select id="countryCode" name="countryCode" style="max-width: 80px" class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
									<option value="">+12</option>
									<option value="">+10</option>
									<option value="">+15</option>
									<option value="">+18</option>
								</select> -->
								<input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number Format:(628782xxxx)" class="form-control bg-white border-md border-left-0 pl-3">
							</div>.


							<!-- Job -->
							<div class="input-group col-lg-12 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-globe text-muted'></i>
									</span>
								</div>
								<select id="job" name="jobtitle" class="form-control custom-select bg-white border-left-0 border-md">
									<option value="">Choose your job</option>
									<option value="">Designer</option>
									<option value="">Developer</option>
									<option value="">Manager</option>
									<option value="">Accountant</option>
								</select>
							</div>

							<!-- Password -->
							<div class="input-group col-lg-6 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-lock-alt text-muted'></i>
									</span>
								</div>
								<input id="password" type="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md">
							</div>

							<!-- Password Confirmation -->
							<div class="input-group col-lg-6 mb-4">
								<div class="input-group-prepend">
									<span class="input-group-text bg-white px-4 border-md border-right-0">
										<i class='bx bx-lock-alt text-muted'></i>
									</span>
								</div>
								<input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md">
							</div>

							<!-- Submit Button -->
							<div class="form-group col-lg-12 mx-auto mb-0">
								<a href="#" class="btn btn-primary btn-block py-2">
									<span class="font-weight-bold">Join Member</span>
								</a>
							</div>

							<!-- Divider Text -->
							<div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
								<div class="border-bottom w-100 ml-5"></div>
								<span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
								<div class="border-bottom w-100 mr-5"></div>
							</div>

							<!-- Social Login -->
							<div class="form-group col-lg-12 mx-auto">
								<a href="#" class="btn btn-primary btn-block py-2 btn-facebook">
									<i class="fa fa-facebook-f mr-2"></i>
									<span class="font-weight-bold">Continue with Facebook</span>
								</a>
								<a href="#" class="btn btn-primary btn-block py-2 btn-twitter">
									<i class="fa fa-twitter mr-2"></i>
									<span class="font-weight-bold">Continue with Twitter</span>
								</a>
							</div>

							<!-- Already Registered -->
							<div class="text-center w-100">
								<p class="text-muted font-weight-bold">Already Registered? <a href="#" class="text-primary ml-2">Login</a></p>
							</div>

						</div>
					</form>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import Logo from '~/components/molecules/Logo'

	export default {
		layout: 'pages',
		components: {
			Logo
		},
		async asyncData({$axios, params}){
			const sponsor = params.sponsor
			const dataSponsor = await $axios.$get(`/member/${sponsor}`)

			return {
				dataSponsor
			}

		},

		mounted(){
			this.getRegistrationForm()
		},

		methods: {
			getRegistrationForm(){
				$(function () {
					$('input, select').on('focus', function () {
						$(this).parent().find('.input-group-text').css('border-color', '#80bdff');
					});
					$('input, select').on('blur', function () {
						$(this).parent().find('.input-group-text').css('border-color', '#ced4da');
					});
				});
			}
		}
	}
</script>

<style scoped>
	.border-md {
    border-width: 2px;
}

.btn-facebook {
    background: #405D9D;
    border: none;
}

.btn-facebook:hover, .btn-facebook:focus {
    background: #314879;
}

.btn-twitter {
    background: #42AEEC;
    border: none;
}

.btn-twitter:hover, .btn-twitter:focus {
    background: #1799e4;
}



/*
*
* ==========================================
* FOR DEMO PURPOSES
* ==========================================
*
*/

body {
    min-height: 100vh;
}

.form-control:not(select) {
    padding: 1.5rem 0.5rem;
}

select.form-control {
    height: 52px;
    padding-left: 0.5rem;
}

.form-control::placeholder {
    color: #ccc;
    font-weight: bold;
    font-size: 0.9rem;
}
.form-control:focus {
    box-shadow: none;
}

</style>