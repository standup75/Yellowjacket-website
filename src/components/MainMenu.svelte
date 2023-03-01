<script>
  import { onMount, onDestroy } from 'svelte'
  let isMenuOpen = false
  let showHamburger = false
  const menuItems = [{
    name: "Home",
    id: "home",
  }, {
    name: "Our Team",
    id: "team",
  }, {
    name: "Our Projects",
    id: "projects",
  }, {
    name: "Contact Us",
    id: "contact",
  }]

  onMount(() => {
    window.addEventListener('click', closeMenu)
    window.addEventListener('scroll', checkDisplayType)
    window.addEventListener('resize', resizedWindow)
    checkDisplayType()
    if (document.readyState === 'complete') {
      this.initSections()
    } else {
      window.addEventListener('load', initSections.bind(this))
    }
  })
  onDestroy(() => {
    window.removeEventListener('click', closeMenu)
    window.removeEventListener('scroll', checkDisplayType)
    window.removeEventListener('resize', resizedWindow)
    window.removeEventListener('load', initSections)
  })
  function toggleMenu() {
    isMenuOpen = !isMenuOpen
  }
  function closeMenu() {
    if (isMenuOpen) isMenuOpen = false
  }
  function scrollTo(menuItem) {
    return () => {
      window.scrollBy({
        top: menuItem.y - window.scrollY,
        left: 0,
        behavior: `smooth`,
      })
    }
  }
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function stoppedScrolling() {
    while (true) {
      const scrollY = window.scrollY
      await timeout(50)
      if (window.scrollY === scrollY) return
    }
  }
  async function checkDisplayType() {
    await stoppedScrolling()
    const show = window.scrollY > 100 || window.innerWidth < 750
    if (show !== showHamburger) {
      showHamburger = show
      isMenuOpen = false
    }
  }
  function initSections() {
    for (const menuItem of menuItems) {
      const el = document.getElementById(menuItem.id)
      if (el) {
        const rect = el.getBoundingClientRect()
        menuItem.y = ~~(rect.top + window.scrollY)
      } else {
        console.error(`MainMenu component requires an element with id ${menuItem.id} that it has not found`)
      }
    }
  }
  function resizedWindow() {
    checkDisplayType()
    initSections()
  }
</script>

{#if showHamburger}
  <div class="hamburger" class:open={isMenuOpen} on:click|stopPropagation={toggleMenu}>
    <div class="pill" on:click|stopPropagation={toggleMenu}></div>
    <div class="patties"></div>
    <ul>
      {#each menuItems as menuItem}
        <li on:click={scrollTo(menuItem)} class="menu-item">
          {menuItem.name}
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <nav>
    <ul>
      {#each menuItems as menuItem}
        <li on:click={scrollTo(menuItem)} class="menu-item">
          {menuItem.name}
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<style lang="scss">
  @import "./style/variables.scss";
  nav {
    float: right;
    ul {
      position: relative;
      overflow: hidden;
      padding-top: 33px;
    }
    li {
      float: left;
      margin: 0 10px;
      color: $white;
      cursor: pointer;
    }
  }
  .menu-item {
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
  }
  .hamburger {
    position: relative;
    z-index: 100;
    cursor: pointer;
    .pill {
      position: fixed;
      top: 23px;
      right: 10px;
      width: 70px;
      height: 70px;
      border-radius: 35px;
      transition: all 0.4s ease;
    }
    .patties {
      transition: all 0.2s ease;
      position: fixed;
      top: 25px;
      right: 10px;
      display: block;
      width: 35px;
      height: 8px;
      margin: 20px 17px;
      border-top: 4px solid $off-white;
      border-bottom: 4px solid $off-white;
      &:before {
        transition: all 0.2s ease;
        content: "";
        position: absolute;
        top: 20px;
        left: 0px;
        width: 100%;
        border-top: 4px solid $off-white;
      }
    }
    ul {
      transition: all 0.8s ease;
      position: fixed;
      top: 90px;
      right: -20px;
      text-align: right;
      opacity: 0;
      li {
        font-size: 15px;
        line-height: 2;
        color: $white;
      }
    }
    &.open {
      .pill {
        background: $color-1;
        box-shadow: 0 0 30px rgba($white, 0.1);
      }
      .patties {
        &, &:before {
          border-color: $white;
        }
      }
    }
    &.open {
      .pill {
        top: -85px;
        right: -190px;
        width: 400px;
        height: 400px;
        border-radius: 330px;
      }
      .patties {
        transform: rotate(45deg);
        border-bottom: 0;
        top: 35px;
        right: 15px;
        &:before {
          transform: rotate(-90deg);
          top: -4px;
        }
      }
      ul {
        opacity: 1;
        right: 30px;
      }
    }
  }
  @media (min-width: 651px) {
    nav {
      li {
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .hamburger {
      ul {
        li {
          &:hover {
            text-decoration: underline;
          }
        }
      }
      &:hover {
        .pill {
          background: $color-1;
        }
        .patties {
          &, &:before {
            border-color: $white;
          }
        }
      }
    }
  }
</style>
