<template>
	<div>

		<!-- {{ hadistToShow }} -->

		<div v-if="hadistIndex < results.length" v-for="hadistIndex in hadistToShow" class="row justify-content-center">
			<div  class="col-md-12 col-xs-12 col-sm-12 mt-5 mb-5">
				<div class="card card-quran">
					<div class="card-body">
						<h3 class="card-title">Hadist {{ name }} <span class="circle-number">{{ results[hadistIndex-1].number }}</span></h3>
						<div class="ayat mb-5 mt-2">
							<h4>
								{{ results[hadistIndex-1].arab }}
							</h4>
						</div>
						<p class="card-text">
							{{ results[hadistIndex-1].id }}
						</p>

					</div>
				</div>
			</div>
		</div>

		<div v-if="hadistToShow < results.length || results.length > hadistToShow" class="col-lg-12 col-xs-12 col-sm-12">
			<div class="d-grid gap-2">
				<button @click="hadistToShow += 4" class="btn btn-outline-primary btn-load-more btn-lg btn-block">Load More Hadist</button>
			</div>
		</div>


		<!-- <div v-for="result in results" class="row justify-content-center">

			<div  class="col-md-12 col-xs-12 col-sm-12 mt-5 mb-5">
				<div class="card card-quran">
					<div class="card-body">
						<h3 class="card-title">Hadist {{ name }} <span class="circle-number">{{ result.number }}</span></h3>
						<div class="ayat mb-5 mt-2">
							<h4>
								{{ result.arab }}
							</h4>
						</div>
						<p class="card-text">
							{{ result.id }}
						</p>

					</div>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
	export default{
		props: ['results', 'hadistToShow', 'totalHadist', 'name']
	}
</script>


<style>
	.card-header h3{
		font-family: 'quran';
		font-weight: 700;
	}
	.card-body .card-title h6{
		font-family: 'quran';
		font-weight: 700;
	}

	.ayat h5{
		font-family: 'quran';
		font-weight: 700;
		font-size: 31px;
	}

	.ayat h4{
		font-family: 'quran';
		font-weight: 700;
		font-size: 37px;
	}

	.ayat h3{
		font-family: 'quran';
		font-weight: 700;
	}

	.ayat h1{
		font-family: 'quran';
		font-weight: 700;
	}

	.ayat h4{
		font-size: 21px;
	}

	.circle-number  {
		font-family: 'AlQalam';
		background: rgba(0, 0, 0, 0.7);
		font-size: 1.7rem !important;
		border-radius: 0.8em;
		-moz-border-radius: 0.8em;
		-webkit-border-radius: 0.8em;
		color: #ffffff;
		display: inline-block;
		font-weight: bold;
		line-height: 1.5em;
		margin-right: 5px;
		text-align: center;
		width: 1.6em;
	}

	.page-link {
		cursor: pointer;
	}

	.disabled{
		cursor: not-allowed;
	}

	.btn-load-more {
		background: linear-gradient(to right, #42A5F5, #5C6BC0);
		border: 2px solid #fff;
		color: #fff;
		border-radius: 10px;
		filter: drop-shadow(15px 13px 18px black);
		margin-bottom: 15rem;
		margin-top: 5rem;
	}
	.btn-load-more:hover{
		background: linear-gradient(to left, salmon, lightsalmon);
		transform: translateY(-10%);
	}
</style>