<template>
    <div id="Lista_hoteles">
        <table class="table table-bordered table-striped" style="">
          <tr class="text-center bg-info text-light">
            <th>ID</th>
            <th>Nombre</th>
            <th>Numero de habitaciones</th>
            <th>Operacion de costo diario</th>
            <th>Cantidad dias temp baja</th>
            <th>Cantidad dias temp alta</th>
            <th>Cantidad dias temp media</th>
          </tr>
          <tr v-for="(item,index) in hotels">
            <td>{{index}}</td>
            <td>{{item.name}}</td>
            <td>{{item.n_rooms}}</td>
            <td>{{item.total_operation_cost}}</td>
            <td>{{item.l_days}}</td>
            <td>{{item.h_days}}</td>
            <td>{{item.l_days}}</td>

          </tr>
      </table>
    </div>
</template>
<script>
import axios from "axios";
export default {
 name: "Lista_hoteles",
 data: function () {
    return {
      hotels:[]
    };
  },
created: function(){
    let self=this;
    axios.get("http://127.0.0.1:8000/hotel/list" )
    .then(response =>{
        self.hotels=response.data
        console.log(self.hotels)
    })
    .catch(error=>{
        alert("Error de servidor")
    })

}

};
</script>