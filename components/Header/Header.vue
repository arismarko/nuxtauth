<template>
  
    <!-- START NAV -->
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="../">
                        <!-- <img src="../images/bulma.png" alt="Logo"> -->
                </a>
                <span class="navbar-burger burger" data-target="navbarMenu">
                      
                <span></span>
                <span></span>
                </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                     <nuxt-link to="/" class="navbar-item is-active">
                        Home
                    </nuxt-link>
                    <nuxt-link to="/team" class="navbar-item">
                        Team
                    </nuxt-link>
                    <nuxt-link to="/player" class="navbar-item">
                          My Player page
                    </nuxt-link>
                     <nuxt-link to="/manager" class="navbar-item">
                          Manager
                    </nuxt-link>
                    
                </div>
            </div>
        </div>
    </nav>
    <!-- END NAV -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
      } catch (e) {
        this.formError = e.message;
      }
    },

  },
  computed: {
    toggleBurgerMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped lang="scss">
  @import "./Header.scss";

  .navbar{
    position: fixed;
    background: white;
    width: 100%;

  }
</style>

