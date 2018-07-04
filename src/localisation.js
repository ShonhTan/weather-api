/**
 * Import Dependency
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'


const fr = {
  app: {
    title:"Appli Météo",
    noinfo: "Pas d'information",
    nocityname: "(Entrez un nom de ville)",
    notfound: "(Aucune ville n'a été trouvée)"
  },
  appInput:{
    citylabel:"Ville",
    ok: "Valider",
    languagelabel:"Langue",
    placeholder: "Exemple: Paris"
  },
  showToday:{
    title: "Météo actuelle à {place}",
    temperature: "Température",
    tempmin:"Minimale:",
    tempaverage:"Moyenne:",
    tempmax:"Maximale:",
    humidity: "Humidité",
    pressure: "Pression",
    wind: "Vent",
    windspeed: "Vitesse:",
    winddirection: "Direction:",
    clouds: "Couverture nuageuse",
    sunrise: "Levé de soleil",
    sunset: "Couché de soleil"
  },
  showNext: {
    title: "Météo des 5 prochains jours",
    dayDetail: [
      "Aujourd'hui",
      "Demain",
      "Après-demain"
    ]
  },
  showNextItem: {
    from: "de",
    to: "à"
  }
}

const en = {
  app: {
    title:"Weather App",
    noinfo: "No information",
    nocityname: "(Enter a city name)",
    notfound: "(City not found)"
  },
  appInput:{
    citylabel:"City",
    ok: "OK",
    languagelabel:"Language",
    placeholder: "Example: Paris"
  },
  showToday:{
    title: "Current weather in {place}",
    temperature: "Temperature",
    tempmin:"Minimum:",
    tempaverage:"Average:",
    tempmax:"Maximum:",
    humidity: "Humidity",
    pressure: "Pressure",
    wind: "Wind",
    windspeed: "Speed:",
    winddirection: "Direction:",
    clouds: "Cloudiness",
    sunrise: "Sunrise time",
    sunset: "Sunset time"
  },
  showNext: {
    title: "Weather for the next 5 days",
    dayDetail: [
      "Today",
      "Tomorrow",
      "After tomorrow"
    ]
  },
  showNextItem: {
    from: "from",
    to: "to"
  }
}

const jp = {
  app: {
    title:"天気アプリ",
    noinfo: "情報なし",
    nocityname: "(都市名を入力してください)",
    notfound: "(都市が見つかりません)"
  },
  appInput:{
    citylabel:"シティ",
    ok: "検証",
    languagelabel:"言語",
    placeholder: "例: Paris"
  },
  showToday:{
    title: "{place}の天気",
    temperature: "温度",
    tempmin:"最小:",
    tempaverage:"平均:",
    tempmax:"最大:",
    humidity: "湿度",
    pressure: "圧力",
    wind: "風",
    windspeed: "速度:",
    winddirection: "方向:",
    clouds: "曇り",
    sunrise: "日の出時間",
    sunset: "夕焼け時"
  },
  showNext: {
    title: "次の5日間の天気",
    dayDetail: [
      "今日",
      "明日",
      "明後日"
    ]
  },
  showNextItem: {
    from: "",
    to: "→"
  }
}

/**
 * Config
 */
Vue.use(VueI18n)

/**
 * Export
 */
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
		}
	}
})