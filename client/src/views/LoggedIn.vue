<template>
  <h1>Logged In</h1>
</template>
<script>

import { mapActions } from 'vuex';

export default {
  mounted() {
    const { token } = this.$route.params;

    console.log('Token : ', token);
    if (token) {
      this.login(token);
      this.$router.push('/forum');
    } else {
      this.$router.push('/');
    }
  },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
