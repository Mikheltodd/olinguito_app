<template>
  <div id="app">
    <header>
      <img src="../img/olinguito-white.png" alt="logo" type="text/css" />
      <nav>
        <button v-on:click="init" v-if="is_auth">Inicio</button>
        <button v-on:click="getBalance" v-if="is_auth">Hotel</button>
        <button v-if="is_auth">Cálculo</button>
        <button v-if="is_auth">Cerrar Sesión</button>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; Misión TIC 2022</p>
    </footer>
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
      if (this.$route.name != "hotel") {
        let hotel_name = localStorage.getItem("current_hotel_name");
        this.$router.push({
          name: "hotel_name",
          params: { hotel_name: hotel_name },
        });
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
* {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3vh;
  margin: 0;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 4vh;
  height: 12vh;
  color: white;
  background: url("https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center center no-repeat;
  background-size: cover;
  min-height: 80px;
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
}

header nav {
  display: flex;
  justify-content: flex-end;
  width: 50%;
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
}

button:hover {
  color: black;
  background: white;
}

main {
  display: flex;
  overflow: auto;
  height: 65vh;
}

article {
  max-width: 36em;
  margin: 0 auto;
  padding: 1em;
}

footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2vh;
  height: 12vh;
  color: white;
  background: url("https://images.pexels.com/photos/3209049/pexels-photo-3209049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center center no-repeat;
  background-size: cover;
  justify-content: center;
  min-height: 80px;
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
