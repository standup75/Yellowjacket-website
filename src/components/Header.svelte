<script>
  import Logo from './Logo.svelte'
  import MainMenu from './MainMenu.svelte'
</script>

<div class="content" id="home">
  <div class="logo">
    <Logo form="small"/>
  </div>
  <MainMenu />
</div>
<style lang="scss">
  .logo {
    margin-top: 20px;
    display: inline-block;
  }
  @media (max-width: 1038px) {
    .logo {
      margin-left: 15px;
    }
  }
</style>