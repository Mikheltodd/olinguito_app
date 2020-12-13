<template>
    <div id="Calculation">
        <h2>{{hotel_name}}</h2>
        
        <h2>Número de habitaciones: <span> {{n_rooms}} </span> </h2>
        <h2>Costo de operación: <span> {{total_operation_cost}} </span> </h2>
        <h2>Días de temporada baja: <span> {{l_days}} </span> </h2>
        <h2>Días de temporada alta: <span> {{h_days}} </span> </h2>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Calculation',
    data: function (){
        return {
            hotel_name: "",
            n_rooms: 0,
            total_operation_cost: 0,
            l_days: 0,
            h_days: 0
                        
        }
    },
    
    created: function(){
        this.hotel_name = this.$route.params.hotel_name
        let self = this

        axios.get("http://127.0.0.1:8000/hotel/details/" + this.hotel_name)
            .then((result) => {
                self.n_rooms = result.data.n_rooms
                self.total_operation_cost = result.data.total_operation_cost
                self.l_days = result.data.l_days
                self.h_days = result.data.h_days

            })
            .catch((error) => {
                alert("ERROR Servidor");
            });
    }
}
</script>

<style>
    #UserBalance{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #UserBalance h2{
        font-size: 50px;
        color: #283747;
    }

    #UserBalance span{
        color: crimson;
        font-weight: bold;
    }
</style>