<template>
  <div class="form">

    <div class="main-wrapper">
      <v-card elevation="7" class="pl-8 pr-8 pt-6 pb-6">
        
        <h2 class="text-center">{{ title }}</h2>
        <v-form>
          <v-row>
            <v-col lg="12" cols="12">
              <label>Name</label>
              <v-text-field
                variant="outlined"
                v-model="form.name"
              ></v-text-field>
            </v-col>
            <v-col lg="12" cols="12">
              <label>E-mail</label>
              <v-text-field
                variant="outlined"
                v-model="form.email"
              ></v-text-field>
            </v-col>

            <v-col lg="12" cols="12">
              <label>Message</label>
              <v-textarea
                variant="outlined"
                v-model="form.message"
              ></v-textarea>
            </v-col>

            <v-col lg="12" cols="12">
              <v-btn color="red" block class="button" @click="emitData()"
                ><span class="btn-text">Submit</span></v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card>

      <!-- <v-dialog max-width="500" v-model="show" persistent>
        <v-card class="pa-10">
          <center>
            Name : {{ form.name }}

            <br /><br />

            Email : {{ form.email }}

            <br /><br />

            Message : {{ form.message }}
          </center>
        </v-card>
      </v-dialog> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: "Hel2dfjkl345hjnm,hjm5",
      object1: {},
      array1: [],
      form: {},
      show: false,
    };
  },
  created() {
    this.form = this.formData;
  },

  props: {
    title: String,
    formData: Object,
  },

  methods: {
    emitData() {
      this.$emit("emitdata", this.form);
    },
    // getData() {
    //   // this.show = true;
    //   this.form.name = "Yasindu123";
    //   this.form.email = "yasindu123@gmail.com";
    //   this.form.message = "Hay";
    // },
  },
};
</script>
