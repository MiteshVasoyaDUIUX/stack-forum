<!-- eslint-disable max-len -->
<template>

  <div id="nav">
    <app-nav></app-nav>
  </div>
  <router-view/>
</template>

<script>
import AppNav from '@/components/AppNav.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    AppNav,
  },

  mounted(){
    this.login(localStorage.token);
  },
  methods : mapActions(['login']),
};

</script>

<style lang="scss">

</style>
