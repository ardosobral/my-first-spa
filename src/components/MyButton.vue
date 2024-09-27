<template>
     <button @click="handleClick">{{ label }}</button>
</template>

<script>
    export default {
  props: ['label'],
  methods: {
    handleClick() {
      console.log('Button clicked!');
    }
  }
};
</script>

<style>
button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>