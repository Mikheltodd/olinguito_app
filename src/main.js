// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import vueRouter from "vue-router";
import router from "./router";
import VueCurrencyFilter from "vue-currency-filter";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import vueScrollto from "vue-scrollto";
import moment from "moment";

Vue.use(vueRouter);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCurrencyFilter, {
  symbol: "$", // El símbolo, por ejemplo €
  thousandsSeparator: ",", // Separador de miles
  fractionCount: 0, // ¿Cuántos decimales mostrar?
  fractionSeparator: ".", // Separador de decimales
  symbolPosition: "front", // Posición del símbolo. Puede ser al inicio ('front') o al final ('') es decir, si queremos que sea al final, en lugar de front ponemos una cadena vacía ''
  symbolSpacing: true // Indica si debe poner un espacio entre el símbolo y la cantidad
});
Vue.use(vueScrollto);
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY"); //Da formato a fechas
  }
});
Vue.filter("formatHour", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY hh:mm:ss"); //Da formato como fecha y hora
  }
});

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
});
