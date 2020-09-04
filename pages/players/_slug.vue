<template>
<div>
 
  <section class="hero is-info is-medium is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
               {{ player.name }}
        </h1>
      </div>
    </div>
  </section>

    <div class="container">
        <!-- START ARTICLE FEED -->
        <section class="articles">
            <div class="column is-8 is-offset-2">
                <!-- END ARTICLE -->
                <!-- START ARTICLE -->
                   <div class="card article">
                    <div class="card-content">
                         <div class="media">
                            <div class="media-center">
                                <img src="/images/avatars/footballers-cristiano-ronaldo-256.png" class="author-image" alt="Placeholder image">
                            </div>
                            <div class="media-content has-text-centered">
                                <p class="title article-title">{{ player.fullname }}</p>
                                
                                <p class="subtitle is-6 article-subtitle">
                                    <a href="#">@gareth</a> on February 17, 2018
                                </p>
                                <p> 

                                      <p>{{ player.team }}</p>

                                  <nuxt-content :document="player" />


                                </div>
                        </div>
                        
                    </div>
                   </div>
                <!-- END PROMO BLOCK -->
              </div>

              <div class="column is-8 is-offset-2">
                 <div>
                    <div class="media">
                      <img src="/images/players/cr.png" alt="Placeholder image" />
                    </div>
                </div>
              </div>
        </section>
    </div>
</div>
</template>

<script>

  export default {
    async asyncData({ $content, params }) {
      const player = await $content('players', params.slug).fetch()

      return { player }
    }
  }
</script>




