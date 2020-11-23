<template>
  <nav class="navbar navbar-expand-lg">
    <NavBarLogado v-if="usuarioLogado" />
    <NavBarDeslogado v-else />
  </nav>
</template>

<script>
import NavBarLogado from './NavBarLogado';
import NavBarDeslogado from './NavBarDeslogado';
import { mapGetters } from 'vuex';

export default {
  components: {
    NavBarLogado,
    NavBarDeslogado
  },
  computed: {
    ...mapGetters(['usuarioLogado'])
  }
};
</script>

<style>
.navbar {
  background:#48aec0;
}
.navbar a {
  color: #fff;
}
.navbar a:hover {
  color: black;
}
</style>