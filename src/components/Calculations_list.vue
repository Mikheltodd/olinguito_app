<template>
  <b-container
    fluid
    style="
      background: url(https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
      padding: 5em 1em;
      background-size: cover;
    "
  >
    <b-row align-h="center">
      <b-col sm="auto">
        <h3
          style="
            padding: 0.5em;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 0.5em;
            margin: 1;
          "
        >
          Historial de calculos
        </h3>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col sm="auto">
        <div class="form-group">
          <select
            name="hotel"
            class="form-control form-control-sm"
            id="exampleFormControlSelect1"
            v-model="hotel_name"
            required
          >
            <option v-for="i in hotels" v-bind:key="i.name">{{i.name}}</option>
          </select>
          
          <button
            v-scroll-to="'#table'"
            class="btn btn-success"
            v-on:click="make_consult"
            style="margin: 0.5em"
          >
            Buscar
          </button>
          <button
            v-scroll-to="'#table'"
            class="btn btn-success"
            v-on:click="refresh"
            style="margin: 0.5em"
          >
            Refrescar
          </button>
          <b-alert v-if="show" show variant="warning" style="margin: 0; font-size: 0.8em">
            {{message}}
          </b-alert>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table-simple
          id="table"
          class="table table-bordered table-striped text-center"
          striped hover
          small
          caption-top
          responsive
          table-bordered
          table-striped
          style="background-color: rgba(255, 255, 255, 0.7)"
        >
          <b-thead head-variant="dark" style="text-align: center">
            <b-tr class="text-center bg-info text-light">
              <b-th rowspan="2" class="align-middle">Fecha de calculo</b-th>
              <b-th rowspan="2" class="align-middle">Nombre</b-th>
              <b-th colspan="3">Precio por Temporada</b-th>
            </b-tr>
            <b-tr class="text-center bg-info text-light">
              <b-th>Baja</b-th>
              <b-th>Alta</b-th>
              <b-th>Media</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="item in calculations" v-bind:key="item.name">
              <b-td>{{ item.date | formatDate }}</b-td>
              <b-td>{{ item.hotel_name }}</b-td>
              <b-td>{{ item.l_price | currency }}</b-td>
              <b-td>{{ item.m_price | currency }}</b-td>
              <b-td>{{ item.h_price | currency }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from "axios";
export default {
  name: "Calculations_list",
  data: function () {
    return {
      hotel_name: "",
      calculations: [],
      hotels:[],
      message:"",
      show:false
    };
  },
  methods: {
    make_consult: function () {
      let self = this;
      this.show=false;
      axios
        .get("https://olinguito.herokuapp.com/hotel/calculations/" + this.hotel_name)
        .then((response) => {
          self.calculations = response.data;
        })
        .catch((error) => {
          if (error.response.status == "404")
            this.message = "Seleccione un hotel.";
            this.show=true;
        });
    },
    refresh: function(){
       let self = this;
    axios
      .get("https://olinguito.herokuapp.com/hotel/calculationsHotels")
      .then((response) => {
        self.calculations = response.data;
      })
      .catch((error) => {
        alert("Error servidor");
      });

    }
  },
  created: function () {
    let self = this;
    axios
      .get("https://olinguito.herokuapp.com/hotel/calculationsHotels")
      .then((response) => {
        self.calculations = response.data;
      })
      .catch((error) => {
        alert("Error servidor");
      });
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