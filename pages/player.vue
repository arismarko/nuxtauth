<template>
<div>
 
  <section class="hero is-info is-medium is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
         Ronaldo
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
                                <p class="title article-title">Cristiano Ronaldo</p>
                                
                                <p class="subtitle is-6 article-subtitle">
                                    <a href="#">@gareth</a> on February 17, 2018
                                </p>
                                <p> 
                                  Cristiano Ronaldo. Ronaldo with Portugal at the 2018 FIFA World Cup. Personal information. Full name. Cristiano Ronaldo dos Santos Aveiro.   </p>
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
  middleware: "auth",
  meta: {
    auth: { authority: 2 }
  },
};
</script>

<style>
</style>
