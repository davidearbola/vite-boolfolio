<script>
export default {
	name: "AppContacts",
	components: {},
	data() {
		return {};
	},
	methods: {},
	mounted() {},
};
</script>

<template>
	<form action="">
		<div class="mb-3">
			<label for="nameForm" class="form-label">Name</label>
			<input type="text" class="form-control" id="nameForm" />
		</div>
		<div class="mb-3">
			<label for="emailForm" class="form-label">Email address</label>
			<input type="email" class="form-control" id="emailForm" />
		</div>
		<div class="mb-3">
			<label for="messageForm" class="form-label">Message</label>
			<textarea class="form-control" id="messageForm" rows="3"></textarea>
		</div>
		<div>
			<button class="btn btn-dark" type="submit">Submit</button>
		</div>
	</form>
</template>

<style scoped></style>
