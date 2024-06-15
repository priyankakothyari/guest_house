import './assets/main.css'
import './assets/js/jquery-3.3.1.min.js'
// import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(router)

app.mount('#app')
