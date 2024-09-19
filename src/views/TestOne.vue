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

    one() {
      const n = 1;
      return n;
    },
  },

  beforeCreate() {
    console.log("before create");
  },

  created() {
    console.log(this.one());
  },

  beforeMount() {
    console.log("Before Loading");
  },

  mounted() {
    console.log("loaded");
  },

  beforeUpdate() {
    console.log("before update");
  },

  updated() {
    console.log("updated");
  },
};
</script>
