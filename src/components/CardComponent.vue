<template>
  <div class="pl-9 pr-9">
    <v-row>
      <v-col lg="3" cols="12" md="6" sm="6" v-for="item in items" :key="item">
        <v-card :color="item.name">
          <v-img src="@/assets/images/ss2 1.png"></v-img>

          <p class="pl-2 pt-4 pb-4">
            {{ item.color }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // items: [
      //   {
      //     color: "red",
      //     description:
      //       "Butterflies are winged insects from the lepidopteran suborder  Rhopalocera, characterized by large, often brightly coloured wingsflight. The group comprises the superfamilies Hedyloidea and Papilionoidea.",
      //   },
      //   {
      //     color: "green",
      //     description:
      //       "Butterflies are winged insects from the lepidopteran suborder  Rhopalocera, characterized by large, often brightly coloured wingsflight. The group comprises the superfamilies Hedyloidea and Papilionoidea.",
      //   },
      //   {
      //     color: "#D9D9D9",
      //     description:
      //       "Butterflies are winged insects from the lepidopteran suborder  Rhopalocera, characterized by large, often brightly coloured wingsflight. The group comprises the superfamilies Hedyloidea and Papilionoidea.",
      //   },
      //   {
      //     color: "white",
      //     description:
      //       "Butterflies are winged insects from the lepidopteran suborder  Rhopalocera, characterized by large, often brightly coloured wingsflight. The group comprises the superfamilies Hedyloidea and Papilionoidea.",
      //   },
      //   {
      //     color: "purple",
      //     description:
      //       "Butterflies are winged insects from the lepidopteran suborder  Rhopalocera, characterized by large, often brightly coloured wingsflight. The group comprises the superfamilies Hedyloidea and Papilionoidea.",
      //   },
      //   {
      //     color: "black",
      //     description:
      //       "Butterflies are winged insects from the lepidopteran suborder  Rhopalocera, characterized by large, often brightly coloured wingsflight. The group comprises the superfamilies Hedyloidea and Papilionoidea.",
      //   },
      // ],
    };
  },

  props: {
    items: Array,
  },
};
</script>
