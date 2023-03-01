<script>
  function scrollToContent() {
    window.scrollBy({
      top: 680 - window.scrollY,
      left: 0,
      behavior: `smooth`,
    })
  }
</script>
<div class="content">
  <h1>Tailor made digital solutions and integration</h1>
  <div>Coming soon...</div>
</div>
<style lang="scss">
  @import "./style/variables.scss";
  i, h1 {
    font-size: 50px;
    color: $color-1;
    text-align: center;
    margin: 100px;
    text-transform: uppercase;
    font-weight: bold;
    color: $white;
  }
  i {
    display: block;
    cursor: pointer;
    &:hover {
      color: $color-1;
    }
  }
  @media (max-width: 1024px) and (min-width: 750px) {
    i, h1 {
      font-size: 38px;
      margin: 70px;
    }
  }
  @media (max-width: 749px) {
    i, h1 {
      font-size: 25px;
      margin: 50px;
    }
  }

</style>
