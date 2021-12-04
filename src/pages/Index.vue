<template>
  <q-page class="flex flex-center">
    <section class="full-width">
      <q-input
        dense
        standout
        bg-color="accent"
        color="lightDark"
        label-color="white"
        v-model="searchValue"
        input-class="text-left"
        class="q-ml-md q-ma-md"
        label="Procure um  Pokemon aqui"
      >
        <template v-slot:append>
          <q-icon v-if="searchValue === ''" name="search" color="white" />
          <q-icon
            color="white"
            v-else
            name="clear"
            class="cursor-pointer"
            @click="searchValue = ''"
          />
        </template>
      </q-input>
    </section>

    <div v-for="pokemon in searchResult" :key="pokemon.name">
      <PokemonCard
        :name="pokemon.name"
        :url="pokemon.url"
        @click="handleClick(pokemon.name)"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import PokemonCard from "src/components/PokemonCard.vue";

export default defineComponent({
  name: "PageIndex",

  components: {
    PokemonCard,
  },

  data() {
    return {
      searchValue: "",
      pokemons: [],
    };
  },

  created: function () {
    this.$api
      .get("/pokemon?limit=151&offset=0")
      .then((res) => {
        this.pokemons = res.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  computed: {
    searchResult() {
      let filteredPokemons = this.pokemons;

      if (this.searchValue != " " && this.searchValue) {
        filteredPokemons = filteredPokemons.filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(this.searchValue);
        });
      }

      return filteredPokemons;
    },
  },

  methods: {
    handleClick(pokemonName) {
      console.log(pokemonName);
      this.$router.push({
        name: "Pokemon",
        params: { pokemonName: pokemonName },
      });
    },
  },
});
</script>
