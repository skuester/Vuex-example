import { SendEmail } from "./actions"
import { EmailSent } from "./mutations"


// This could be the app's store, or a module for a section of the app
export const store = new Vuex.Store({
	state: {
		emails_sent_count: 0,
	},

	mutations: {
		[EmailSent.name](state) {
			state.emails_sent += 1
		}
	},

	actions: {
		// this could be wrapped in sugar, but a no magic version:
		[SendEmail.name]({ commit }, { address, from}) {
			commit(EmailSent(address, from))
		}
	}
})
