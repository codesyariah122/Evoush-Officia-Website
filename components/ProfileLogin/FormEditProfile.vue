<template>
	<div>
		<div class="container rounded bg-white mt-5">
			<div class="row edit-form">
				<div class="col-md-4 border-right">
					<div v-for="edit in edits" class="d-flex flex-column align-items-center text-center p-3 py-5">
						<div v-if="edit.avatar">
							<img class="rounded-circle mt-5" :src="`https://app.evoush.com/storage/${edit.avatar}`" width="90">						
						</div>
						<span class="font-weight-bold" style="text-transform: capitalize;">{{edit.name}}</span>
						<span>{{edit.email}}</span>
						<span>{{edit.city}} | {{edit.province}}</span>
					</div>
				</div>

<!-- <pre>
	{{pilih}}
</pre>

<pre>
	{{edits}}
</pre> -->

				<div class="col-md-8">
					<div class="p-3 py-5">
						<div class="d-flex justify-content-between align-items-center mb-3">
							<div class="d-flex flex-row align-items-center back">
								<a @click="historyBack()" class="btn btn-primary"><i class='bx bx-arrow-back'></i> Kembali</a>
							</div>
							<h6 class="text-right">Edit Profile</h6>
						</div>
						<form>
							<div class="row mt-2">
								<div class="col-md-6"><input type="text" class="form-control" placeholder="Nama Lengkap" :value="edits[0].name"></div>
								<div class="col-md-6"><input type="text" class="form-control" placeholder="Username Member" :value="edits[0].username"></div>
							</div>
							<div class="row mt-3">
								<div class="col-md-6"><input type="text" class="form-control" placeholder="Email@address.com" :value="edits[0].email"></div>
								<div class="col-md-6"><input type="text" class="form-control" placeholder="Phone number / format: 6282xxxxxxxxx" :value="edits[0].phone"></div>
							</div>
							<div class="row mt-3">
								<div class="col-md-6">
									<select name="province" class="form-control" v-on:change="getCity">
										<option :value="edits[0].province">{{edits[0].province}}</option>
										<option value="" data-id=""><b>Ubah Provinsi</b></option>
										<option v-for="provins in provinces" v-bind:value="provins.id" :value="provins.id" :data-id="provins.id" id="province">{{provins.nama}}</option>
									</select>
								</div>
								<div class="col-md-6">
									<div v-if="!pilih">
										<select name="city" class="form-control" id="city">
											<option :value="edits[0].city">{{edits[0].city}}</option>
										</select>
									</div>
									<div v-else>
										<select name="city" class="form-control" id="city">
											<option value="">Pilih Kota</option>
											<option v-for="city in citys" :key="city.id" :value="city.nama">{{city.nama}}</option>
										</select>
									</div>
								</div>
							</div>
							<div class="row mt-3">
								<div class="col-md-6"><input type="text" class="form-control" placeholder="example(https://www.youtube.com/channel/UCIzNgeNDD58z8XNppkopwzw)" :value="edits[0].youtube"></div>
								<div class="col-md-6"><input type="text" class="form-control" placeholder="Facebook username" :value="edits[0].facebook"></div>
							</div>
							<div class="row mt-3">
								<div class="col-md-6"><input type="text" class="form-control" placeholder="Instagram username" :value="edits[0].instagram"></div>
								<div class="col-md-6"><textarea name="quotes" placeholder="Your quotes max: 100character" class="form-control">{{edits[0].quotes}}</textarea></div>
							</div>
							<div class="row mt-3">
								<div class="col-md-6">
									<div v-if="edits[0].avatar">
										<img class="rounded-circle mt-5 mb-3" :src="`https://app.evoush.com/storage/${edits[0].avatar}`" width="90"><br>
										<span class="text-info mt-2 mb-2">Current profile image</span><br>
										<small class="text-danger"><strong>Pilih file jika ingin mengubah profile image</strong></small>
										<input type="file" name="avatar">
									</div>
								</div>
								<div class="col-md-6">
									<div v-if="edits[0].cover">
										<img :src="`http://localhost:8000/storage/${edits[0].cover}`" width="100" class="img-fluid img-responsive">
										<span class="text-info mt-2 mb-2">Current profile cover</span><br>
										<small class="text-danger"><strong>Pilih file jika ingin mengubah profile cover</strong></small>
										<input type="file" name="cover">
									</div>
									<div v-else>
										<small class="text-danger"><strong>Pilih file jika ingin menambah profile cover</strong></small>
										<input type="file" name="cover">
									</div>
								</div>
							</div>
							<div class="row mt-3">
								<div class="col-md-12">
									<div v-if="edits[0].about">
										<small class="text-danger mt-3 mb-2"><strong>Ketik di bagian text editor di bawah jika ingin mengubah success story anda</strong></small>
										<textarea id="full-featured-non-premium" class="form-controll" :value="edits[0].about" name="message"></textarea>
									</div>
									<div v-else>
										<small class="text-danger mt-3 mb-2"><strong>Silahkan tambahkan success story di text editor berikut</strong></small>
										<textarea id="full-featured-non-premium" class="form-controll" name="message"></textarea>
									</div>
								</div>
							</div>

							<div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		props: ['edits'],
		 data(){
		 	return {
		 		provinces: [],
		 		pilih: false,
		 		citys: []
		 	}
		 },
		head(){
			return {
				title: `Edit Profile ${this.edits[0].name}`
			}
		},

		mounted(){
			this.getProvinsi(),
			this.activeTinyMce()
		},
		methods: {
			updateProfile(){

			},

			getProvinsi(){
				this.$axios.$get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
				.then(res => {
					// console.log(res)
					this.provinces = res.provinsi
				})
			},
			getCity(e){
				const id = e.target.value
				this.$axios.$get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`)
				.then(res => {
					console.log(res)
					this.pilih = true
					this.citys = res.kota_kabupaten
				})
			},

			historyBack(){
				return this.$router.back()
			},

			activeTinyMce(){

				let useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

				tinymce.init({
					selector: 'textarea#full-featured-non-premium',
					plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
					imagetools_cors_hosts: ['picsum.photos'],
					menubar: 'file edit view insert format tools table help',
					toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
					toolbar_sticky: true,
					autosave_ask_before_unload: true,
					autosave_interval: '30s',
					autosave_prefix: '{path}{query}-{id}-',
					autosave_restore_when_empty: false,
					autosave_retention: '2m',
					image_advtab: true,
					link_list: [
					{ title: 'My page 1', value: 'https://www.tiny.cloud' },
					{ title: 'My page 2', value: 'http://www.moxiecode.com' }
					],
					image_list: [
					{ title: 'My page 1', value: 'https://www.tiny.cloud' },
					{ title: 'My page 2', value: 'http://www.moxiecode.com' }
					],
					image_class_list: [
					{ title: 'None', value: '' },
					{ title: 'Some class', value: 'class-name' }
					],
					importcss_append: true,
					file_picker_callback: function (callback, value, meta) {
						/* Provide file and text for the link dialog */
						if (meta.filetype === 'file') {
							callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
						}

						/* Provide image and alt text for the image dialog */
						if (meta.filetype === 'image') {
							callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
						}

						/* Provide alternative source and posted for the media dialog */
						if (meta.filetype === 'media') {
							callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
						}
					},
					templates: [
					{ title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
					{ title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
					{ title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
					],
					template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
					template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
					height: 600,
					image_caption: true,
					quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
					noneditable_noneditable_class: 'mceNonEditable',
					toolbar_mode: 'sliding',
					contextmenu: 'link image imagetools table',
					skin: useDarkMode ? 'oxide-dark' : 'oxide',
					content_css: useDarkMode ? 'dark' : 'default',
					content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
				});
			}
		}
	}
</script>


<style scoped>
	
.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: #BA68C8;
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}
</style>