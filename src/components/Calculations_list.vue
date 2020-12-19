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
            <option selected value="">Seleccione un hotel</option>
            <option value="Hotel1">Hotel 1</option>
            <option value="Hotel2">Hotel 2</option>
            <option value="olinguito">Olinguito</option>
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
    <b-row>
      <b-col>
        <b-table-simple
          id="table"
          class="table table-bordered table-striped text-center"
          hover
          small
          caption-top
          responsive
          table-bordered
          table-striped
          style="background-color: rgba(255, 255, 255, 0.7)"
        >
          <b-thead head-variant="dark" style="text-align: center">
            <b-tr class="text-center bg-info text-light">
              <b-th rowspan="2" class="align-middle">ID</b-th>
              <b-th rowspan="2" class="align-middle">Nombre</b-th>
              <b-th rowspan="2" class="align-middle">Fecha de calculo</b-th>
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
              <b-td>{{ item.id_calculation }}</b-td>
              <b-td>{{ item.hotel_name }}</b-td>
              <b-td>{{ item.date | formatDate }}</b-td>
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
    };
  },
  methods: {
    make_consult: function () {
      let self = this;

      axios
        .get("http://127.0.0.1:8000/hotel/calculations/" + this.hotel_name)
        .then((response) => {
          self.calculations = response.data;
        })
        .catch((error) => {
          alert("Error de servidor");
        });
    },
  },
  created: function () {},
};
</script>