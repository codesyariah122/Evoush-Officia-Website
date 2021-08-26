<template>
	<div>
		<section id="about" class="about">
			<div class="container" data-aos="fade-up">
				<div class="section-title">
					<h2>Send Free SMS</h2>
				</div>

				<div class="row justify-content-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<form @submit.prevent="SendingSms">
							<div class="form-group">
								<label for="phone">To : </label>
								  <vue-tel-input v-model="tell.phone" class="form-control"></vue-tel-input>
							</div>

							<div class="form-group">
								<label for="message">Message : </label>
								<textarea id="message" v-model="tell.message" name="message" class="form-control"></textarea>
							</div>

							<div class="form-group">
								<button type="submit" class="btn btn-primary">Kirim Sms</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>


<script>
	export default {
		data(){
			return{
				tell: {
					phone: '',
					message: ''
				}
			}
		},

		mounted(){
			this.getTextEditor()
		},
		methods: {
			SendingSms(e){
				const phone = this.tell.phone
				const message = this.tell.message
				// console.log(phone)
			},

			getTextEditor(){
				window.tinymce.init({
					selector: "#message",
					plugins: "emoticons",
					toolbar: "emoticons",
					toolbar_location: "bottom",
					menubar: false,
					setup: function (editor) {
						editor.on("change input undo redo", function () {
							me.$emit('input', editor.getContent({format: 'text'}))
						});
					}
				});
			}
		}
	}
</script>