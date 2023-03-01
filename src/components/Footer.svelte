<script>
  import Logo from './Logo.svelte'
</script>
<footer id="contact" class="container">
  <div class="content">
    <div class="inner">
      <article class="left-footer">
        <Logo form="small" />
      </article>
      <article class="right-footer">
        <p>&copy; 2019 Yellowjacket Technologies</p>
        <p>627 North Rossmore avenue</p>
        <p>Los Angeles, CA 90004</p>
        <a href="tel:6464008475" data-rel="external">Tel: 646 400 8475</a>
        <a href="mailto:info@yellowjackettechnologies.com" data-rel="external">info@yellowjackettechnologies.com</a>
      </article>
    </div>
  </div>
</footer>
<style lang="scss">
  @import "./style/variables.scss";
  .container {
    background: $color-1;
    color: $white;
    padding: 80px 0;
  }
  .inner {
    overflow: hidden;
    margin: 0 -10px;
  }
  article {
    width: calc(50% - 30px);
    padding: 10px;
    box-sizing: border-box;
    margin: 0 15px;
    a {
      display: block;
      color: $white;
    }
    a, p {
      padding: 0;
      margin: 0;
      font-size: 13px;
      line-height: 1.5;
      letter-spacing: 1px;
    }
  }
  .left-footer {
    float: left;
  }
  .right-footer {
    float: right;
    text-align: right;
  }
  @media (max-width: 749px) {
    article {
      width: 100%;
    }
    .right-footer, .left-footer {
      float: none;
      text-align: left;
    }
  }
</style>