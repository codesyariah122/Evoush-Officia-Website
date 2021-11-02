<template>
	<div>
		<form  @submit.prevent="storeNewMember">

			<div class="row">

				<input type="hidden" name="email_sponsor" :value="dataSponsor[0].email" id="email_sponsor">

				<input type="hidden" name="sponsor_id" :value="dataSponsor[0].id" id="sponsor_id">

				<input type="hidden" name="roles[]" value="FOLLOWER" id="roles">

				<input type="hidden" name="status" value="INACTIVE" id="status">

				<input type="hidden" name="username_path" :value="dataSponsor[0].username" id="username_path">

				<!-- First Name -->
				<div class="input-group col-lg-12 mb-4">
					<div class="input-group-prepend">
						<span class="input-group-text bg-white px-4 border-md border-right-0">
							<i class='bx bx-user text-muted'></i>
						</span>
					</div>
					<input type="text" v-model="field.name" name="name" placeholder="Nama Lengkap Anda" class="form-control bg-white border-left-0 border-md" id="name">

					<div class="col-lg-12 col-xs-12 col-sm-12">
						<small class="text-danger">*wajib di isi</small>
						<br />
					</div>

					<div class="col-lg-12 col-xs-12 col-sm-12">
						<small v-if="validation.name" class="mt-2 text-danger">
							{{validation.name[0]}}
						</small>
					</div>

				</div>

				<!-- Email Address -->
				<div class="input-group col-lg-12 mb-4">
					<div class="input-group-prepend">
						<span class="input-group-text bg-white px-4 border-md border-right-0">
							<i class='bx bx-envelope-open text-muted'></i>
						</span>
					</div>
					<input id="email" v-model="field.email" type="email" name="email" placeholder="alamat_email_anda@email.com" class="form-control bg-white border-left-0 border-md">

					<div class="col-lg-12 col-xs-12 col-sm-12">
						<small class="text-danger">*Wajib diisi</small>
						<br />
					</div>
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<small v-if="validation.email" class="mt-2 text-danger">
							{{validation.email[0]}}
						</small>
					</div>
				</div>

				<!-- Phone Number -->
				<div class="input-group col-lg-12 mb-4">
					<div class="input-group-prepend">
						<span class="input-group-text bg-white px-4 border-md border-right-0">
							<i class='bx bx-phone text-muted'></i>
						</span>
					</div>

					<vue-tel-input type="number" v-model="field.phone" class="bg-white border-md border-left-0 pl-3" id="phone" name="phone"></vue-tel-input>
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<small class="text-danger">*Wajib diisi</small>
						<br />
					</div>
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<small v-if="validation.phone" class="mt-2 text-danger">
							{{validation.phone[0]}}
						</small>
					</div>
				</div>


				<!-- Job -->
				<div class="input-group col-lg-12 mb-4">
					<div class="input-group-prepend">
						<span class="input-group-text bg-white px-4 border-md border-right-0">
							<i class='bx bx-globe text-muted'></i>
						</span>
					</div>
					<select
					name="province"
					class="form-control custom-select bg-white border-left-0 border-md"
					v-on:change="getCity"
					id="province">
					<option value="" data-id="">Pilih Provinsi</option>
					<option
					v-for="provins in provinces.provinsi"
					v-bind:value="provins.id"
					:value="provins.id"
					:data-id="provins.id"
					>{{ provins.nama }}</option
					>
				</select>

				<div class="col-lg-12 col-xs-12 col-sm-12">
					<small class="text-danger">*wajib di pilih salah satu</small>
					<br>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12">
					<small v-if="validation.province" class="mt-2 text-danger">
						{{validation.province[0]}}
					</small>
				</div>

			</div>

			<div class="input-group col-lg-12 mb-4">
				<div class="input-group-prepend">
					<span class="input-group-text bg-white px-4 border-md border-right-0">
						<i class='bx bx-globe text-muted'></i>
					</span>
				</div>
				<!-- <pre>
					{{ citys.kota_kabupaten ? true : false }}
				</pre> -->
				<select
				name="city"
				class="form-control custom-select bg-white border-left-0 border-md"
				id="city"
				>
				<option v-if="loading_city">
					<div class="d-flex align-items-center">
						<strong>Loading... &#9200;</strong>
						<div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
					</div>
					<!-- <img src="https://www.guruumeditation.net/wp-content/uploads/2017/11/Dependent-Animation.gif" class="img-fluid" width="80"> -->
				</option>
				<option v-else value="">
					<div v-if="citys.kota_kabupaten">
						Silahkan pilih kota
					</div>
					<div v-else>
						Pilih Kota (*Pilih provinsi terlebih dahulu)
					</div>
				</option>
				<option v-if="citys.kota_kabupaten"
				v-for="city in citys.kota_kabupaten"
				:key="city.id"
				:value="city.nama"
				>{{ city.nama }}</option
				>
			</select>
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<small class="text-danger">*wajib di pilih salah satu</small >
				<br>
			</div>

			<div class="col-lg-12 col-xs-12 col-sm-12">
				<small v-if="validation.city" class="mt-2 text-danger">
					{{validation.city[0]}}
				</small>
			</div>

		</div>

		<!-- Password -->
		<div class="input-group col-lg-6 mb-4">
			<div class="input-group-prepend">
				<span class="input-group-text bg-white px-4 border-md border-right-0">
					<i class='bx bx-lock-alt text-muted'></i>
				</span>
			</div>
			<input v-model="field.password" placeholder="password"
			type="password"
			name="password"
			id="password" class="form-control bg-white border-left-0 border-md">

			<div class="col-lg-12 col-xs-12 col-sm-12">
				<small class="text-danger">*wajib di isi</small>
				<br />
				<div
				id="show-password"
				class="show"
				v-on:click="showPassword"
				>
				<div v-if="showing === false">
					<span v-html="show"></span> Show Password
				</div>
				<div v-else>
					<span v-html="hide"></span> Hide Password
				</div>
			</div>
		</div>
		<div class="col-lg-12 col-xs-12 col-sm-12">
			<small v-if="validation.password" class="mt-2 text-danger">
				{{validation.password[0]}}
			</small>
		</div>

	</div>

	<!-- Password Confirmation -->
	<div class="input-group col-lg-6 mb-4">
		<div class="input-group-prepend">
			<span class="input-group-text bg-white px-4 border-md border-right-0">
				<i class='bx bx-lock-alt text-muted'></i>
			</span>
		</div>
		<input v-model="field.password_confirmation" placeholder="Ketik ulang password anda"
		type="password"
		name="password_confirmation"
		id="password_confirmation" class="form-control bg-white border-left-0 border-md">

		<div class="col-lg-12 col-xs-12 col-sm-12">
			<small class="text-danger">*Ulangi password</small>
			<div
			id="show-password"
			class="show"
			v-on:click="showPasswordConfirm"
			>
			<div v-if="showingConfirm === false">
				<span v-html="show"></span> Show Password
			</div>
			<div v-else>
				<span v-html="hide"></span> Hide Password
			</div>
		</div>
	</div>

	<div class="col-lg-12 col-xs-12 col-sm-12">
		<small v-if="validation.password_confirmation" class="mt-2 text-danger">
			{{validation.password_confirmation[0]}}
		</small>
	</div>

</div>

<!-- Submit Button -->
<div class="form-group col-lg-12 mx-auto mb-0">
	<button type="submit" class="btn btn-primary rounded-pill btn-block">
		<div v-if="loading">
			<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
			Loading...
		</div>
		<div v-else>
			Join Member
		</div>
	</button>
</div>

</div>
</form>
</div>
</template>

<script>
	export default{
		props: ['dataSponsor', 'storeNewMember', 'validation', 'field', 'citys', 'provinces', 'getCity', 'hide', 'showPassword', 'showPasswordConfirm', 'showing', 'showingConfirm', 'show', 'hide', 'loading', 'loading_city']
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

.show{
	cursor: pointer;
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