<style lang="scss" scoped>
@import "../css/PokemonCard.scss";
</style>

<template>
  <q-card class="pokemon-card" :id="pokemon.name" :ref="pokemon.name">
    <q-img
      :ratio="1"
      :src="pokemon.photo"
      class="__photo"
      :class="pokemon.color"
      decoding="async"
    />
    <q-card-section class="__content">
      <div
        class="
          __title
          fit
          row
          no-wrap
          justify-start justify-between
          content-between
          items-center
        "
      >
        <h1 class="text-h6 text-weight-bold">{{ this.name }}</h1>
        <h2 class="text-subtitle2 text-weight-bold">#{{ pokemon.id }}</h2>
      </div>

      <div class="__types q-pt-none flex justify-start">
        <p
          v-for="(type, index) in pokemon.types"
          :key="index"
          class="__tag"
          :class="type.type.name"
        >
          {{ type.type.name }}
        </p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PokemonCard",
  created: function () {
    this.$axios.get(this.url).then((res) => {
      this.pokemon.color = res.data.types[0].type.name;
      this.pokemon.types = res.data.types;
      this.pokemon.photo = res.data.sprites.front_default;
      this.pokemon.name = res.data.name;
      this.pokemon.id = res.data.id;
    });
  },

  data() {
    return {
      pokemon: {
        photo: "",
        name: "",
        id: "",
        color: "",
        types: [],
      },
    };
  },

  props: {
    name: String,
    url: String,
  },
});
</script>
