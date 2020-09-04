<template>
<section class="is-fullheight">
  <div class="">
    <div class="container">
      <div class="columns is-centered">


        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <div class="has-text-centered column is-12 logo" href="">
            <img width="200px" src="/images/2-29-512.png" alt="logo img">
          </div>

           <form action=""  v-if="!$store.state.authUser" @submit.prevent="login">

            <div class="field">
              <div :class="`control`">
                <label for="email">Email</label>
                <input type="email"  
                  id="email"
                  v-model="formUsername" 
                  class="input" 
                  required
                />
         
              </div>
            </div>
            <div class="field">
              <div class="control float-container">
                <label for="password">Password</label>
                <input id="password" type="password" v-model="formPassword"  class="input" required
               
                >
                
              </div>
            </div>
            <p v-if="formError" :class="`${$style.error}`">
              {{ formError }}
            </p>
            <div class="field has-text-centered">
              <button>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  
</template>

<script>
export default {
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })

        console.log(this);

        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    } 
  },
  computed: {
    isDisabled () {
        return this.formUsername!=="" && this.formPassword!==""
    }
  }
}
</script>

<style scoped lang="scss">

</style>

