import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import router from "./router"

import 'vant/lib/index.css'

//@ts-ignore
window.require = (str: string) => new URL(str, import.meta.url).href

createApp(App)
    .use(router)
    .mount('#app')
