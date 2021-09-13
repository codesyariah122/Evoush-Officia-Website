<template>
	<div>
		<div class="row justify-content-center">

			<div v-for="result in results" class="col-md-4 col-xs-4 col-sm-4 mt-5 mb-5">
				<div class="card card-quran">
					<div class="card-body ayat">
						<h3 class="card-title">Hadist {{ name }} - Number {{ result.number }}</h3>
						<h4 class="card-subtitle mb-2 text-muted">
							{{ result.arab }}
						</h4>
						<p class="card-text">
							{{ result.id }}
						</p>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['results', 'name']
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

</style>