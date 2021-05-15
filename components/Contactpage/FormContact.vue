<template>
	<div>
		<div class="container">
			<div class="row mb-5">
				<div class="col-12 col-sm-12 col-xs-12">
					<!-- <pre>
						{{result}}
					</pre> -->

					<form action="https://getform.io/f/5b6c2b8e-b242-44dd-bbdd-46f7706a6721" method="POST">
						<div class="form-group">
							<label for="email">Email address</label>
							<input type="email" class="form-control" id="email" placeholder="Enter valid email" name="email" required="required">
							<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>
						
						<div class="form-group">
							<label for="name">Full name</label>
							<input type="text" class="form-control" id="name" placeholder="Your Fullname" name="name" required="required">
						</div>
						<div class="form-group">
							<label for="message">Message : </label>
							<textarea class="form-control" id="message" rows="3" name="message" required="required"></textarea>
						</div>

						<hr>

						<div class="success" v-if="isSuccess">We received your submission, thank you!</div>

						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
