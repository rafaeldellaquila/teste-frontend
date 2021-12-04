<style lang="scss" scoped>
@import "../css/PokemonProfile.scss";
</style>
<template>
  <q-page
    class="pokemon-profile flex justify-center content-start"
    :class="pokemon.color"
  >
    <q-icon
      @click="$router.go(-1)"
      name="west"
      color="$secondary"
      class="icon"
      size="48px"
    />

    <q-img
      :ratio="1"
      width="300px"
      height="300px"
      :src="pokemon.photo"
      class="__photo"
    />
    <section class="content">
      <div class="header">
        <h1 class="__name">{{ pokemon.name }}</h1>
        <h2 class="__id">#{{ pokemon.id }}</h2>
      </div>

      <div class="types q-pt-none inline-flex justify-start">
        <h3 class="__title">Tipos:</h3>
        <p
          v-for="(type, index) in pokemon.types"
          :key="index"
          class="__tag x"
          :class="type.type.name"
        >
          {{ type.type.name }}
        </p>
      </div>

      <div class="characteristics">
        <section class="__primary flex">
          <div>
            <h3 class="__title">Peso:</h3>
            <p class="__description">
              <q-icon name="monitor_weight" color="$secondary" size="24px" />
              {{ re(pokemon.weight) }}kg
            </p>
          </div>

          <div>
            <h3 class="__title">Altura:</h3>
            <p class="__description">
              <q-icon name="height" color="$secondary" size="24px" />{{
                re(pokemon.height)
              }}m
            </p>
          </div>

          <div>
            <h3 class="__title">Habilidades:</h3>
            <p
              class="__description"
              v-for="(ability, index) in pokemon.abilities"
              :key="index"
            >
              {{ ability.ability.name }}
            </p>
          </div>
        </section>
        <div>
          <h3 class="__title">Shiny:</h3>
          <q-img
            width="96px"
            :ratio="1"
            :src="pokemon.photo_shiny"
            class="__photo"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  props: ["pokemonName"],

  created: function () {
    this.$api.get(`/pokemon/${this.pokemonName}`).then((res) => {
      this.pokemon.color = res.data.types[0].type.name;
      this.pokemon.types = res.data.types;
      this.pokemon.photo = res.data.sprites.front_default;
      this.pokemon.photo_shiny = res.data.sprites.front_shiny;
      this.pokemon.name = res.data.name;
      this.pokemon.id = res.data.id;
      this.pokemon.weight = res.data.weight;
      this.pokemon.height = res.data.height;
      this.pokemon.abilities = res.data.abilities;
    });
  },

  methods: {
    re(stats) {
      return (stats / 10).toFixed(1);
    },
  },

  data() {
    return {
      pokemon: {
        photo: "",
        photo_shiny: "",
        name: "",
        id: "",
        color: "",
        types: [],
        height: Number,
        weight: Number,
        abilities: [],
      },
    };
  },
});
</script>
