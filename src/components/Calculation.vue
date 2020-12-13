<template>
    <div id = "Calculation">
        <br>
        Nombre hotel: <input type="text" placeholder="Nombre hotel" v-model="hotel_name"/><br/>
        Utilidad esperada: <input type="number" placeholder="Utilidad esperada" v-model="expected_profit"/><br/>
        Imprevistos: <input type="number" placeholder="Imprevistos" v-model="incidental_value"/><br/>
        <button v-on:click="make_calculation" >Hacer Cálculo</button>
    </div>

</template>

<script>
import axios from "axios";
export default {
    name: "Calculation",
    methods:{
        make_calculation: function(){

            var data={
                hotel_name: this.hotel_name,
                expected_profit: this.expected_profit,
                incidental_value: this.incidental_value
            }

            axios.put("http://127.0.0.1:8000/hotel/calculation/", data)
            .then(response =>{
                alert("El cálculo se realizó con éxito");
                this.$router.push({ name:"calculation", params:{data}});
            })
            .catch((error)=>{
                alert("Error en el servidor");
            });
            
        }
    }
}
</script>

<style>

</style>