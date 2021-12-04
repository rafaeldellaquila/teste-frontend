<template>
  <q-layout view="hHh lpR fFf">
    <HeaderContainer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import HeaderContainer from "src/components/HeaderContainer.vue";
export default defineComponent({
  name: "MainLayout",
  components: { HeaderContainer },
});
</script>
