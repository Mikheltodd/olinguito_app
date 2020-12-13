import vueRouter from "vue-router";
import Hotel from "./components/Hotel";
import Calculation from "./components/Calculation";
import App from "./App";
const router = new vueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "root",
      component: App
    },
    {
      path: "/hotel/:hotel_name",
      name: "hotel_name",
      component: Hotel
    },
    {
      path: "/hotel/details/:hotel_name",
      name: "calculation",
      component: Calculation
    }
  ]
});
export default router;
