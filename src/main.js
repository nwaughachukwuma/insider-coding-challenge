import Vue from 'vue';
import { Button, Message } from 'buefy';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import store from './store';

import 'buefy/dist/buefy.css';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.use(Button);
Vue.use(Message);

Vue.config.productionTip = false;

new Vue({
	store,
	render: h => h(App)
}).$mount('#app');
