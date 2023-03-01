<script>
  import SocialLinks from './SocialLinks.svelte'
  const team = [{
    name: 'Tim',
    socialLinks: [{
      network: 'linkedIn',
      url: 'https://www.linkedin.com/in/timdevlin-innovation/',
    }],
    title: 'CEO & Co-founder',
    bio: 'MBA, MIM in International Business. 15 years of industry experience in supply chain for retail, footwear and apparel. Mr. Devlin is a subject matter expert in Digital Product Development and currently managing the Bridgetown Innovation Studio for Kalypso consulting in Portland OR. Additionally, Tim also has expertise in immersive technology like AR/VR and MR and develops custom applications for brands leveraging digital assets in these environments.'
  }, {
    name: 'Paul',
    socialLinks: [{
      network: 'linkedIn',
      url: 'https://www.linkedin.com/in/paul-white-9458b233/',
    }],
    title: 'COO & Co-founder',
    bio: 'PhD in Political Science.  Has over 5 years of experience in data management.  Paul had published works in the Journal of Political Science and the Political Science Research Network.  Paul was the recipient of the Social Science Research Grant from the Strom Thurmond Institute at Clemson University to analyze political behavior on Election day.'
  }, {
    name: 'Stan',
    socialLinks: [{
      network: 'linkedIn',
      url: 'https://www.linkedin.com/in/standup75/',
    }, {
      network: 'github',
      url: 'https://github.com/standup75',
    }],
    title: 'CTO & Co-founder',
    bio: 'Bachelor in Computer Science and 20 years of experience as a software engineer, focused on various aspects of highly secured systems building banking portals and embedded encryption softwares. Mr Duprey also worked as a CTO for user-facing startup company focussing on mobile development for iOS.'
  }]
</script>
<div id="team" class="container">
  <div class="content">
    <h1 class="section-title">Meet The Team</h1>
    {#each team as teamMember}
      <article>
        <img src="team/{teamMember.name.toLowerCase()}.jpg" alt="{teamMember.name}"/>
        <h2>{teamMember.name}</h2>
        <h2>{teamMember.title}</h2>
        <SocialLinks socialLinks={teamMember.socialLinks} />
        <p>{teamMember.bio}</p>
      </article>
    {/each}
  </div>
</div>
<style lang="scss">
  @import "./style/variables.scss";
  .container {
    background: #fff;
    color: $color-3;
    padding: 0 0 60px 0;
  }
  .content {
    overflow: hidden;
  }
  article {
    width: 33%;
    float: left;
    padding: 0 30px;
    box-sizing: border-box;
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 150px;
      margin: 20px auto;
      display: block;
      border-radius: 75px;
    }
    h2 {
      text-align: center;
      font-weight: 100;
      font-size: 22px;
    }
    p {
      text-align: justify;
      line-height: 1.4;
      margin: 20px 0;
    }
  }
  @media (max-width: 749px) {
    article {
      float: none;
      width: 100%;
    }
  }
</style>