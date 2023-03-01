<div class="container fallback"></div>
<video src="bg.mp4" autoplay loop class="container"/>
<div class="logo">
  <img src="logo.svg" alt="Yellowjacket Technologies" />
  <div class="name">
    <h1 class="h1">Yellowjacket</h1>
    <h2>Technologies</h2>
  </div>
</div>
<div class="notice">Coming soon...</div>
<style lang="scss">
  @import "./style/variables.scss";
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .fallback {
    background: $color-1;
  }
  .logo {
    position: relative;
    width: 255px;
    margin: 200px auto;
  }
  img {
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
  .notice {
    position: relative;
    color: rgba($white, 0.1);
    padding-top: 100px;
    font-size: 22px;
    text-shadow: 0 0 2px $white;
    text-align: center;
  }

  .name {
    margin: 17px 10px 0 10px;
  }
</style>
