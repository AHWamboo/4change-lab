<template>
  <!-- HERO -->
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered is-variable is-8">
        <div class="column is-6">
          <span class="eyebrow">O nas</span>
          <h1 class="title title-serif" style="font-size: clamp(2.5rem, 5vw, 4rem)">
            Zwinni. Szyjemy grę pod Twój zespół.
          </h1>
          <p class="subtitle is-4 text-muted mt-3">
            Nie sprzedajemy gotowców z półki. Poznajemy cel rozwojowy, dobieramy grę i dopasowujemy
            scenariusz — tak, żeby warsztat zmienił coś w codziennej pracy.
          </p>
        </div>
        <div class="column is-6">
          <div class="placeholder-hatch" style="aspect-ratio: 4/3">[ ZDJĘCIE ZESPOŁU 4change ]</div>
        </div>
      </div>
    </div>
  </section>

  <!-- WARTOSCI -->
  <section class="section bg-ink">
    <div class="container">
      <span class="eyebrow is-amber">Jak pracujemy</span>
      <h2 class="title title-serif mb-6" style="font-size: clamp(2rem, 4vw, 3rem)">Trzy słowa, które nas opisują</h2>
      <div class="columns is-variable is-5">
        <div class="column is-4" v-for="v in values" :key="v.title">
          <div class="value-card">
            <h3 class="title is-4 title-serif" style="color: #f6a623">{{ v.title }}</h3>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TRENERZY -->
  <section class="section">
    <div class="container">
      <span class="eyebrow">Zespół</span>
      <h2 class="title title-serif mb-2" style="font-size: clamp(2rem, 4vw, 3rem)">Ludzie stojący za grami</h2>
      <p class="subtitle is-5 text-muted mb-6" style="max-width: 640px">
        Ten sam zespół co w 4change — współwłaścicielki oraz trenerzy współpracujący, którzy prowadzą
        warsztaty u klientów.
      </p>
      <div class="columns is-multiline is-variable is-5">
        <div class="column is-3" v-for="p in team" :key="p.name + p.role">
          <div class="card-soft p-5 has-text-centered">
            <div class="avatar-lg placeholder-hatch mb-4">[ FOTO ]</div>
            <h3 class="title is-5 title-serif mb-1">{{ p.name }}</h3>
            <p class="text-muted is-size-7 mb-3">{{ p.role }}</p>
            <span class="badge" :class="p.kind === 'owner' ? 'badge--owner' : 'badge--trainer'">
              {{ p.kind === 'owner' ? 'Współwłaścicielka' : 'Trener współpracujący' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container">
      <div class="cta-band p-6 has-text-centered">
        <h2 class="title title-serif" style="color: #fff; font-size: clamp(1.75rem, 3.5vw, 2.75rem)">
          Porozmawiajmy o Twoim zespole
        </h2>
        <router-link to="/kontakt" class="button is-white is-rounded is-medium mt-3">Skontaktuj się</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { team } from '../data/content.js'
const values = [
  { title: 'Zwinni', desc: 'Szybko reagujemy, testujemy scenariusze i dopasowujemy się do realiów organizacji.' },
  { title: 'Szyte na miarę', desc: 'Usługę szyjemy pod oczekiwania klienta — nie odwrotnie. Zero gotowców z półki.' },
  { title: 'Inna alternatywa', desc: 'Ciekawe uzupełnienie standardowych warsztatów i alternatywa dla klasycznego team buildingu.' }
]
</script>

<style scoped lang="scss">
.value-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px; padding: 2rem 1.75rem; height: 100%;
  p { color: rgba(246, 242, 234, 0.7); }
}
.avatar-lg { aspect-ratio: 1/1; border-radius: 18px; font-size: 0.75rem; }
.badge {
  display: inline-block; border-radius: 999px; padding: 0.35rem 0.85rem;
  font-size: 0.75rem; font-weight: 700;
  &--owner { background: #f2e14c; color: #2b2740; }
  &--trainer { background: #f6f2ea; border: 1px solid #e2dacb; color: #6f6a7d; }
}
</style>
