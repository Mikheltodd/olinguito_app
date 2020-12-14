<template>
    <div id="Lista_hoteles">
        <table class="table table-bordered table-striped" style="">
        <thead>
          <tr class="text-center bg-info text-light">
            <th rowspan="2">ID</th>
            <th rowspan="2">Nombre</th>
            <th rowspan="2">Numero de habitaciones</th>
            <th>Operacion de costo diario</th>
            <th>Cantidad dias temp baja</th>
            <th>Cantidad dias temp alta</th>
            <th>Cantidad dias temp media</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in obj" :key="index">
            <td v-text="index"></td>
            <td v-text="item.name"></td>
            <td v-text="item.n_rooms"></td>
            <td v-text="item.total_operation_cost"></td>
            <td v-text="item.l_days"></td>
            <td v-text="item.h_days"></td>
            <td v-text="item.l_days"></td>

          </tr>
        </tbody>
      </table>

    </div>
</template>
<script>
import axios from "axios";
export default {
 name: "Lista_hoteles",
 //data: function () {
   // return {
      //id_list: 0,
      //hotel_name: "",
      //n_rooms: 0,
      //total_operation_cost: 0,
      //l_days: 0,
      //h_days: 0,
     // m_days: 365-l_days-h_days,
   // };
 // },
 created: function () {
    
    var name_hotels=[];
    var nr_hotels=[];
    var cost_hotels=[];
    var ld_hotels=[];
    var hd_hotels=[];
    var md_hotels=[];

    axios
      .get("http://127.0.0.1:8000/hotel/list")
      .then((result) => {
        console.log(result);
        var obj
        this.obj=result.data;
        console.log(obj);
        this.obj.forEach(e=>{
            console.log(e)
          name_hotels.push(e.name)
          nr_hotels.push(e.n_rooms)
          cost_hotels.push(e.total_operation_cost)
          ld_hotels.push(e.l_days)
          hd_hotels.push(e.h_days)
          md_hotels.push(365-e.l_days-e.h_days)
        })
        console.log(name_hotels);
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  },
 

}
</script>