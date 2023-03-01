<script>
  export let form
</script>
<div class="container">
  <img src="logo.svg" class="{form}" alt="Yellowjacket Technologies" />
  <div class="name">
    <h1 class="h1">Yellowjacket</h1>
    <h2>Technologies</h2>
  </div>
</div>
<style lang="scss">
  @import "./style/variables.scss";
  .small {
    width: 80px;
  }
  .container {
    overflow: hidden;
    display: inline-block;
  }
  img, .name {
    float: left;
  }
  .h1 {
    color: $white;
    font-family: 'Cera Pro';
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
    font-size: 25px;
    line-height: 25px;
  }
  h2 {
    color: $color-2;
    font-family: 'Cera Pro';
    font-weight: normal;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 1.3px;
  }
  .name {
    margin: 17px 10px 0 10px;
  }
</style>
