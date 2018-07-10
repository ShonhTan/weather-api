import Vue from 'vue'
import VueI18n from 'vue-i18n'

import fr from "./fr.json"
import en from "./en.json"
import jp from "./jp.json"
import ch from "./ch.json"

Vue.use(VueI18n)

export default new VueI18n({
	locale: 'fr',
	messages: {
		fr: {
			lang: fr
		},
		en: {
			lang: en
		},
		jp: {
			lang: jp
		},
		ch: {
			lang: ch
		}
	}
})