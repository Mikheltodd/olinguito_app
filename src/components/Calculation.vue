<template>
  <div class="show-data">
    <b-container>
      <b-row>
        <b-col
          class="data-element"
          colspan="2"
          style="
            font-weight: bold;
            font-size: 1.5em;
            line-height: 2em;
            text-align: center;
          "
          >Hotel {{ hotel_name }}</b-col
        >
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col class="data-element">Número de habitaciones:</b-col>
        <b-col class="data-element" style="text-align: center">{{
          n_rooms
        }}</b-col>
        <b-col></b-col><b-col></b-col>
      </b-row>
      <b-row>
        <b-col class="data-element">Costo de operación:</b-col>
        <b-col class="data-element" style="text-align: center">{{
          total_operation_cost
        }}</b-col>
        <b-col></b-col><b-col></b-col>
      </b-row>
      <b-row>
        <b-col class="data-element">Días de temporada baja:</b-col>
        <b-col class="data-element" style="text-align: center">{{
          l_days
        }}</b-col>
        <b-col></b-col><b-col></b-col>
      </b-row>
      <b-row>
        <b-col class="data-element">Días de temporada alta:</b-col>
        <b-col class="data-element" style="text-align: center">{{
          h_days
        }}</b-col>
        <b-col></b-col><b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Calculation",
  data: function () {
    return {
      hotel_name: "",
      n_rooms: 0,
      total_operation_cost: 0,
      l_days: 0,
      h_days: 0,
    };
  },

  created: function () {
    this.hotel_name = this.$route.params.hotel_name;
    let self = this;

    axios
      .get("http://127.0.0.1:8000/hotel/details/" + this.hotel_name)
      .then((result) => {
        self.n_rooms = result.data.n_rooms;
        self.total_operation_cost = result.data.total_operation_cost;
        self.l_days = result.data.l_days;
        self.h_days = result.data.h_days;
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  },
};
</script>

<style>
.show-data {
  display: flex;
  align-items: center;
  background: url("https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center center no-repeat;
  background-size: auto;
  width: 100%;
  height: 60vh;
}
.data-element {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>