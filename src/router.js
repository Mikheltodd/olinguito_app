import vueRouter from "vue-router";
import Hotel from "./components/Hotel";
import Hotel_info from "./components/Hotel_info";
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
      name: "hotel_info",
      component: Hotel_info
    },
    {
      path: "/hotel/calculation",
      name: "calculation",
      component: Calculation
    }

  ]
});
export default router;
