<template>
    <div>
      <p>componente 1</p>
      <button class="btn btn-primary" v-on:click="cambiar">Cambiar</button>
    </div>
</template>

<script>
    export default {
        name: "componente1",
        methods:{
          cambiar : function () {
            this.$router.push('/componente2');
          }
        }
    }
</script>

<style scoped>

</style>
