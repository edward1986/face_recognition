
  require('./bootstrap');

window.Vue = require('vue');

const app = new Vue({
    render: h => h(require('./components/ExampleComponent').default)
}).$mount('#app');
