<!-- eslint-disable max-len -->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="" style="background-color: antiquewhite;">
    <div class="d-flex w-100 justify-content-between" >
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <div class="col-md-12 text-center">
    <a role="button" class="btn btn-lg center " :href= "getLoginURL" >Login With Google</a>
  </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  computed: {
    getLoginURL() {
      if (window.location.hostname === 'localhost') {
        return 'http://localhost:3000/auth/google';
      }
      //* URL to send Data...
      return 'https://localhost:3000/auth/google';
    },
  },
};
</script>
