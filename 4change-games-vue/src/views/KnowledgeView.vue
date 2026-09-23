<template>
  <section class="section">
    <div class="container">
      <span class="eyebrow">Wiedza / Inspiracje</span>
      <h1 class="title title-serif" style="font-size: clamp(2.5rem, 5vw, 4rem)">Wiedza i inspiracje</h1>
      <p class="subtitle is-4 text-muted mt-3" style="max-width: 720px">
        Artykuły, case studies i materiały do pobrania o uczeniu przez grę i rozwoju zespołów.
      </p>
    </div>
  </section>

  <section class="pb-6">
    <div class="container">
      <div class="columns is-multiline is-variable is-5">
        <div class="column is-6" v-for="a in articles" :key="a.title">
          <a href="#" class="card-soft article is-flex" style="overflow: hidden">
            <div class="thumb thumb--a article-thumb">[ OKŁADKA ]</div>
            <div class="p-5 is-flex is-flex-direction-column">
              <span class="eyebrow">{{ a.tag }}</span>
              <h3 class="title is-5 title-serif mb-2">{{ a.title }}</h3>
              <p class="text-muted mb-3" style="flex: 1">{{ a.teaser }}</p>
              <span class="read">Czytaj →</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-shade">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="title title-serif is-3 mb-2">Materiały do pobrania</h2>
          <p class="subtitle is-5 text-muted mb-0">Zapisz się, a wyślemy nowe inspiracje i checklisty raz w miesiącu.</p>
        </div>
        <div class="column is-narrow">
          <form class="field has-addons" @submit.prevent>
            <div class="control"><input class="input is-rounded is-medium" type="email" placeholder="Twój e-mail" /></div>
            <div class="control"><button class="button is-primary is-rounded is-medium">Zapisz się</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { articles } from '../data/content.js'
</script>

<style scoped lang="scss">
.article { text-decoration: none; color: inherit; height: 100%; }
.article-thumb { aspect-ratio: auto; width: 40%; flex: none; border-radius: 0; align-items: center; justify-content: center; }
.read { font-weight: 700; color: #e5472b; }
</style>
