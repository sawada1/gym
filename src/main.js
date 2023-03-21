import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/sass/mainstyle.scss'

createApp(App).use(store).use(router).mount('#app')
