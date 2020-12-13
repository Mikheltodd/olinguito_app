<template>
    <div id="Hotel">
        <h2>Hola <span> {{hotel_name}}, </span> ¡Bienvenido!</h2>
    </div>
</template>

<script>
    export default {
        name: "Hotel",
        data:function(){
            return {
                hotel_name: "none"
            }
        },
        created: function(){
            this.hotel_name = this.$route.params.hotel_name
        }
    }
</script>

<style>
    #User{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #User h2{
        font-size: 50px;
        color: #283747;
    }

    #User span{
        color: crimson;
        font-weight: bold;
    }
</style>