<!-- eslint-disable max-len -->
<template>

  <div id="nav">
    <app-nav></app-nav>
  </div>
  <router-view/>
</template>

<script>
import AppNav from '@/components/AppNav.vue';

export default {
  components: {
    AppNav,
  },
};

</script>

<style lang="scss">

</style>
