<template>
  <section class="section">
    <div class="container">
      <span class="eyebrow">Szkolenia</span>
      <h1 class="title title-serif" style="font-size: clamp(2.5rem, 5vw, 4rem)">Szkolenia i warsztaty tematyczne</h1>
      <p class="subtitle is-4 text-muted mt-3" style="max-width: 720px">
        Prowadzone online i offline, metodą warsztatową. Mniejszy nacisk na klasyczne szkolenia
        sprzedażowe (dalej w ofercie), większy — na rozwój zespołów i jednostek.
      </p>
    </div>
  </section>

  <section class="pb-6">
    <div class="container">
      <div class="columns is-multiline is-variable is-5">
        <div class="column is-4" v-for="t in trainingTopics" :key="t.title">
          <div class="card-soft p-5" style="height: 100%">
            <span class="num">{{ String(trainingTopics.indexOf(t) + 1).padStart(2, '0') }}</span>
            <h3 class="title is-5 title-serif mb-2 mt-2">{{ t.title }}</h3>
            <p class="text-muted mb-0">{{ t.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-shade">
    <div class="container">
      <div class="columns is-variable is-6">
        <div class="column is-6">
          <span class="eyebrow">Pakiet</span>
          <h2 class="title title-serif is-3">Szkolenie + follow-up</h2>
          <p class="subtitle is-5 text-muted">
            Łączymy szkolenie z sesją wdrożeniową, żeby nowe umiejętności i postawy zostały w zespole
            na dłużej — nie tylko na dzień warsztatu.
          </p>
        </div>
        <div class="column is-6">
          <span class="eyebrow">Usługi dodatkowe</span>
          <div class="columns is-multiline is-variable is-4 mt-1">
            <div class="column is-6" v-for="s in extras" :key="s">
              <div class="box-soft extra p-4"><span class="dot"></span>{{ s }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { trainingTopics } from '../data/content.js'
const extras = ['Audyty', 'Konsultacje', 'Mentoring i coaching', 'Projekty konsultingowo-szkoleniowe']
</script>

<style scoped lang="scss">
.num { font-family: 'Zilla Slab', serif; font-size: 1.5rem; color: #e5472b; }
.extra {
  display: flex; align-items: center; gap: 0.75rem; font-weight: 700;
  .dot { width: 10px; height: 10px; border-radius: 3px; background: #e5472b; flex: none; }
}
</style>
