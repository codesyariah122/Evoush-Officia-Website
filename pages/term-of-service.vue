<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>	



			<article>
				<h1>Term Of Service</h1>

				<p>Halo, evousher <span class="text-primary">{{city}}</span>, Website official evoush telah diluncurkan sebagai website official dan website company profile dan juga web support atau web replika yang bisa <strong>evousher</strong> gunakan sebagai media branding, sebagai fasilitas bagi para leader-leader evoush juga tentunya untuk menaikan branding member <strong>evoush</strong>. <strong class="text-primary">PT. Pineleng Indah Cemerlang</strong> dengan Merk dagang <strong>evoush</strong>, akan selalu memberikan pelayanan terbaik bagi anda semua. Dan berikut ini dokumentasi dan aturan dalam penggunaan website official evoush dan web support, web replika leader evoush.</p>  

				<div class="all-questions">

					<h3 id="one">Homepage Website Official</h3>

					<p>Halaman homepage merupakan halaman awal dari website official evoush ini sendiri.</p>  

					<h3 id="two">How do many licks does a giraffe?</h3>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  

					<h3 id="three">Which Frank is?</h3>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  

					<h3 id="four">Is fourteen enough?</h3>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  

					<h3 id="five">Is a circle an oval y/n?</h3>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  

					<h3 id="six">Many mongerals manifest mountains</h3>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  

					<h3 id="seven">How would you like a soda drink?</h3>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  

					<h3 id="eight">I would very much like a soda drink.</h3>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  

					<h3 id="nine">Thank you for accepting the soda drink.</h3>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> 

				</div>

			</article>




		</div>
	</div>
</template>


<script>
	export default {
		layout: 'pages',
		data(){
			return {
				ip: '',
				city: ''
			}
		},

		mounted(){
			this.getToc(),
			this.getIp(),
			this.getLocation(this.ip)
		},

		methods: {
			getToc(){
				var ToC =
				"<nav role='navigation' class='table-of-contents'>" +
				"<h2>On this page:</h2>" +
				"<ul>";

				var newLine, el, title, link;

				$("article h3").each(function() {

					el = $(this);
					title = el.text();
					link = "#" + el.attr("id");

					newLine =
					"<li>" +
					"<a href='" + link + "'>" +
					title +
					"</a>" +
					"</li>";

					ToC += newLine;

				});

				ToC +=
				"</ul>" +
				"</nav>";

				$(".all-questions").prepend(ToC);
			},
			getIp(){
				this.$axios
				.get('https://api.ipify.org/?format=json')
				.then(res => {
		        	// console.log(res)
		        	this.ip = res.data.ip
        		})
        		.catch(err => console.log(err.message))
			},
			getLocation(ip){
				this.$axios
				.get(`https://ipapi.co/${ip}/json/`)
				.then(res => {
					this.city = res.data.city
				})
				.catch(err => console.log(err.message))
			}
		}

	}
</script>


<style scoped>
article {
  max-width: 50em;
  background: white;
  padding: 2em;
  margin: 1em auto;
}

.table-of-contents {
  float: right;
  width: 40%;
  background: #eee;
  font-size: 0.8em;
  padding: 1em 2em;
  margin: 0 0 0.5em 0.5em;
}
.table-of-contents ul {
  padding: 0;
}
.table-of-contents li {
  margin: 0 0 0.25em 0;
}
.table-of-contents a {
  text-decoration: none;
}
.table-of-contents a:hover,
.table-of-contents a:active {
  text-decoration: underline;
}

h3:target {
  animation: highlight 1s ease;
}

@keyframes highlight {
  from { background: yellow; }
  to { background: white; }
}
</style>