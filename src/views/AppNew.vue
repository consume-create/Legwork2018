<template>
  <div id="app" class="application">
    <div class="header">header</div>
    <transition name="top">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import Header from './new/header.vue'

  export default {
    name: 'App',
    components: { Header },
  }
</script>

<style>
</style>