<template>
  <b-container fluid class="show-data">

     <b-row  >
       <b-col class="data-element">
      <b-table-simple
        hover
        small
        caption-top
        responsive
        table-bordered
        table-striped
      >
        <caption></caption>
        <b-thead head-variant="dark" style="text-align: center">
          <b-tr>
            <b-th colspan="2">Datos del Hotel: {{ hotel_name }} </b-th>
          </b-tr>
          <b-tr style="text-align: center">
            <b-th>Parámetro</b-th>
            <b-th>Valor</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr>
            <b-th class="text-left">Número de habitaciones:</b-th>
            <b-td class="text-center">{{ n_rooms }}</b-td>
          </b-tr>
          <b-tr>
            <b-th class="text-left">Costo de operación:</b-th>
            <b-td class="text-center">{{
              total_operation_cost | currency
            }}</b-td>
          </b-tr>
          <b-tr>
            <b-th class="text-left">Días de Temporada Baja:</b-th>
            <b-td class="text-center">{{ l_days }}</b-td>
          </b-tr>
          <b-tr>
            <b-th class="text-left">Días de Temporada Media:</b-th>
            <b-td class="text-center">{{ 365 - l_days - h_days }}</b-td>
          </b-tr>
          <b-tr>
            <b-th class="text-left">Días de Temporada Alta:</b-th>
            <b-td class="text-center">{{ h_days }}</b-td>
          </b-tr>
          <b-tr>
            <b-th class="text-left">Precio Temporada Baja:</b-th>
            <b-td class="text-center">{{ l_price | currency }}</b-td>
          </b-tr>
          <b-tr>
            <b-th class="text-left">Precio Temporada Media:</b-th>
            <b-td class="text-center">{{ m_price | currency }}</b-td>
          </b-tr>
          <b-tr>
            <b-th class="text-left">Precio Temporada Alta:</b-th>
            <b-td class="text-center">{{ h_price | currency }}</b-td>
          </b-tr>
        </b-tbody>
        <b-tfoot>
          <b-tr>
            <b-td colspan="2" variant="dark" class="text-right"> </b-td>
          </b-tr>
        </b-tfoot>
      </b-table-simple>
       </b-col>
      <b-col sm="auto"
      class="d-flex align-items-center justify-content-center"
        style="text-align: center">
        <div class="form-group"  style="
            padding: 0.5em;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 0.5em;
            margin: 1;
          ">
          <select
            name="hotel"
            class="form-control form-control-sm"
            id="exampleFormControlSelect1"
            v-model="hotel_name"
            required>
            <option v-for="item in hotels" v-bind:key="item.name" >{{item.name}}</option>
            <!-- <option value="Hotel1">Hotel 1</option>
            <option value="Hotel2">Hotel 2</option>
            <option value="olinguito">Olinguito</option> -->
          </select>
          <br />
          <button
            v-scroll-to="'#table'"
            class="btn btn-success"
            v-on:click="make_consult"
          >
            Buscar
          </button>
        </div>
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
      hotels:[],
    };
  },
  methods: {
    make_consult: function(){
    let self = this;

    axios
      .get("http://127.0.0.1:8000/hotel/details/" + this.hotel_name)
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
        alert("ERROR Servidor");
      });

    }

  },

  created: function () {
    let self = this;
    axios
      .get("http://127.0.0.1:8000/hotel/list")
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