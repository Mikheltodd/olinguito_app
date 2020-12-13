<template>
  <div class="show-data">
    <div class="data-element">
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
            <b-td class="text-center">{{ total_operation_cost }}</b-td>
          </b-tr>
          <b-tr>
            <b-th class="text-left">Días de temporada baja:</b-th>
            <b-td class="text-center">{{ l_days }}</b-td>
          </b-tr>
          <b-tr>
            <b-th class="text-left">Días de temporada alta:</b-th>
            <b-td class="text-center">{{ h_days }}</b-td>
          </b-tr>
        </b-tbody>
        <b-tfoot>
          <b-tr>
            <b-td colspan="2" variant="dark" class="text-right"> </b-td>
          </b-tr>
        </b-tfoot>
      </b-table-simple>
    </div>
  </div>
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