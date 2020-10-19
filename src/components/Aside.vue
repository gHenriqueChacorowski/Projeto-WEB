<template>
  <div id="tela">
      <aside>
      <header>
        <h1>Projeto: Mapeamento de Clientes</h1>

        <img src="../images/logo-horizontal.png" alt="logoIntegrado" />
      </header>

      <footer>
        <p>Aelcio Soares Rodrigues de Macedo</p>
        <p>Henrique Silva Chacorowski</p>
        <p>Murilo Bandeira</p>
      </footer>
    </aside>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#tela {
  width: 30vw;
  height: 100vh;

  position: relative;
  display: flex;
}

#tela aside {
  width: 400px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#tela aside h1 {
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 24px;
}

#tela aside img {
  padding-top: 20px;
  margin-top: 24px;
}

#tela aside p {
  line-height: 28px;
  margin-top: 25px;
}

#tela main {
  padding: 100px;
  margin: 50px;
}
</style>