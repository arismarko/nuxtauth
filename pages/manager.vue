<template>
<div>
  <section class="hero is-info is-medium is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
         Manager
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
                             <img src="/images/avatars/mourinho.jpeg" class="author-image" alt="Placeholder image">
                  </div>
                            <div class="media-content has-text-centered">
                                <p class="title article-title">JM</p>
                                <h2>José Mourinho</h2>
                                <p class="subtitle is-6 article-subtitle">
                                    <a href="#">@daria</a> on February 17, 2018
                                </p>
                                <p> José Mário dos Santos Mourinho Félix, GOIH (Portuguese pronunciation: [ʒuˈzɛ moˈɾiɲu]; born 26 January 1963), is a Portuguese professional football manager and former player who is the manager of Premier League club Tottenham Hotspur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END PROMO BLOCK -->
              </div>

              <div class="column is-8 is-offset-2">
                <h2><strong> Team Stats</strong></h2>

                <h3>Cristiano Ronaldo</h3>

                <img src="/images/players/cr.png" alt="Placeholder image" />

                 <h3>Zlatan Ibrahimovic</h3>

                <img src="/images/players/zi.png" alt="Placeholder image" />

                 <h3>Lionel Mesi</h3>

                <img src="/images/players/lm.png" alt="Placeholder image" />

              </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
  middleware: "auth",
  meta: {
    auth: { authority: 1 }
  },
};
</script>

<style>
    h3 {
        padding-top: 10px;
        padding-bottom: 10px;
    }

</style>
