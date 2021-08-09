<template>
	<div>
		<div class="col-lg-12 col-xs-12 col-sm-12 mb-5">
			<div class="card card-quran">
				<div class="card-body">
					<!-- <pre>
						{{select}}
					</pre> -->
					<h5 class="card-title">{{select.name.transliteration.id}} ({{select.name.translation.id}})</h5>
					<h6 class="card-subtitle mb-2 text-muted">{{select.name.long}}</h6>
					<p class="card-text">
						<ul style="list-style: none;">
							<li>Surah ke : {{select.number}}</li>
							<li>Jumlah Ayat : {{select.numberOfVerses}}</li>
						</ul>
						<blockquote class="blockquote-footer">
							{{select.tafsir.id}}
						</blockquote>
					</p>
					<nuxt-link :to="{name: 'surah-nomor', params: {nomor: select.number}}" class="card-link btn btn-outline-primary btn-block">Baca Surah</nuxt-link>
					<!-- <a href="#" class="card-link">Another link</a> -->
				</div>
			</div>
		</div>

		
	</div>
</template>

<script>
	export default{
		props: ['select']
	}
</script>