<template>
    <b-container fluid
        style="
            background: url(https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)center center no-repeat;
            padding-top: 3em;
            padding-bottom: 3em;
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
                    Creación Hotel
                </h3>
        </b-col>
        </b-row>
        <b-row align-h="center">
            <b-col sm="auto" style="
                text-align: center;
                background-color: rgba(255, 255, 255, 0.7);
                padding: 1em;
                border-radius: 0.25em;"
            >
            <b-form v-on:submit.prevent="creationHotel">
                <b-form-row style="margin-top: 0.5em; margin-bottom: 0.5em">
                    <b-form-input
                        type="text"
                        v-model="name"
                        placeholder="Nombre de Hotel"
                        required
                    ></b-form-input>
                </b-form-row>
                <b-form-row style="margin-top: 0.5em; margin-bottom: 0.5em">
                    <b-form-input
                        type="number"
                        v-model="n_rooms"
                        placeholder="No. Habitaciones"
                        required
                    ></b-form-input>
                </b-form-row>
                <b-form-row style="margin-top: 0.5em; margin-bottom: 0.5em">
                    <b-form-input
                        type="number"
                        v-model="total_operation_cost"
                        title="El costo total de operación es el costo de operación de todas las habitaciones en el transcurso del año" 
                        placeholder="Costo operación total"
                        required
                    ></b-form-input>
                </b-form-row>
                <b-form-row style="margin-top: 0.5em; margin-bottom: 0.5em">
                    <b-form-input
                        type="number"
                        v-model="l_days"
                        placeholder="Cant. días temp. baja"
                        required
                    ></b-form-input>
                </b-form-row>
                <b-form-row style="margin-top: 0.5em; margin-bottom: 0.5em">
                    <b-form-input
                        type="number"
                        v-model="h_days"
                        placeholder="Cant. días temp. alta"
                        required
                    ></b-form-input>
                </b-form-row>
                <b-button type="submit" variant="primary" style="margin: 0.5em">Crear</b-button>
                <b-button type="reset" variant="danger" style="margin: 0.5em">Limpiar</b-button>
                
                <b-alert v-if="show" show style="margin: 0; font-size: 0.5em">
                    {{message}}
                </b-alert>                
        </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from "axios";
export default {
    name: "Creation_hotel",
    data: function(){
        return{
            name: "",
            n_rooms: "",
            total_operation_cost: "",
            l_days: "",
            h_days: "",
            h_price: 0,
            m_price: 0,
            l_price: 0,
            message:"",
            show: false            
        }
    },
    methods:{
        creationHotel: function(){
            var hotelIn ={
                name: this.name,
                n_rooms: this.n_rooms,
                total_operation_cost:this.total_operation_cost,
                l_days: this.l_days,
                h_days: this.h_days
            }
            axios
            .post("https://olinguito.herokuapp.com/hotel/create/",hotelIn,{ headers: {} })
            .then((response)=>{
                this.message="Hotel creado exitosamente";
                this.show=true;
                // this.$router.push({ name:"Lista_hoteles"});
            })
            .catch((error)=>{
                if (error.response.status == "400")
                    this.message = "El hotel ya existe.";
                    this.show=true;
            });
        }
    }
    
}
</script>

<style>

</style>