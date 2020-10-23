<template>
  <div>
    <h1>Olá deu bom!</h1>
    <button class="btn btn-primary" type="submit" @click.prevent="efetuarLogout">Sair</button>
  </div>
</template>

<script>
export default {
  methods: {
    efetuarLogout() {
      this.$store.commit('DESLOGAR_USUARIO');
      this.$router.push({ name: 'tela-login' });
    }
  }
}
</script>

<style>

</style>