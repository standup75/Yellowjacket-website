<script>
  export let socialLinks
</script>
<ul>
  {#each socialLinks as socialLink}
    <a href="{socialLink.url}" target="_blank">
      <i class="fab fa-{socialLink.network.toLowerCase()}" />
    </a>
  {/each}
</ul>
<style lang="scss">
  @import "./style/variables.scss";
  ul {
    text-align: center;
    a {
      text-decoration: none;
      margin: 5px;
      color: $white;
      font-size: 25px;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
  }
</style>