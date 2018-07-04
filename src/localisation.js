import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import fr from "./locales/fr.json"
import en from "./locales/en.json"
import jp from "./locales/jp.json"
import ch from "./locales/ch.json"

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