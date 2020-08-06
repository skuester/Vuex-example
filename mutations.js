// Simplest possible: a function that creates the mutation
export function EmailSent(address, from) {
	return {
		type: 'EmailSent',
		address,
		from,

		// Again, maybe you don't use this every time.
		// BUT - there have been times I've wanted to show a user what happened.
		// how great to be abe to to mutations.map(m => m.toString())
		toString() {
			return `An email was sent to ${this.address} from ${this.from}`
		}
	}
}
