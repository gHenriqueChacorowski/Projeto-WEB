<template>
  <div>
    <h1>Olá deu bom!</h1>
    <button type="submit" @click.prevent="efetuarLogout">Sair</button>
  </div>
</template>

<script>
export default {
  methods: {
    efetuarLogout() {
      localStorage.removeItem('token');
      this.$router.push({ name: 'tela-login' });
    }
  }
}
</script>

<style>

</style>