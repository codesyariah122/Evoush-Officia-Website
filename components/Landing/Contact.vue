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
              <div class="info mb-5">
                <div v-for="panel in panels" class="address">
                  <i class="icofont-google-map text-white"></i>
                  <h4>Location:</h4>
                  <p><b v-html="panel.lokasi"></b></p>
                  <br>
                  <div class="container">
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe align="center" width="250" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="panel.map" style="border: 1px solid black"></iframe>
                      <br/>
                        <small><a href="https://www.openstreetmap.org/?mlat=-7.46097&amp;mlon=112.74037#map=17/-7.46097/112.74037&amp;layers=D">View Larger Map</a></small>
                    </div>
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
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form mt-2"
              >
              <br><br>
                <div class="form-row">
                  <div class="col-md-4 form-group mt-2 ml-3">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="col-md-7 form-group mt-2">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div class="validate"></div>
                </div>
                <div class="form-group col-md-12">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div class="validate"></div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary mb-5">Send Message</button>
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
  export default{
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
        contact: {
          email: {href: 'mailto:evoushofficiall@gmail.com', label: 'evoushofficiall@gmail.com'},
          wa: {href:'https://wa.me/6282114610011?text=Hallo%20Admin%20Evoush%20Official%20Apakah%20Anda%20bisa%20bantu%20saya%20untuk%20mengetahui%20bisnis-plan%20dan%20daftar%20product%20evoush', label: '+62 8211 4610 011'}
        },
      }
    }
  }
</script>