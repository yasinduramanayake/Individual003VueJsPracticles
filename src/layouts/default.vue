<template>
  <v-app>
    <div><HeaderComponent /></div>
    <v-main>
      <router-view />
    </v-main>

    <br /><br />
    <br /><br />
    <br /><br />

    <br /><br />
    
    <div><FooterComponent /></div>
  </v-app>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterCompenent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
