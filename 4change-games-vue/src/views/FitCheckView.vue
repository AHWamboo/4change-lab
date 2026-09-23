<template>
  <section class="section">
    <div class="container">
      <span class="eyebrow">Sprawdź czy to dla Ciebie</span>
      <h1 class="title title-serif" style="font-size: clamp(2.5rem, 5vw, 4rem)">Czy gry szkoleniowe to dobry wybór dla Twojego zespołu?</h1>
      <p class="subtitle is-4 text-muted mt-3" style="max-width: 720px">
        Krótka ściąga — jeśli rozpoznajesz swój zespół po lewej stronie, prawdopodobnie warto porozmawiać.
      </p>
    </div>
  </section>

  <section class="pb-6">
    <div class="container">
      <div class="columns is-variable is-6">
        <div class="column is-6">
          <div class="box-soft p-5" style="height: 100%">
            <h3 class="title is-5 title-serif mb-4"><span class="mark yes">✓</span> To dla Ciebie, jeśli…</h3>
            <ul class="check-list">
              <li v-for="y in fitYes" :key="y"><span class="tick yes">✓</span>{{ y }}</li>
            </ul>
          </div>
        </div>
        <div class="column is-6">
          <div class="box-soft p-5" style="height: 100%">
            <h3 class="title is-5 title-serif mb-4"><span class="mark no">✕</span> Raczej nie, jeśli…</h3>
            <ul class="check-list">
              <li v-for="n in fitNo" :key="n"><span class="tick no">✕</span>{{ n }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-band p-6 has-text-centered">
        <h2 class="title title-serif" style="color: #fff; font-size: clamp(1.75rem, 3.5vw, 2.75rem)">
          Brzmi jak Twój zespół?
        </h2>
        <p class="is-size-5" style="opacity: .92">Umów bezpłatną konsultację — dobierzemy grę i formę warsztatu.</p>
        <router-link to="/kontakt" class="button is-white is-rounded is-medium mt-3">Umów konsultację</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { fitYes, fitNo } from '../data/content.js'
</script>

<style scoped lang="scss">
.check-list {
  display: flex; flex-direction: column; gap: 1rem;
  li { display: flex; gap: 0.75rem; font-size: 1.05rem; font-weight: 500; }
}
.tick { flex: none; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; color: #fff; }
.tick.yes, .mark.yes { background: #e5472b; }
.tick.no, .mark.no { background: #b3ab99; }
.mark { display: inline-flex; width: 30px; height: 30px; border-radius: 50%; align-items: center; justify-content: center; color: #fff; font-size: 0.9rem; margin-right: 0.4rem; vertical-align: middle; }
</style>
