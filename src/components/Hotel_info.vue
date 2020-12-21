<template>
  <b-container
    fluid
    style="
      background: url(https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
        center center no-repeat;
      padding: 0.5em;
    "
  >
    <b-row align-h="center">
      <b-col sm="auto" style="text-align: center">
        <h3
          style="
            padding: 0.5em;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 0.25em;
          "
        >
          Detalles de Hotel
        </h3>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col sm="auto" class="align-middle">
        <div
          class="form-group text-center align-middle"
          style="
            text-align: center;
            background-color: rgba(255, 255, 255, 0.7);
            padding: 0.5em;
            border-radius: 0.25em;
            margin-bottom: 0.5em;
          "
        >
          <label for="exampleFormControlSelect1">Nombre del Hotel:</label>
          <select
            name="hotel"
            class="form-control form-control-sm"
            id="exampleFormControlSelect1"
            v-model="hotel_name"
            required
          >
            <option v-for="item in hotels" v-bind:key="item.name">
              {{ item.name }}
            </option>
          </select>
          <b-button
            variant="outline-dark"
            type="submit"
            style="margin: 0.5em"
            v-scroll-to="'#table'"
            v-on:click="make_consult"
            >Buscar</b-button
          >
          <b-alert
            v-if="show"
            show
            variant="warning"
            style="margin: 0; font-size: 0.5em"
            >{{ message }}</b-alert
          >
        </div>
      </b-col>
      <b-col
        sm="auto"
        class="d-flex align-items-center justify-content-center"
        style="text-align: center"
      >
        <b-table-simple
          id="table_results"
          class="table table-bordered table-striped text-center align-middle"
          hover
          small
          caption-top
          responsive
          table-bordered
          table-striped
          style="background-color: rgba(255, 255, 255, 0.7)"
        >
          <b-thead head-variant="dark">
            <b-tr class="text-center bg-info text-light">
              <b-th colspan="3">Datos del Hotel: {{ hotel_name }} </b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th colspan="2" variant="dark" class="text-right"
                >Número de habitaciones:</b-th
              >
              <b-td class="text-center">{{ n_rooms }}</b-td>
            </b-tr>

            <b-tr>
              <b-th rowspan="3" variant="dark" class="text-right align-middle"
                >Días por Temporada
              </b-th>
              <b-th variant="dark" class="text-right">Baja: </b-th>
              <b-td class="text-center">{{ l_days }}</b-td>
            </b-tr>
            <b-tr>
              <b-th variant="dark" class="text-right">Media: </b-th>
              <b-td class="text-center">{{ 365 - l_days - h_days }}</b-td>
            </b-tr>
            <b-tr>
              <b-th variant="dark" class="text-right">Alta: </b-th>
              <b-td class="text-center">{{ h_days }}</b-td>
            </b-tr>
            <b-tr>
              <b-th colspan="2" variant="dark" class="text-right"
                >Costo de operación:</b-th
              >
              <b-td class="text-center">{{
                total_operation_cost | currency
              }}</b-td>
            </b-tr>
            <b-tr>
              <b-th rowspan="3" variant="dark" class="text-right align-middle"
                >Precios por Temporada</b-th
              >
              <b-th variant="dark" class="text-right">Baja: </b-th>
              <b-td class="text-center">{{ l_price | currency }}</b-td>
            </b-tr>
            <b-tr>
              <b-th variant="dark" class="text-right">Media: </b-th>
              <b-td class="text-center">{{ m_price | currency }}</b-td>
            </b-tr>
            <b-tr>
              <b-th variant="dark" class="text-right">Alta: </b-th>
              <b-td class="text-center">{{ h_price | currency }}</b-td>
            </b-tr>
          </b-tbody>
          <!-- <b-tfoot>
            <b-tr>
              <b-td colspan="2" variant="dark" class="text-right"> </b-td>
            </b-tr>
          </b-tfoot> -->
        </b-table-simple>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Hotel_info",
  data: function () {
    return {
      hotel_name: "",
      n_rooms: 0,
      total_operation_cost: 0,
      l_days: 0,
      h_days: 0,
      l_price: 0,
      m_price: 0,
      h_price: 0,
      hotels: [],
      message: "",
      show: false,
    };
  },
  methods: {
    make_consult: function () {
      let self = this;
      this.show = false;

      axios
        .get("https://olinguito.herokuapp.com/hotel/details/" + this.hotel_name)
        .then((result) => {
          self.n_rooms = result.data.n_rooms;
          self.total_operation_cost = result.data.total_operation_cost;
          self.l_days = result.data.l_days;
          self.h_days = result.data.h_days;
          self.l_price = result.data.l_price;
          self.m_price = result.data.m_price;
          self.h_price = result.data.h_price;
        })
        .catch((error) => {
          if (error.response.status == "404")
            this.message = "Seleccione un hotel.";
          this.show = true;
          // alert("ERROR Servidor");
        });
    },
  },

  created: function () {
    let self = this;
    axios
      .get("https://olinguito.herokuapp.com/hotel/list")
      .then((response) => {
        self.hotels = response.data;
        console.log(self.hotels);
      })
      .catch((error) => {
        alert("Error de servidor");
      });
  },
};
</script>

<style>
.show-data {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url("https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center center no-repeat;
  background-size: auto;
  width: 100%;
  height: 60vh;
}
.data-element {
  display: flex;
  padding: 0 2em;
  margin-left: 3em;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>