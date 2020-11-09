<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/cadastro-cliente">Cadastrar Cliente</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/map" class="nav-link">Mapeamento de Clientes</router-link>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link" @click.prevent="efetuarLogout">Logout</a>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    efetuarLogout() {
      this.$store.commit('DESLOGAR_USUARIO');
      this.$router.push({ name: 'navbar' })
    }
  }
}
</script>