<template>
  <div class="welcome">
    <div class="item">
      <h1>¡Hola, {{ username }}!</h1>
    </div>
    <div class="item">
      <h2>Bienvenido</h2>
    </div>
  </div>
</template>

<script>
    export default {
        name: "User",
        data: function () {
            return {
            username: "none",
            };
        },
        created: function () {
            this.username = this.$route.params.username
        }
    }
</script>

<style>
.welcome {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  background: url("https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    bottom center no-repeat;
  background-size: auto;
  width: 100%;
  height: 60vh;
}
.item {
  display: flex;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 1em;
  margin: 0.5em;
  font-weight: bold;
  border-radius: 0.5em;
}
</style>