<template>
  <div id="app">
    <header
      class="d-flex flex-grow-1 justify-content-between align-items-center fixed-top"
    >
      <img
        src="../img/olinguito-white.png"
        alt="logo"
        type="text/css"
        class="d-flex justify-content-start"
      />
      <b-button-group
        style="
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 0.25em;
        "
      >
        <b-button v-on:click="init" v-if="is_auth" variant="outline-dark"
          >Inicio</b-button
        >
        <b-dropdown right text="Hoteles" v-if="is_auth" variant="outline-dark">
          <b-dropdown-item>Crear Hotel</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item v-on:click="getBalance" v-if="is_auth"
            >Detalles del Hotel</b-dropdown-item
          >
          <b-dropdown-item v-on:click="getList"
            >Lista de Hoteles</b-dropdown-item
          >
        </b-dropdown>
        <b-dropdown right text="Cálculos" v-if="is_auth" variant="outline-dark">
          <b-dropdown-item v-on:click="getCalculation" v-if="is_auth"
            >Realizar Cálculos</b-dropdown-item
          >
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item v-on:click="getCalculationsList" v-if="is_auth"
            >Historial de Cálculos</b-dropdown-item
          >
        </b-dropdown>
        <b-button v-on:click="logOut" v-if="is_auth" variant="outline-dark"
          >Cerrar sesión</b-button
        >
      </b-button-group>
    </header>
    <main class="container-fluid">
      <div class="row" style="height: 15vh"></div>
      <div
        class="row flex-grow-1 d-flex align-items-center"
        style="min-height: 70vh"
      >
        <router-view v-on:log-in="logIn"></router-view>
      </div>
      <div class="row" style="height: 15vh"></div>
    </main>
    <footer class="row d-flex flex-grow-1 fixed-bottom">
      <div class="d-flex justify-content-center">
        <p>&copy; Misión TIC 2022</p>
      </div>
    </footer>
  </div>
</template>

<script>
import vueRouter from "vue-router";
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },
  methods: {
    updateAuth: function () {
      var self = this;
      self.is_auth = localStorage.getItem("isAuth") || false;

      if (self.is_auth == false) self.$router.push({ name: "user_auth" });
      else {
        let username = localStorage.getItem("current_username");
        self.$router.push({ name: "user", params: { username: username } });
      }
    },

    logIn: function (username) {
      localStorage.setItem("current_username", username);
      localStorage.setItem("isAuth", true);
      this.updateAuth();
    },

    logOut: function () {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("current_username");
      this.updateAuth();
    },

    // init: function () {
    //   if (this.$route.name != "hotel_name") {
    //     let hotel_name = localStorage.getItem("current_hotel_name");
    //     this.$router.push({
    //       name: "hotel_name",
    //       params: { hotel_name: hotel_name },
    //     });
    //   }
    // },
    init: function () {
      if (this.$route.name != "user") {
        let username = localStorage.getItem("current_username");
        this.$router.push({ name: "user", params: { username: username } });
      }
    },
    getBalance: function () {
      if (this.$route.name != "hotel_info") {
        let hotel_name = localStorage.getItem("current_hotel_name");
        this.$router.push({
          name: "hotel_info",
          params: { hotel_name: hotel_name },
        });
      }
    },
    getCalculation: function () {
      if (this.$route.name != "calculation") {
        this.$router.push({ name: "calculation" });
      }
    },
    getList: function () {
      if (this.$route.name != "Lista_hoteles") {
        this.$router.push({ name: "Lista_hoteles" });
      }
    },
    getCalculationsList: function () {
      if (this.$route.name != "Calculations_list") {
        this.$router.push({ name: "Calculations_list" });
      }
    },
  },
  created: function () {
    this.$router.push({ name: "root" });
    this.updateAuth();
  },

  // beforeCreate: function () {
  //   localStorage.setItem("current_hotel_name", "olinguito");
  //   localStorage.setItem("isAuth", true);
  //   this.$router.push({
  //     name: "hotel_name",
  //     params: { hotel_name: "olinguito" },
  //   });
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500;700;800&display=swap");
* {
  font-family: "Raleway", sans-serif;
  font-size: 3vh;
  margin: 0;
  padding: 0;
}

/* .wrapper {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  min-height: 100vh;
} */

header {
  /* grid-area: header;
  position: sticky;
  top: 0; */
  z-index: 1;
  align-items: center;
  padding: 0.5em 2em;
  max-height: 15vh;
  color: white;
  background: url("https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center center no-repeat;
  background-size: cover;
}

/* header h1 {
  max-width: 16em;
  margin: 0;
  font-size: 12vh;
  font-weight: bold;
  line-height: 0.9;
  text-align: center;
} */

header img {
  max-height: 10vh;
  width: auto;
}

/* header nav {
  max-height: 10vh;
  width: auto;
} */

/* button {
  display: inline-flex;
  padding: 0.675em;
  font-weight: bolder;
  text-decoration: none;
  border: 0.1em solid white;
  border-radius: 0.5em;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 0.5em;
  align-items: center;
} */

/* button:hover {
  color: black;
  background: white;
} */

/* main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  line-height: 1.5em;
  color: black;
  background-color: rgba(255, 254, 209, 0.5);
} */

/* main button {
  display: flex;
  overflow: auto;
  color: black;
  background-color: aqua;
} */

/* article {
  max-width: 36em;
  margin: 0 auto;
  padding: 1em;
} */

footer {
  /* grid-area: footer;
  position: sticky;
  bottom: 0; */
  align-items: center;
  padding: 1em;
  color: white;
  background: url("https://images.pexels.com/photos/3209049/pexels-photo-3209049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center center no-repeat;
  background-size: cover;
  justify-content: center;
  max-height: 15vh;
  width: auto;
}

footer p {
  font-weight: bolder;
  color: black;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 0.5em;
  padding: 1em;
  margin: 0.5em;
  align-items: center;
}

html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}

@media (min-width: 364px) {
  .btn {
    font-weight: bold;
    font-size: 0.7rem;
    padding: 0.5em;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .btn {
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5em;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .btn {
    font-weight: bold;
    font-size: 1.1rem;
    padding: 0.5em;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .btn {
    font-weight: bold;
    font-size: 1.175rem;
    padding: 0.5em;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .btn {
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.5em;
  }
}
</style>
