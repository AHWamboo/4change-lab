<template>
  <section class="section">
    <div class="container">
      <span class="eyebrow">Jak to działa</span>
      <h1 class="title title-serif" style="font-size: clamp(2.5rem, 5vw, 4rem)">Od celu rozwojowego do trwałej zmiany</h1>
      <p class="subtitle is-4 text-muted mt-3" style="max-width: 720px">
        Prosty proces w czterech krokach — od pierwszej rozmowy po utrwalenie efektu w zespole.
      </p>
    </div>
  </section>

  <section class="section bg-ink pt-0" style="padding-top: 0">
    <div class="container">
      <div class="columns is-variable is-5">
        <div class="column is-3" v-for="st in steps" :key="st.no">
          <div class="step-card">
            <div class="step-head">
              <span class="step-no">{{ st.no }}</span>
              <span class="step-icon">{{ st.icon }}</span>
            </div>
            <h3 class="title is-5 title-serif">{{ st.title }}</h3>
            <p>{{ st.desc }}</p>
          </div>
        </div>
      </div>
      <div class="columns is-variable is-5 mt-2">
        <div class="column is-6">
          <div class="step-card">
            <div class="step-icon mb-3">📦</div>
            <h3 class="title is-5 title-serif">Kup samą grę</h3>
            <p>…i poprowadź warsztat we własnym zakresie.</p>
          </div>
        </div>
        <div class="column is-6">
          <div class="offer-card">
            <div class="step-icon mb-3">🤝</div>
            <h3 class="title is-5 title-serif" style="color:#fff">Lub powierz to nam</h3>
            <p style="color:rgba(255,255,255,.9)">Przygotujemy i poprowadzimy angażujący warsztat online lub stacjonarnie, wykorzystując grę jako narzędzie rozwoju zespołu.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <span class="eyebrow">Najczęstsze pytania</span>
      <h2 class="title title-serif mb-5" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem)">Zanim zapytasz</h2>
      <div class="faq">
        <details class="box-soft faq-item" v-for="f in faqs" :key="f.q">
          <summary>{{ f.q }}</summary>
          <p class="text-muted mt-3 mb-0">{{ f.a }}</p>
        </details>
      </div>
    </div>
  </section>

  <section class="section pt-0">
    <div class="container has-text-centered">
      <router-link to="/kontakt" class="button is-primary is-rounded is-medium">Umów rozmowę</router-link>
    </div>
  </section>
</template>

<script setup>
import { steps, faqs } from '../data/content.js'
</script>

<style scoped lang="scss">
.step-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px; padding: 1.75rem 1.5rem; height: 100%;
  p { color: rgba(246, 242, 234, 0.7); }
}
.step-head { display: flex; align-items: baseline; gap: 0.6rem; margin-bottom: 0.75rem; }
.step-no { font-family: 'Zilla Slab', serif; font-size: 2.75rem; color: #f6a623; line-height: 1; }
.step-icon { font-size: 1.6rem; line-height: 1; }
.offer-card {
  background: linear-gradient(150deg, #12b76a, #2b7cff 90%);
  border-radius: 22px; padding: 1.75rem 1.5rem; height: 100%;
}
.faq { display: flex; flex-direction: column; gap: 1rem; max-width: 820px; }
.faq-item {
  padding: 1.25rem 1.5rem;
  summary { font-family: 'Zilla Slab', serif; font-size: 1.2rem; cursor: pointer; list-style: none; display: flex; justify-content: space-between; }
  summary::after { content: "+"; color: #e5472b; font-weight: 700; }
  &[open] summary::after { content: "–"; }
}
</style>
