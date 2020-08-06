# Vuex Usage Pattern Example

A couple notes here. In my own projects I use the language of Events and Commands. I've framed things here in Mutations and Actions language. But the semantics are the same: both are messages. Actions are messages you can say "no" to. Mutations are messages you MUST handle in some way - they have already happened. (This is why I name them in the past tense)