<template>
    <h1> Admin Page... </h1>
</template>
<script>
import { mapActions } from 'vuex';

export default{
    async mounted(){
        const admin = await this.isAdmin();

        if(!admin) {
            this.$router.push('/forum');
        }
    },
    methods : mapActions(['isAdmin']),
    
}
</script>