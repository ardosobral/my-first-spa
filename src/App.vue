<template>
  <ObjectComponent></ObjectComponent>
</template>

<script>
import ObjectComponent from './components/ObjectComponent.vue';

export default {
  name: 'App',
  components: {
    ObjectComponent
  }
}
</script>

<style>
.example > .teste {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
