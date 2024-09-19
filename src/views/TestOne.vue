<template>
  <div>
    <center>
      <h1>Hello</h1>
      <br />
      <TestComponent />
      <br />
      <button class="btn btn-primary" @click="direct()">Direct</button>
    </center>
  </div>
</template>
<script>
import TestComponent from "@/components/TestComponent.vue";
export default {
  components: {
    TestComponent,
  },
  methods: {
    direct() {
      this.$router.push("/testtwo");
    },
  },
};
</script>
