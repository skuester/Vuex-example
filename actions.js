export function SendEmail(address, from) {
	return {
		type: 'SendEmail',
		address,
		from,

		// I've had a scenario where the user can build-up a command over a couple steps in a flow
		// It can verify that itself is complete
		is_complete() {
			return this.address && this.from
		},

		// This is unusual - but shows the interesting things you can do if you embrace actions/commands as objects,
		// and not just data structures
		instructions() {
			if (!this.address) {
				return 'You need to specify an address to send the email to.'
			}

			if (!this.from) {
				return 'You need to decide who this email is from.'
			}
		}
	}
}