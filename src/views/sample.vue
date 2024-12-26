<template>
  <div>
    <!-- slider component -->
    <SliderComponent />

    <div class="pt-10"></div>
    <div class="pt-10"></div>
    <!-- card component -->
    <CardComponent :items="items" />

    <div class="pt-10"></div>
    <div class="pt-10"></div>
    <!-- form component -->

    <v-btn @click="openDialog()">open Dialog</v-btn>
    <!-- <FormComponent :title="title" /> -->

    <v-dialog v-model="show" max-width="500px" persistent=""
      ><v-card
        ><FormComponent :title="title" :formData="form" @emitdata="emitingdata"
      /></v-card>
    </v-dialog>
    <div class="pt-10"></div>
    <center>{{ getData }}</center>

    <center>{{  getArray }}</center>
  </div>
</template>
<script>
import SliderComponent from "@/components/SliderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      title: "",
      form: {},
      items: [],
      data1: "Hay111",
      array1: [],
    };
  },
  computed: {
    getData() {
      return this.data1;
    },
    getArray() {
      return this.array1;
    },
  },
  updated() {
    setInterval(() => {
      this.data1 = "AAA";
      this.array1.push("sdfghj");
    }, 3000);
  },
  components: {
    SliderComponent,
    CardComponent,
    FormComponent,
  },

  async created() {
    await this.getData();
  },
  methods: {
    openDialog() {
      this.show = true;
      this.title = "Test Form";

      this.form.name = "Yasindu";
      this.form.email = "yasi@gmail.com";
      this.form.message = "Hello";
    },

    emitingdata(data) {
      console.log(data);
    },

    async getData() {
      const res = await axios.get("https://reqres.in/api/products");
      this.items = res.data.data;
    },
  },
};
</script>
