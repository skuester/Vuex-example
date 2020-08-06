<template>
	<div class="App">
		<input v-model="address"/>
		<input v-model="from"/>
		<button @click="send_email">Send Email</button>

		{{ emails_sent_count }}
	</div>
</template>

<script>
import { mapState } from "vuex"
import { SendEmail } from "./actions"



export default {
	computed: {
		...mapState('emails_sent_count')
	},
	methods: {
		send_email() {
			this.store.dispatch(SendEmail(this.address, this.from))
		}
	}
}
</script>
