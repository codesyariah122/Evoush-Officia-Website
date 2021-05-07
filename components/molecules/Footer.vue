<template>
	<div>
		<footer class="footer">
			<div class="mini-footer">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="copyright-text">
								<p>&copy;{{year}}
									<a href="https://evoush.vercel.app" class="brand"> {{brand}} <span class="text-white"> {{country}} </span> </a>. <br> 
									{{cops}} <a href="https://evoush.vercel.app"> {{comp}} </a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<style>
.mini-footer {
 background:#192027;
 text-align:center;
 padding:32px 0;
 margin-top: -2rem;
}
.mini-footer p {
 margin:0;
 line-height:26px;
 font-size:15px;
 color:#999
}
.mini-footer p a {
 color:#5867dd
}
.mini-footer p a:hover {
 color:#34bfa3
}
.brand{
	color: crimson!important;
}

@media (max-width:991px) {
 .footer-menu {
  padding-left:0
 }
}
</style>

<script>
	export default{
		data(){
			return {
				comp: "PT. Pineleng Indah Cemerlang",
				cops: "Hak Cipta Terpelihara Oleh",
				brand: "Evoush",
				country: "Indonesia",
				year: ""
			}
		},
		mounted(){
			this.getFooter()
		},
		methods: {
			getFooter(){
				this.year = new Date().getFullYear()
			}
		}
	}
</script>