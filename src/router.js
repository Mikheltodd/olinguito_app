import vueRouter from "vue-router";
import Hotel from "./components/Hotel";
import Hotel_info from "./components/Hotel_info";
import Calculation from "./components/Calculation";
import Lista_hoteles from "./components/Lista_hoteles";
import Calculations_list from "./Components/Calculations_list";
import UserAuth from './components/UserAuth'
import App from "./App";
import User from './components/User'
import Creation_hotel from './components/Creation_hotel'
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
      path: '/user/:username',
      name: "user",
      component: User
    },
    {
      path: '/user/auth',
      name: "user_auth",
      component: UserAuth
    },
  
    {
      path: "/hotel/:hotel_name",
      name: "hotel_name",
      component: Hotel
    },
    {
      path: "/hotel/create/",
      name: "creation_hotel",
      component: Creation_hotel  
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
    },
    {
      path: "/hotel/Lista_hoteles",
      name:"Lista_hoteles",
      component: Lista_hoteles
    },
    {
      path: "/hotel/Calculations_list",
      name:"Calculations_list",
      component: Calculations_list
    }

  ]
});
export default router;
