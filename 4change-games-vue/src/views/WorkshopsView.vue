<template>
  <section class="section">
    <div class="container">
      <span class="eyebrow">Warsztaty z grami</span>
      <h1 class="title title-serif" style="font-size: clamp(2.5rem, 5vw, 4rem)">Warsztaty prowadzone z użyciem gier</h1>
      <p class="subtitle is-4 text-muted mt-3" style="max-width: 720px">
        Rdzeń naszej oferty: warsztaty, w których zespół uczy się grając. Wybierz grę, a scenariusz
        dopasujemy do celu rozwojowego — stacjonarnie, w naszej sali lub online.
      </p>
    </div>
  </section>

  <section class="pb-6">
    <div class="container">
      <div class="columns is-variable is-5">
        <div class="column is-4" v-for="g in games" :key="g.slug">
          <div class="card-soft is-flex is-flex-direction-column" style="overflow: hidden">
            <div class="thumb" :class="g.thumb">[ KEY ART · {{ g.en }} ]</div>
            <div class="p-5 is-flex is-flex-direction-column" style="flex: 1">
              <span class="eyebrow">{{ g.tag }}</span>
              <h3 class="title is-4 title-serif mb-2">{{ g.name }}</h3>
              <p class="text-muted mb-4" style="flex: 1">{{ g.focus }}</p>
              <div class="formats mb-4">
                <span class="format-pill" v-for="f in g.formats" :key="f">{{ f }}</span>
              </div>
              <div class="is-flex is-justify-content-space-between is-align-items-center">
                <strong>{{ g.price }}</strong>
                <router-link to="/kontakt" class="button is-primary is-rounded is-small">Zapytaj</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <span class="eyebrow">Typy gier</span>
      <h2 class="title title-serif mb-5" style="font-size: clamp(1.75rem, 3.5vw, 2.75rem)">Dobieramy format gry do celu warsztatu</h2>
      <div class="columns is-multiline is-variable is-4">
        <div class="column is-4" v-for="t in gameTypes" :key="t.name">
          <div class="box-soft type-card">
            <span class="type-icon">{{ t.icon }}</span>
            <div>
              <h3 class="title is-6 title-serif mb-1">{{ t.name }}</h3>
              <p class="text-muted is-size-7 mb-0">{{ t.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-muted mt-4 mb-3" style="font-weight: 600">Często poszukiwane dodatki:</p>
      <div class="columns is-variable is-4">
        <div class="column is-6" v-for="t in gameTypeTags" :key="t.name">
          <div class="type-card type-card--tag">
            <span class="type-icon">{{ t.icon }}</span>
            <div>
              <h3 class="title is-6 title-serif mb-1">{{ t.name }}</h3>
              <p class="text-muted is-size-7 mb-0">{{ t.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-shade">
    <div class="container has-text-centered">
      <h2 class="title title-serif is-3">Nie wiesz, którą grę wybrać?</h2>
      <p class="subtitle is-5 text-muted">Doradzimy grę i formę warsztatu pod Twój zespół.</p>
      <router-link to="/kontakt" class="button is-primary is-rounded is-medium">Zapytaj o warsztat</router-link>
    </div>
  </section>
</template>

<script setup>
import { games, gameTypes, gameTypeTags } from '../data/content.js'
</script>

<style scoped lang="scss">
.formats { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.format-pill {
  background: #f6f8f5; border: 1px solid #dbe4dd; border-radius: 999px;
  padding: 0.3rem 0.75rem; font-size: 0.78rem; font-weight: 600; color: #5c6470;
}
.type-card {
  display: flex; gap: 0.85rem; align-items: flex-start;
  padding: 1.25rem; height: 100%;
  &--tag { border: 1px dashed #9aa4b0; border-radius: 24px; background: linear-gradient(150deg, #f6f8f5, #eaf1ec); }
}
.type-icon { font-size: 1.6rem; line-height: 1; flex: none; }
</style>
