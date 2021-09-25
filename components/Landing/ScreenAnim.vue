<template>
	<div>
		<div class="row justify-content-center">
			<div class="col-lg-12 col-xs-12 col-sm-12 mt-5">
				<img src="https://raw.githubusercontent.com/evoush12/bahan_evoush/main/animated/mobile.gif" class="img-fluid anim">
			</div>
			<div class="col-lg-12 col-xs-12 col-sm-12 mt-5 mb-2">
				<blockquote class="blockquote-footer" style="width: 400px;">
					Hai, evousher dimana pun anda berada... <br>
					saat ini anda bisa berkonsultasi via chat di official website evoush, untuk memulai chat silahkan klik atau tap tombol Dokter Evoush dibawah ini, selanjutnya anda di wajibkan mengisi kolom input yang tersedia.
				</blockquote>
				<nuxt-link to="/halo-dokter" class="btn btn-info helpdesk" target="_blank"><i class='bx bx-message-dots'></i> Dokter Evoush</nuxt-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
.anim{
	max-width: 250px;
	margin-top: -5rem;
}

.helpdesk {
	background: linear-gradient(to left, coral, lightcoral);
	border:2px solid #fff;
	box-shadow: 5px 5px grey;
}

.helpdesk:hover{
	background-color: salmon;
	transform: translateX(5%);
}


@media (min-width: 992px) {
	.anim{
		margin-top: 5rem;
		max-width: 500px;
	}
}
</style>