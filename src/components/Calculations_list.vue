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
    <b-row>
      <b-col>
        <b-table-simple
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
            <b-tr v-for="(item, index) in calculatios" v-bind:key="item.name">
              <b-td>{{ index+1 }}</b-td>
              <b-td>{{  }}</b-td>
              <b-td>{{  }}</b-td>
              <b-td>{{  }}</b-td>
              <b-td>{{  }}</b-td>
              <b-td>{{  }}</b-td>
              <b-td>{{ }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from "axios"
export default {
    name: "Calculations_list",

}
</script>