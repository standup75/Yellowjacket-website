<div class="container">
  <div class="content">
    <h1 class="section-title white">Meet Yellowjacket</h1>
    <article>
      <div class="left">
        <img src="honeycomb.svg" alt="honeycomb"/>
        <i class="fas fa-align-left" />
      </div>
      <div class="right">
        <h2>Our Vision</h2>
        <p>We are Paul, Tim and Stan, and together, we are Yellowjacket Technologies.</p>
      </div>
    </article>
    <article>
      <div class="left">
        <img src="honeycomb.svg" alt="honeycomb"/>
        <i class="fas fa-eye" />
      </div>
      <div class="right">
        <h2>Our Technology</h2>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p>
      </div>
    </article>
    <article>
      <div class="left">
        <img src="honeycomb.svg" alt="honeycomb"/>
        <i class="fas fa-screwdriver" />
      </div>
      <div class="right">
        <h2>Our Process</h2>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p>
      </div>
    </article>
  </div>
</div>
<style lang="scss">
  @import "./style/variables.scss";
  .container {
    padding: 0 0 80px 0;
    background: $color-4;
    color: $white;
  }
  h2 {
    font-weight: 100;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  article {
    overflow: hidden;
    margin: 80px 0;
  }
  .left {
    float: left;
    width: 400px;
    position: relative;
    img {
      width: 150px;
      margin: 0 auto;
      display: block;
    }
    i {
      position: absolute;
      display: block;
      top: 55px;
      font-size: 50px;
      left: 172px;
    }
  }
  .right {
    float: left;
    width: calc(100% - 400px);
    padding-right: 15px;
    box-sizing: border-box;
  }
  @media (max-width: 749px) {
    .left {
      width: 130px;
      img {
        width: 75px;
        margin-top: 5px;
      }
      i {
        top: 37px;
        font-size: 20px;
        left: 54px;
      }
    }
    .right {
      width: calc(100% - 130px);
    }
  }
</style>