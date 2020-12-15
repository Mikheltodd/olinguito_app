<template>
  <div>
    <div id="Calculation">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Nombre del Hotel:</label>
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
      </div>
      <div class="form-group">
        <label for="exampleInput1">Utilidad Esperada (%):</label>
        <input
          type="number"
          class="form-control form-control-sm"
          id="exampleInput1"
          placeholder="Utilidad esperada"
          v-model="expected_profit"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInput2">Imprevistos (%):</label>
        <input
          type="number"
          class="form-control form-control-sm"
          id="exampleInput2"
          placeholder="Imprevistos"
          v-model="incidental_value"
          required
        />
      </div>
      <div class="form-group">
        <button class="btn btn-success" v-on:click="make_calculation">
          Calcular
        </button>
      </div>
      <br />
      <table class="table table-bordered table-striped" style="">
        <thead>
          <tr class="text-center bg-info text-light">
            <th rowspan="2">ID</th>
            <th rowspan="2">Nombre</th>
            <th rowspan="2">Fecha Cálculo</th>
            <th colspan="3">Precio por Temporada ($)</th>
          </tr>
          <tr class="text-center bg-info text-light">
            <th>Alta</th>
            <th>Media</th>
            <th>Baja</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td>{{ id_calculation }}</td>
            <td>{{ hotel_name }}</td>
            <td>{{ date }}</td>
            <td class="Highprice">{{ h_price | currency }}</td>
            <td class="Mediumprice">{{ m_price | currency }}</td>
            <td class="Lowprice">{{ l_price | currency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Calculation",
  data: function () {
    return {
      id_calculation: 0,
      hotel_name: "",
      date: 0,
      h_price: 0,
      m_price: 0,
      l_price: 0,
    };
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
        .then(
          (response) => (
            (this.id_calculation = response.data.id_calculation),
            (this.hotel_name = response.data.hotel_name),
            (this.date = response.data.date),
            (this.h_price = response.data.h_price),
            (this.m_price = response.data.m_price),
            (this.l_price = response.data.l_price)
          )
        )
        .catch((error) => {
          alert("Error en el servidor");
        });
    },
  },
};
</script>
<style>
#Calculation {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url("https://images.pexels.com/photos/4039781/pexels-photo-4039781.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4039781.jpg&fm=jpg")
    bottom center no-repeat;
  background-size: cover;
  width: auto;
  padding: 2em 18em;
  text-align: center;
}
.Highprice {
  background-color: #D8FECA;
}
.Mediumprice {
  background-color: #FFFF48;
}
.Lowprice {
  background-color: #FF7856;
}      
</style>