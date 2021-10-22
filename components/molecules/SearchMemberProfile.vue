<template>
	<div class="row justify-content-center">
		<div v-for="member in members"
		class="col-lg-8 col-md-8 col-xs-8 col-sm-8 d-flex align-items-stretch"
		data-aos="zoom-in"
		data-aos-delay="100"
		>
		<div class="icon-box iconbox-blue">
			<div class="icon">
				<svg width="200" height="200" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
					<path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
				</svg>
				<!-- <i class="bx bxl-dribbble"></i> -->
				<img v-if="members[0].avatar" :src="`https://app.evoush.com/storage/${members[0].avatar}`" class="img-fluid img-responsive image--profile-member img-responsive rounded-circle center-block d-block mx-auto mt-2" width="150">
				<img v-else src="https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/profile/default.jpg" :alt="members[0].name" class="image--profile-member img-responsive rounded-circle center-block d-block mx-auto mt-2" width="100">
			</div>
			<div class="mt-5 member-profile">
				<h4>{{members[0].name}}</h4>
				<ul class="profile-lists">
					<li><strong>Username : {{(members[0].username === "fentirifqi") ? "coachrifqi" : members[0].username}}</strong></li>
					<li><strong>Status : </strong> <span class="badge badge-success ml-2">Active</span></li>

					<li class="mt-5 mb-5">
						<div class="social-links">
							<h5>Media Social : </h5>
							<a :href="`https://wa.me/${members[0].phone}?text=Hallo%20${members[0].name}%20saya%20tertarik%20untuk%20join%20Evoush, %20apa%20anda%20bisa%20bantu%20saya`" target="_blank" class="whatsapp"><i class='bx bxl-whatsapp text-success'></i></a>
							<a :href="`https://www.facebook.com/${members[0].facebook}`" target="_blank" class="facebook"><i class="bx bxl-facebook text-primary"></i></a>
							<a :href="`https://www.instagram.com/${members[0].instagram}`" target="_blank" class="instagram"><i class="bx bxl-instagram text-danger"></i></a>
							<a :href="`${member.youtube}`" target="_blank" class="youtube"><i class='bx bxl-youtube text-danger'></i></a>
							<a :href="`mailto:${member.email}`" target="_blank" class="email"><i class='envelope-open text-warning'></i></a>
						</div>
					</li>
				</ul>
				<div v-if="member.quotes">
					<blockquote class="blockquote-footer" v-html="member.quotes">
						<!-- {{member.quotes}} -->
					</blockquote>
					<small style='text-transform: capitalize; font-size: 14px;' class="text-secondary mt-2">
						Quotes by : {{member.name}}
					</small>
				</div>
				<div v-else>
					<blockquote class="blockquote-footer">
						{{member.name}} Belum menambahkan quotes <br>
						<small style='text-transform: capitalize;' class="text-secondary">
							Untuk menambah atau mengedit profile anda silahkan klik tombol, Lihat profile kemudian anda akan di arahkan ke halaman profile member replika anda, selanjutnya di halaman profile member replika anda, anda bisa langsung menuju halaman login, dengan mengklik tombol Login bermwarna biru.
						</small>
					</blockquote>
				</div>

				<div class="mt-5">
					<nuxt-link :to="{name:'member-username', params: {username: member.username}}" class="btn btn-primary"><i class='bx bx-link-external text-white'></i> Lihat Profile</nuxt-link>
				</div>
			</div>
		</div>

	</div>
</div>
</template>

<script>
	export default {
		props: ['members']
	}
</script>