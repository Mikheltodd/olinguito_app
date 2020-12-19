<template>
  <b-container
    fluid
    style="
      background: url(https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
        bottom center no-repeat;
      background-size: cover;
      padding-top: 2em;
      padding-bottom: 1em;
    "
  >
    <b-row align-h="center">
      <b-col sm="auto">
        <h3
          style="
            padding: 0.5em;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 0.5em;
            text-align: center;
          "
        >
          Autenticación
        </h3>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col
        sm="auto"
        style="
          text-align: center;
          padding: 1em;
          margin: 1em;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 0.5em;
        "
      >
        <b-form v-on:submit.prevent="processAuthUser">
          <b-form-row style="margin-top: 0.5em; margin-bottom: 0.5em">
            <b-form-input
              type="text"
              v-model="user_in.username"
              placeholder="Nombre de Usuario"
            ></b-form-input>
          </b-form-row>
          <b-form-row style="margin-top: 0.5em; margin-bottom: 0.5em"
            ><b-form-input
              type="password"
              v-model="user_in.password"
              placeholder="Contraseña"
            ></b-form-input
          ></b-form-row>
          <b-button variant="outline-dark" type="submit" style="margin: 0.5em"
            >Iniciar Sesión</b-button
          >
          <b-alert show variant="success" style="margin: 0">{{
            message
          }}</b-alert>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "UserAuth",
  data: function () {
    return {
      user_in: {
        username: "",
        password: "",
      },
      message: "",
    };
  },
  methods: {
    processAuthUser: function () {
      var self = this;
      axios
        .post("http://127.0.0.1:8000/user/auth/", self.user_in, { headers: {} })
        .then((result) => {
          // alert("Autenticación Exitosa");
          self.$emit("log-in", self.user_in.username);
        })
        .catch((error) => {
          if (error.response.status == "404")
            this.message = "Usuario no encontrado.";

          if (error.response.status == "403")
            this.message = "Contraseña Erronea.";
        });
    },
  },
};
</script>
<style>
.auth_user {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container_auth_user {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 25%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth_user h2 {
  color: #283747;
}

.auth_user form {
  width: 50%;
}

.auth_user input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}

.auth_user button {
  width: 100%;
  height: 40px;

  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}

.auth_user button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}

.auth_user span {
  color: red;
  font-size: 15px;
  font-family: "Times New Roman", Times, serif;
}
</style>