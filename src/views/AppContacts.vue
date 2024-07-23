<script>
import axios from "axios";
export default {
	name: "AppContacts",
	components: {},
	data() {
		return {
			name: "",
			email: "",
			message: "",
			loading: false,
			success: false,
			errors: {},
		};
	},
	methods: {
		sendForm() {
			this.loading = true;
			const data = {
				name: this.name,
				email: this.email,
				message: this.message,
			};
			this.errors = {};
			axios.post("http://127.0.0.1:8000/api/contacts", data).then((response) => {
				this.success = response.data.success;
				if (!this.success) {
					this.errors = response.data.errors;
				} else {
					this.name = "";
					this.email = "";
					this.message = "";
				}
				this.loading = false;
			});
		},
	},
	mounted() {},
};
</script>

<template>
	<form @submit.prevent="sendForm()">
		<div class="mb-3">
			<label for="nameForm" class="form-label">Name</label>
			<input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" name="name" id="nameForm" v-model="name" />
			<p v-for="(error, index) in errors.name" :key="`name-error-${index}`" class="invalid-feedback">
				{{ error }}
			</p>
		</div>
		<div class="mb-3">
			<label for="emailForm" class="form-label">Email address</label>
			<input type="email" class="form-control" :class="{ 'is-invalid': errors.email }" name="email" id="emailForm" v-model="email" />
			<p v-for="(error, index) in errors.email" :key="`email-error-${index}`" class="invalid-feedback">
				{{ error }}
			</p>
		</div>
		<div class="mb-3">
			<label for="messageForm" class="form-label">Message</label>
			<textarea
				class="form-control"
				:class="{ 'is-invalid': errors.message }"
				name="message"
				id="messageForm"
				v-model="message"
				rows="3"></textarea>
			<p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="invalid-feedback">
				{{ error }}
			</p>
		</div>
		<div>
			<button class="btn btn-dark" type="submit">Submit</button>
		</div>
	</form>
</template>

<style scoped></style>
