<template>
	<div>
		<!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="row mt-1">
          <div class="col-lg-4">
            <div class="info mb-2">
              <div v-for="panel in panels" class="address">
                <i class="icofont-google-map text-white"></i>
                <h4>Location:</h4>
                <p><b v-html="panel.lokasi"></b></p>
                <br>
                <div class="container">
                  <Location/>
                  <!-- <div class="embed-responsive embed-responsive-16by9">
                    <iframe align="center" width="250" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="panel.map" style="border: 1px solid black"></iframe>
                    <br/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15824.382293592016!2d112.7473496!3d-7.4546784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4368c61e34a370d1!2sPineleng%20indah%20cemerlang!5e0!3m2!1sid!2sid!4v1629692205791!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    <small><a href="https://www.openstreetmap.org/?mlat=-7.46097&amp;mlon=112.74037#map=17/-7.46097/112.74037&amp;layers=D">View Larger Map</a></small>
                  </div> -->
                </div>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>
                  <a :href="contact.email.href">{{contact.email.label}}</a>
                </p>
              </div>

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Call:</h4>
                <a :href="contact.wa.href">{{contact.wa.label}}</a>
              </div>
            </div>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0 form-contact">
            <!-- <div v-if="loading">
              <img src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340" class="img-fluid">
            </div> -->

            <div v-if="show">
              <div v-if="!success">
                <div class="alert alert-danger">
                  {{err_message}}
                </div>
              </div>

              <div v-else>
                <div class="alert alert-warning">
                  {{message}}
                </div>
              </div>
            </div>


              <form @submit.prevent="KirimEmail"
              role="form"
              class="php-email-form mt-2"
              >
              <br><br>
              <input type="hidden" name="ip_address" id="ip_address" :value="ip_address">

              <div class="form-row">
                <div class="col-md-4 form-group mt-2 ml-3">
                  <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Nama Lengkap"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars" v-model="contacts.name"
                  />
                  <div v-if="errors.name">
                    <span class="mt-2 mb-2 text-danger">
                      {{errors.name[0]}}
                    </span>
                  </div>
                </div>
                <div class="col-md-7 form-group mt-2">
                  <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="alamat_email@emailanda.com"
                  data-rule="email"
                  data-msg="Please enter a valid email" v-model="contacts.email"
                  />
                  <div v-if="errors.email">
                    <span class="mt-2 mb-2 text-danger">
                      {{errors.email[0]}}
                    </span>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-6 form-group mt-2 ml-3">
                  <!-- <input
                  type="text"
                  name="phone"
                  class="form-control"
                  id="phone"
                  placeholder="No telephone aktif anda: example(082x xxxx xxxx)"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars" v-model="contacts.phone"
                  /> -->
                  <vue-tel-input v-model="contacts.phone"></vue-tel-input>
                  <div v-if="errors.phone">
                    <span class="mt-2 mb-2 text-danger">
                      {{errors.phone[0]}}
                    </span>
                  </div>
                </div>
                <div class="form-group col-md-5">
                  <!--   <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                      /> -->
                      <small class="text-danger blockquote-footer">-Pilih kategori dibawah ini</small>
                      <select class="form-control" name="category_id" id="category_id">
                        <option v-for="subject in subjects" :value="subject.id">
                          {{subject.name}}
                        </option>
                      </select>
                      <div class="validate">

                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="col-md-5 form-group mt-2 ml-3">
                    <!-- <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      /> -->
                      <select name="province" id="province" class="form-control" v-on:change="getCity">
                        <option value="" data-id=""><b>Pilih Provinsi</b></option>
                        <option v-for="provins in provinces" v-bind:value="provins.id" :data-id="provins.id">{{provins.nama}}</option>
                      </select>
                      <div class="validate">
                      </div>
                      <div v-if="errors.province">
                        <span class="mt-2 mb-2 text-danger">
                          {{errors.province[0]}}
                        </span>
                      </div>
                    </div>
                    <div class="col-md-5 form-group mt-2">
                   <!--  <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      /> -->
                      <select name="city" id="city" class="form-control">
                        <option value="">Pilih Kota</option>
                        <option v-if="pilih" v-for="city in citys" :key="city.id" v-bind:value="city.nama">{{city.nama}}</option>
                      </select>
                      <div class="validate">
                      </div>
                      <div v-if="errors.city">
                        <span class="mt-2 mb-2 text-danger">
                          {{errors.city[0]}}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="form-group col-md-12">
                   <!--  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Pesan anda disini ..." id="message" v-model="contacts.message"
                    ></textarea> -->
                    <tinymce id="d1" v-model="contacts.message"></tinymce>
                    <div class="validate">
                    </div>
                    <div v-if="errors.message">
                      <span class="mt-2 mb-2 text-danger">
                        {{errors.message[0]}}
                      </span>
                    </div>
                  </div>

                  <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn btn-primary mb-5">
                      <div v-if="loading">
                        <small class="text-white">Loading ... </small> <br>
                        <img src="http://www.esdairga.com/images/loading.gif" class="img-fluid" width="30">
                      </div>
                      <div v-else>
                        <span>Send Message</span>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <!-- End Contact Section -->
      </div>
    </template>


    <script>
      import Location from '@/components/Contacts/Location'

      export default{

        components: {
          Location
        },

        data(){
          return {
            status: '',
            time:{
              now: null,
              close: 18,
              buka: 8
            },
            panels: [
            {
              id:1,
              header: `Our Office`,
              lokasi: "Pergudangan sirie, Jl. Raya Rangkah Kidul No.20, Rangkah Kidul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61234",
              jam: "08:00",
              kesehatan_keselamatan: `
              Perlu janji temu <br/>
              <ol>
              <li>Wajib mengenakan masker</li>
              <li>Wajib mengukur suhu tubuh</li>
              <li>Staf mengenakan masker</li>
              <li>Staf telah melakukan pengukuran suhu tubuh</li>
              <li>Staf wajib menyemprotkan disinfektan ke permukaan di antara kunjungan pelanggan</li>
              </ol>`,
              map: "https://www.openstreetmap.org/export/embed.html?bbox=112.73208618164064%2C-7.467283443100185%2C112.7485227584839%2C-7.45424124788113&amp;layer=mapnik",
              anim: "https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/animated/anim30.gif",
              vector: "https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/kantor/Depan.jpg",
            }
            ],
            show: null,
            alert: '',
            success: null,
            loading: false,
            message: '',
            err_message:'',
            contact: {
              email: {href: 'mailto:evoushofficiall@gmail.com', label: 'evoushofficiall@gmail.com'},
              wa: {href:'https://wa.me/6282114610011?text=Hallo%20Admin%20Evoush%20Official%20Apakah%20Anda%20bisa%20bantu%20saya%20untuk%20mengetahui%20bisnis-plan%20dan%20daftar%20product%20evoush', label: '+62 8211 4610 011'}
            },
            errors: {
              name: '',
              phone: '',
              email: '',
              message:''
            },
            contacts: {},
            subjects: [
            {id:5, name: "Umum"},
            {id:6, name: "Product evoush"},
            {id:7, name: "Bisnis evoush"}
            ],
            provinces: [],
            citys: [],
            ip_address: {},
            validate: {}
          }
        },

        mounted(){
          this.getProvinsi(),
          this.$axios('https://api.ipify.org/?format=jso')
          .then(res => {
            this.ip_address = res.data
          })
          .catch(err => console.log(err.response))
        },

        methods: {
          getProvinsi(){
           this.$axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
           .then(res => {
              // console.log(res)
              this.provinces = res.data.provinsi
            })
           .catch(err => console.log(err.response))
         },

         getCity(e){
           const id = e.target.value
           this.$axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`)
           .then(res => {
                this.province = id
                // console.log(this.fields.province)
                this.pilih = true
                this.citys = res.data.kota_kabupaten
                // console.log(this.citys)
            })
         },

         KirimEmail(e){
          e.preventDefault();
          this.loading = true
          // this.$toast("Kami sedang melakukan proses mengirim pesan anda")
          const FormData = {
            name: this.contacts.name,
            email: this.contacts.email,
            phone: this.contacts.phone,
            category_id: document.querySelector('#category_id').value,
            message: this.contacts.message,
            province: document.querySelector('#province').value,
            city: document.querySelector('#city').value,
            ip_address: document.querySelector('#ip_address').value,
            username: null
          }

          this.$axios.post('https://app.evoush.com/api/evoush/kirim-email', {
            name: FormData.name,
            email: FormData.email,
            phone: FormData.phone,
            category_id: FormData.category_id,
            message: FormData.message,
            province: FormData.province,
            city: FormData.city,
            ip_address: FormData.ip_address,
            username: FormData.username
          })
          .then(res => {
            this.message = res.data.message
            if(this.message){
               e.target.reset()
               this.contacts.name = ''
               this.contacts.email = ''
               this.contacts.phone = ''
               this.contacts.message = ''
               this.show = true
               this.success = true
               this.alert = "success"
               this.loading = false
               this.$toast(`Terima kasih ${FormData.name} pesan anda telah di kirim ke email admin evoush`)
            }
          })
          .catch(err => {
            this.loading = false
            this.show = true
            this.success = false
            this.alert = "danger"
            this.err_message = "Terjadi kesalahan saat pengiriman pesan, harap periksa kembali kolom inputan dengan lengkap dan benar."
            this.errors = err.response.data
            console.log(err.response)
            this.getAlert(this.err_message, 'https://www.desicomments.com/user/2008/02/5418/error.gif', 'https://e7.pngegg.com/pngimages/906/961/png-clipart-white-bricks-and-wall-background-clean-walls.png')
          })
          // .finally(()=>{

          // })
      },

      getAlert(message, gif, bg) {
        this.$swal({
          title: message,
          width: 600,
          padding: "3em",
          background: `#fff url(${bg})`,
          backdrop: `
          rgba(0,0,123,0.4)
          url("${gif}")
          left top
          no-repeat
          `
        });
      },

      toasts(message){
        this.$toast(message)
      }
    }
  }
</script>