<template>
    <div>
        <p>This is a Vue component and below is the current date:<br />{{date}}</p>
        <Test />
    </div>
</template>

<script>
  import Test from './test';

  export default {
    name: 'App',
    components: { Test },
    data() {
      return {
        date: new Date(),
      };
    },
  };
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>
