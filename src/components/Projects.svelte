<script>
  const projects = [{
    name: 'Silex Terminal',
    image: 'projects/silex.png',
    description: 'Silex is the first desktop Crypto Exchange Terminal application for Mac and PC that allows you to trade on all your favorite exchanges without storing your API keys on a central server. We are the ideal platform for both crypto-enthusiasts, and professionals looking for a secured and easy way to trade and transfer coins across multiple exchanges.'
  }, {
    name: 'Lovelooks',
    image: 'projects/lovelooks.png',
    description: 'Lovelooks is located in Brooklyn, New York. This organization primarily operates in the Catalog Sales business / industry within the Miscellaneous Retail sector. This organization has been operating for approximately 4 years. Lovelooks is estimated to generate $8.1 million in annual revenues, and employs approximately 3 people at this single location. This is a women owned and operated business.'
  }, {
    name: 'Cryptic',
    image: 'projects/cryptic.png',
    description: 'Cyptic is an application that creates an encrypted wallet on the blockchain that you access with a login / password Not different from an online wallet (think blockchain.com) except that the product is not B2C but a licence software that can integrate with different verticals'
  }]
</script>
<div class="container" id="projects">
  <div class="content">
    <h1 class="section-title white">Our Projects</h1>
    {#each projects as project}
      <article>
        <img src="{project.image}" alt="{project.name}" />
        <div class="description">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      </article>
    {/each}
  </div>
</div>
<style lang="scss">
  @import "./style/variables.scss";
  .container {
    background: rgba($color-1, 0.4);
    color: $white;
    padding: 0 0 60px 0;
  }
  .content {
    overflow: hidden;
  }
  .section-title {
    margin-bottom: 100px;
  }
  article {
    overflow: hidden;
    margin: 100px 60px;
    img {
      width: 400px;
      float: left;
      margin-right: 70px;
    }
    .description {
      display: block;
      float: left;
      width: calc(100% - 470px);
    }
  }
  h2 {
    font-weight: 100;
    font-size: 32px;
  }
  @media (max-width: 880px) and (min-width: 610px) {
    article {
      margin: 80px 30px;
      img {
        width: 300px;
        margin-right: 30px;
      }
      .description {
        width: calc(100% - 330px);
      }
    }
  }
  @media (max-width: 609px) {
    article {
      margin: 80px 30px;
      .description, img {
        width: 100%;
        float: none;
      }
      .description {
        margin-top: 20px;
      }
    }
  }
</style>