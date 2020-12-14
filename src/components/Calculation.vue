<template>
  <div id="Calculation">
    <br />
    <div class="form-group">
      Nombre hotel:
      <select
        name="hotel"
        class="form-control form-control-sm"
        v-model="hotel_name"
      >
        <option selected value="">Seleccione un hotel</option>
        <option value="Hotel1">Hotel 1</option>
        <option value="Hotel2">Hotel 2</option>
        <option value="olinguito">Olinguito</option>
      </select>
    </div>
    <div class="form-group">
      Utilidad Esperada:
      <input
        type="number"
        placeholder="Utilidad esperada"
        class="form-control form-control-sm"
        v-model="expected_profit"
      />
    </div>
    <div class="form-group">
      Imprevistos:
      <input
        type="number"
        placeholder="Imprevistos"
        class="form-control form-control-sm"
        v-model="incidental_value"
      />
    </div>
    <div class="form-group">
      <button class="btn btn-success" v-on:click="make_calculation">
        Calcular
      </button>
    </div>
    <br />
    <table class="table table-bordered table-striped">
      <thead>
        <tr class="text-center bg-info text-light">
          <th>ID</th>
          <th>Nombre</th>
          <th>Fecha Cálculo</th>
          <th>Precio Temporada Alta</th>
          <th>Precio Temporada Media</th>
          <th>Precio Temporada Baja</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td>{{ id_calculation }}</td>
          <td>{{ hotel_name }}</td>
          <td>{{ date }}</td>
          <td>{{ h_price }}</td>
          <td>{{ m_price }}</td>
          <td>{{ l_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Calculation",
  data: function (){
      return{       
        id_calculation: 0,
        hotel_name: "",
        date: 0,
        h_price: 0,
        m_price: 0,
        l_price: 0,
      }  
       
    },
  methods: {
    make_calculation: function () {
      var dataIn = {
        hotel_name: this.hotel_name,
        expected_profit: this.expected_profit,
        incidental_value: this.incidental_value,
      };

        axios
        .put("http://127.0.0.1:8000/hotel/calculation/", dataIn)
        // .then(response =>{
        //   alert("El cálculo se realizó con éxito");
        // this.$router.push({ name:"calculation", params:{data}});
        //})
        // .then((result) => {
        //   console.log(result);
        // })
        .then(response =>(
            this.id_calculation= response.data.id_calculation,
            this.hotel_name=response.data.hotel_name,
            this.date = response.data.date,
            this.h_price = response.data.h_price,
            this.m_price = response.data.m_price,
            this.l_price = response.data.l_price

        ))
        .catch((error) => {
          alert("Error en el servidor");
        });
    },
  },
};
</script>
<style>
.calculation-theme {
  background: url("https://images.pexels.com/photos/4219527/pexels-photo-4219527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    bottom center no-repeat;
}
</style>