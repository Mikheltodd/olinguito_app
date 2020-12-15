<template>
  <div id="Lista_hoteles">
    <b-table-simple
      class="table table-bordered table-striped text-center"
      hover
      small
      caption-top
      responsive
      table-bordered
      table-striped
    >
      <b-thead head-variant="dark" style="text-align: center">
        <b-tr class="text-center bg-info text-light">
          <b-th rowspan="2" class="align-middle">ID</b-th>
          <b-th rowspan="2" class="align-middle">Nombre</b-th>
          <b-th rowspan="2" class="align-middle">No. habitaciones</b-th>
          <b-th rowspan="2" class="align-middle"
            >Costo de operación <br />
            diario</b-th
          >
          <b-th colspan="3">Días por Temporada</b-th>
        </b-tr>
        <b-tr class="text-center bg-info text-light">
          <b-th>Baja</b-th>
          <b-th>Alta</b-th>
          <b-th>Media</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(item, index) in hotels" v-bind:key="item.name">
          <b-td>{{ index + 1 }}</b-td>
          <b-td>{{ item.name }}</b-td>
          <b-td>{{ item.n_rooms }}</b-td>
          <b-td>{{ item.total_operation_cost | currency }}</b-td>
          <b-td>{{ item.l_days }}</b-td>
          <b-td>{{ item.h_days }}</b-td>
          <b-td>{{ 365 - item.l_days - item.h_days }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Lista_hoteles",
  data: function () {
    return {
      hotels: [],
    };
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