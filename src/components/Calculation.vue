<template>
  <form id="Calculation">
    <div class="form-group">
      <label for="exampleFormControlSelect1">Nombre hotel:</label>
      <select name="hotel" class="form-control form-control-sm" id="exampleFormControlSelect1" v-model="hotel_name">
        <option selected value="">Seleccione un hotel</option>
        <option value="Hotel1">Hotel 1</option>
        <option value="Hotel2">Hotel 2</option>
        <option value="olinguito">Olinguito</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInput1">Utilidad Esperada:</label>
      <input type="number" class="form-control form-control-sm" id="exampleInput1" placeholder="Utilidad esperada" v-model="expected_profit">
    </div>
    <div class="form-group">
      <label for="exampleInput2">Imprevistos:</label>
      <input type="number" class="form-control form-control-sm" id="exampleInput2" placeholder="Imprevistos" v-model="incidental_value">
    </div>
    <div class="form-group">
      <button class="btn btn-success" v-on:click="make_calculation">
        Calcular
      </button>
    </div>
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
          <td>{{ id_calculation }}xxx</td>
          <td>{{ hotel_name }}xxx</td>
          <td>{{ date }}xxxx</td>
          <td>{{ h_price }}xxx</td>
          <td>{{ m_price }}xxx</td>
          <td>{{ l_price }}xxxx</td>
        </tr>
      </tbody>
    </table>    
  </form>
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
#Calculation{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  background: url("https://images.pexels.com/photos/4039781/pexels-photo-4039781.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4039781.jpg&fm=jpg")
    bottom center no-repeat;
  background-size:cover;
  width: 100%;
  height: 80vh;
}
</style>