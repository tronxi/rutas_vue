<template>
  <div>
    <p>componente 2</p>
    <button class="btn btn-primary" v-on:click="cambiar">Cambiar</button>
  </div>
</template>

<script>
    export default {
        name: "componente2",
        methods:{
          cambiar : function () {
            this.$router.push('/componente1');
          }
        }
    }
</script>

<style scoped>

</style>
