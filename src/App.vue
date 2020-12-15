<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <img src="../img/olinguito-white.png" alt="logo" type="text/css" />
        <nav>
          <button v-on:click="init" v-if="is_auth">Inicio</button>
          <button v-on:click="getBalance" v-if="is_auth">Hotel</button>
          <button v-on:click="getCalculation" v-if="is_auth">Cálculo</button>
          <button v-on:click="getList">Lista de hoteles</button>
        </nav>
      </header>

      <main>
        <router-view></router-view>
      </main>

      <footer>
        <p>&copy; Misión TIC 2022</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },
  methods: {
    init: function () {
      if (this.$route.name != "hotel_name") {
        let hotel_name = localStorage.getItem("current_hotel_name");
        this.$router.push({
          name: "hotel_name",
          params: { hotel_name: hotel_name },
        });
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
  },

  beforeCreate: function () {
    localStorage.setItem("current_hotel_name", "olinguito");
    localStorage.setItem("isAuth", true);
    this.$router.push({
      name: "hotel_name",
      params: { hotel_name: "olinguito" },
    });
  },
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

.wrapper {
  display: grid;
  grid-template-areas:
    "header "
    "main"
    "footer";
  min-height: 100vh;
}

header {
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 2em;
  max-height: 15vh;
  color: white;
  background: url("https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center center no-repeat;
  background-size: cover;
}

header h1 {
  max-width: 16em;
  margin: 0;
  font-size: 12vh;
  font-weight: bold;
  line-height: 0.9;
  text-align: center;
}

header img {
  display: flex;
  max-height: 10vh;
  width: auto;
}

header nav {
  display: flex;
  justify-content: flex-end;
  max-height: 10vh;
  width: auto;
}

button {
  display: inline-flex;
  padding: 0.675em;
  font-weight: bolder;
  text-decoration: none;
  border: 0.1em solid white;
  border-radius: 0.5em;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 0.5em;
  align-items: center;
}

button:hover {
  color: black;
  background: white;
}

main {
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
}

main button {
  display: flex;
  overflow: auto;
  color: black;
  background-color: aqua;
}

article {
  max-width: 36em;
  margin: 0 auto;
  padding: 1em;
}

footer {
  grid-area: footer;
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: row;
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
}
</style>
