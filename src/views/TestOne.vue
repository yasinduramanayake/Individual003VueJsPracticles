<template>
  <div>
    <v-container>
      <v-card elevation="7" height="200px">
        <h2 class="text-center">Hay</h2>
        <br />
        <center>
          <v-btn color="green">Click</v-btn>
        </center>
      </v-card>

      <div class="mt-5"></div>

      <!-- grid view -->

      <v-row>
        <v-col lg="3" cols="12" md="6" sm="6">
          <v-card class="mx-auto" width="200">
            <v-card-item title="Florida">
              <template v-slot:subtitle>
                <v-icon
                  class="me-1 pb-1"
                  color="error"
                  icon="mdi-alert"
                  size="18"
                ></v-icon>

                Extreme Weather Alert
              </template>
            </v-card-item>

            <v-card-text class="py-0">
              <v-row align="center" no-gutters>
                <v-col class="text-h2" cols="6"> 64&deg;F </v-col>

                <v-col class="text-right" cols="6">
                  <v-icon
                    color="error"
                    icon="mdi-weather-hurricane"
                    size="88"
                  ></v-icon>
                </v-col>
              </v-row>
            </v-card-text>

            <div class="d-flex py-3 justify-space-between">
              <v-list-item density="compact" prepend-icon="mdi-weather-windy">
                <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
              </v-list-item>

              <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
                <v-list-item-subtitle>48%</v-list-item-subtitle>
              </v-list-item>
            </div>

            <v-expand-transition>
              <div v-if="expand">
                <div class="py-2">
                  <v-slider
                    v-model="time"
                    :max="6"
                    :step="1"
                    :ticks="labels"
                    class="mx-4"
                    color="primary"
                    density="compact"
                    show-ticks="always"
                    thumb-size="10"
                    hide-details
                  ></v-slider>
                </div>

                <v-list class="bg-transparent">
                  <v-list-item
                    v-for="item in forecast"
                    :key="item.day"
                    :append-icon="item.icon"
                    :subtitle="item.temp"
                    :title="item.day"
                  >
                  </v-list-item>
                </v-list>
              </div>
            </v-expand-transition>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                :text="!expand ? 'Full Report' : 'Hide Report'"
                @click="expand = !expand"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col lg="3" cols="12" md="6" sm="6">
          <v-card class="mx-auto" width="200">
            <v-card-item title="Florida">
              <template v-slot:subtitle>
                <v-icon
                  class="me-1 pb-1"
                  color="error"
                  icon="mdi-alert"
                  size="18"
                ></v-icon>

                Extreme Weather Alert
              </template>
            </v-card-item>

            <v-card-text class="py-0">
              <v-row align="center" no-gutters>
                <v-col class="text-h2" cols="6"> 64&deg;F </v-col>

                <v-col class="text-right" cols="6">
                  <v-icon
                    color="error"
                    icon="mdi-weather-hurricane"
                    size="88"
                  ></v-icon>
                </v-col>
              </v-row>
            </v-card-text>

            <div class="d-flex py-3 justify-space-between">
              <v-list-item density="compact" prepend-icon="mdi-weather-windy">
                <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
              </v-list-item>

              <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
                <v-list-item-subtitle>48%</v-list-item-subtitle>
              </v-list-item>
            </div>

            <v-expand-transition>
              <div v-if="expand">
                <div class="py-2">
                  <v-slider
                    v-model="time"
                    :max="6"
                    :step="1"
                    :ticks="labels"
                    class="mx-4"
                    color="primary"
                    density="compact"
                    show-ticks="always"
                    thumb-size="10"
                    hide-details
                  ></v-slider>
                </div>

                <v-list class="bg-transparent">
                  <v-list-item
                    v-for="item in forecast"
                    :key="item.day"
                    :append-icon="item.icon"
                    :subtitle="item.temp"
                    :title="item.day"
                  >
                  </v-list-item>
                </v-list>
              </div>
            </v-expand-transition>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                :text="!expand ? 'Full Report' : 'Hide Report'"
                @click="expand = !expand"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col lg="3" cols="12" md="6" sm="6">
          <v-card class="mx-auto" width="200">
            <v-card-item title="Florida">
              <template v-slot:subtitle>
                <v-icon
                  class="me-1 pb-1"
                  color="error"
                  icon="mdi-alert"
                  size="18"
                ></v-icon>

                Extreme Weather Alert
              </template>
            </v-card-item>

            <v-card-text class="py-0">
              <v-row align="center" no-gutters>
                <v-col class="text-h2" cols="6"> 64&deg;F </v-col>

                <v-col class="text-right" cols="6">
                  <v-icon
                    color="error"
                    icon="mdi-weather-hurricane"
                    size="88"
                  ></v-icon>
                </v-col>
              </v-row>
            </v-card-text>

            <div class="d-flex py-3 justify-space-between">
              <v-list-item density="compact" prepend-icon="mdi-weather-windy">
                <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
              </v-list-item>

              <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
                <v-list-item-subtitle>48%</v-list-item-subtitle>
              </v-list-item>
            </div>

            <v-expand-transition>
              <div v-if="expand">
                <div class="py-2">
                  <v-slider
                    v-model="time"
                    :max="6"
                    :step="1"
                    :ticks="labels"
                    class="mx-4"
                    color="primary"
                    density="compact"
                    show-ticks="always"
                    thumb-size="10"
                    hide-details
                  ></v-slider>
                </div>

                <v-list class="bg-transparent">
                  <v-list-item
                    v-for="item in forecast"
                    :key="item.day"
                    :append-icon="item.icon"
                    :subtitle="item.temp"
                    :title="item.day"
                  >
                  </v-list-item>
                </v-list>
              </div>
            </v-expand-transition>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                :text="!expand ? 'Full Report' : 'Hide Report'"
                @click="expand = !expand"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col lg="3" cols="12" md="6" sm="6">
          <v-card class="mx-auto" width="200">
            <v-card-item title="Florida">
              <template v-slot:subtitle>
                <v-icon
                  class="me-1 pb-1"
                  color="error"
                  icon="mdi-alert"
                  size="18"
                ></v-icon>

                Extreme Weather Alert
              </template>
            </v-card-item>

            <v-card-text class="py-0">
              <v-row align="center" no-gutters>
                <v-col class="text-h2" cols="6"> 64&deg;F </v-col>

                <v-col class="text-right" cols="6">
                  <v-icon
                    color="error"
                    icon="mdi-weather-hurricane"
                    size="88"
                  ></v-icon>
                </v-col>
              </v-row>
            </v-card-text>

            <div class="d-flex py-3 justify-space-between">
              <v-list-item density="compact" prepend-icon="mdi-weather-windy">
                <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
              </v-list-item>

              <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
                <v-list-item-subtitle>48%</v-list-item-subtitle>
              </v-list-item>
            </div>

            <v-expand-transition>
              <div v-if="expand">
                <div class="py-2">
                  <v-slider
                    v-model="time"
                    :max="6"
                    :step="1"
                    :ticks="labels"
                    class="mx-4"
                    color="primary"
                    density="compact"
                    show-ticks="always"
                    thumb-size="10"
                    hide-details
                  ></v-slider>
                </div>

                <v-list class="bg-transparent">
                  <v-list-item
                    v-for="item in forecast"
                    :key="item.day"
                    :append-icon="item.icon"
                    :subtitle="item.temp"
                    :title="item.day"
                  >
                  </v-list-item>
                </v-list>
              </div>
            </v-expand-transition>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                :text="!expand ? 'Full Report' : 'Hide Report'"
                @click="expand = !expand"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
