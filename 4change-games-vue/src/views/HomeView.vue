<template>
  <!-- HERO -->
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered is-variable is-6">
        <div class="column is-6">
          <span class="tag-yellow">Gry szkoleniowe dla zespołów</span>
          <h1 class="title title-serif mt-5" style="font-size: clamp(2.75rem, 5vw, 4.75rem)">
            Ucz się przez grę. Rozwijaj zespół naprawdę.
          </h1>
          <p class="subtitle is-4 text-muted mt-4">
            Gry warsztatowe, w których ludzie muszą się spotkać, zagrać i wspólnie rozwiązać
            problem. Stacjonarnie, online albo do samodzielnego kupienia.
          </p>
          <div class="buttons mt-5">
            <router-link to="/warsztaty" class="button is-primary is-rounded is-large">Kup grę</router-link>
            <a href="#jak" class="button is-rounded is-large">Jak to działa</a>
          </div>
        </div>
        <div class="column is-6">
          <div class="hero-visual">
            <span>[ HERO / KEY VISUAL ]<br />render 3D lub zdjęcie grających zespołów</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="pb-6">
    <div class="container">
      <div class="columns">
        <div class="column" v-for="s in stats" :key="s.label">
          <div class="box-soft p-5">
            <div class="stat-value">{{ s.value }}</div>
            <p class="text-muted mt-2 mb-0">{{ s.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ANKIETA CTA -->
  <section class="pb-6">
    <div class="container">
      <router-link to="/dobierz-gre" class="quiz-cta">
        <div class="quiz-cta__left">
          <span class="quiz-cta__icon">🧭</span>
          <div>
            <div class="quiz-cta__title">Nie wiesz, którą grę wybrać?</div>
            <p class="quiz-cta__desc">Wypełnij krótką ankietę, a dobierzemy grę do celu, zespołu i formatu wydarzenia.</p>
          </div>
        </div>
        <span class="button is-primary is-rounded is-medium">Dobierz grę →</span>
      </router-link>
    </div>
  </section>

  <!-- KATALOG GIER -->
  <section class="section" id="gry">
    <div class="container">
      <div class="level is-align-items-flex-end mb-5">
        <div class="level-left">
          <div>
            <span class="eyebrow">Nasze gry</span>
            <h2 class="title title-serif" style="font-size: clamp(2rem, 4vw, 3.25rem)">Wybierz grę dla zespołu</h2>
          </div>
        </div>
        <div class="level-right">
          <router-link to="/warsztaty" class="button is-rounded">Zobacz wszystkie →</router-link>
        </div>
      </div>

      <div class="columns is-variable is-5">
        <div class="column is-4" v-for="g in games" :key="g.slug">
          <router-link :to="'/warsztaty'" class="card-soft is-flex is-flex-direction-column" style="overflow: hidden">
            <div class="thumb" :class="g.thumb">[ KEY ART · {{ g.en }} ]</div>
            <div class="p-5 is-flex is-flex-direction-column" style="flex: 1">
              <span class="eyebrow">{{ g.tag }}</span>
              <h3 class="title is-4 title-serif mb-2">{{ g.name }}</h3>
              <p class="text-muted mb-5" style="flex: 1">{{ g.focus }}</p>
              <div class="is-flex is-justify-content-space-between is-align-items-center">
                <strong>{{ g.price }}</strong>
                <span class="tag-yellow">Kup grę</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- JAK TO DZIALA -->
  <section class="section bg-ink" id="jak">
    <div class="container">
      <span class="eyebrow is-amber">Jak to działa</span>
      <h2 class="title title-serif mb-6" style="font-size: clamp(2rem, 4vw, 3.25rem)">
        Od celu rozwojowego do trwałej zmiany
      </h2>
      <div class="columns is-variable is-5">
        <div class="column is-3" v-for="st in steps" :key="st.no">
          <div class="step-card">
            <div class="step-no">{{ st.no }}</div>
            <h3 class="title is-5 title-serif">{{ st.title }}</h3>
            <p>{{ st.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DLA KOGO / BRANZE -->
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered is-variable is-8">
        <div class="column is-5">
          <span class="eyebrow">Dla kogo</span>
          <h2 class="title title-serif" style="font-size: clamp(1.75rem, 3.5vw, 2.75rem)">
            Zespoły, które chcą czegoś więcej niż bieganie po drzewach
          </h2>
          <p class="subtitle is-5 text-muted mt-4">
            Pracujemy z działami HR i liderami zespołów w firmach MŚP i korporacjach. Ciekawa
            alternatywa i uzupełnienie standardowych warsztatów oraz team buildingu.
          </p>
        </div>
        <div class="column is-7">
          <div class="columns is-multiline is-variable is-4">
            <div class="column is-6" v-for="ind in industries" :key="ind">
              <div class="box-soft industry p-4">
                <span class="dot"></span>{{ ind }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LOGO KLIENTOW -->
  <section class="pb-6">
    <div class="container">
      <p class="has-text-centered text-muted is-uppercase mb-5" style="letter-spacing: .1em; font-weight: 600; font-size: .8rem">
        Zaufali nam
      </p>
      <div class="columns is-multiline is-variable is-4">
        <div class="column is-2" v-for="l in logos" :key="l">
          <div class="placeholder-hatch logo-tile">[ {{ l }} ]</div>
        </div>
      </div>
    </div>
  </section>

  <!-- OPINIE -->
  <section class="section bg-shade">
    <div class="container">
      <span class="eyebrow">Opinie klientów</span>
      <h2 class="title title-serif mb-6" style="font-size: clamp(1.75rem, 3.5vw, 2.75rem)">Co mówią zespoły po grze</h2>
      <div class="columns is-variable is-5">
        <div class="column is-4" v-for="t in testimonials" :key="t.quote">
          <div class="box-soft p-5 is-flex is-flex-direction-column" style="height: 100%">
            <p class="title is-5 title-serif" style="font-weight: 600">„{{ t.quote }}"</p>
            <div class="is-flex is-align-items-center mt-auto pt-4" style="gap: .9rem">
              <span class="avatar"></span>
              <div>
                <strong>{{ t.name }}</strong>
                <p class="text-muted is-size-7 mb-0">{{ t.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- O NAS TEASER -->
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered is-variable is-8">
        <div class="column is-6">
          <div class="placeholder-hatch" style="aspect-ratio: 4/3">
            [ ZDJĘCIE ZESPOŁU 4change / trenerzy przy pracy ]
          </div>
        </div>
        <div class="column is-6">
          <span class="eyebrow">O nas</span>
          <h2 class="title title-serif" style="font-size: clamp(1.75rem, 3.5vw, 2.75rem)">Projektujemy grę pod Twój cel</h2>
          <p class="subtitle is-5 text-muted mt-4">
            Zwinny zespół, który szyje usługę pod oczekiwania klienta. Prezentujemy
            współwłaścicielki i trenerów współpracujących — poznaj ludzi stojących za grami.
          </p>
          <router-link to="/o-nas" class="button is-dark is-rounded is-medium mt-3">Poznaj zespół</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container">
      <div class="cta-band p-6">
        <div class="columns is-vcentered">
          <div class="column">
            <h2 class="title title-serif" style="color: #fff; font-size: clamp(1.75rem, 3.5vw, 3rem)">
              Gotowy zagrać z zespołem?
            </h2>
            <p class="is-size-5" style="opacity: .92">
              Kup grę online albo wyślij zapytanie o warsztat dopasowany do Twojego zespołu.
            </p>
          </div>
          <div class="column is-narrow">
            <div class="buttons is-flex-direction-column">
              <router-link to="/warsztaty" class="button is-white is-rounded is-medium">Kup grę</router-link>
              <router-link to="/kontakt" class="button is-rounded is-medium is-outlined-light">Zapytaj o warsztat</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { games, steps, industries, logos, testimonials } from '../data/content.js'

const stats = [
  { value: '120+', label: 'przeszkolonych zespołów' },
  { value: '3', label: 'gry gotowe do gry' },
  { value: '98%', label: 'poleca dalej' },
  { value: '3', label: 'formy: sala · online · box' }
]
</script>

<style scoped lang="scss">
.step-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  padding: 1.75rem 1.5rem;
  height: 100%;
  p { color: rgba(246, 242, 234, 0.7); }
}
.step-no { font-family: 'Zilla Slab', serif; font-size: 2.75rem; color: #f6a623; line-height: 1; margin-bottom: 0.75rem; }
.industry {
  display: flex; align-items: center; gap: 0.75rem;
  font-weight: 700; font-size: 1.05rem;
  .dot { width: 10px; height: 10px; border-radius: 3px; background: #e5472b; flex: none; }
}
.logo-tile { height: 76px; font-size: 0.72rem; color: #b3ab99; }
.avatar {
  width: 46px; height: 46px; border-radius: 50%; flex: none;
  background: repeating-linear-gradient(135deg, #e9e2d5 0 8px, #f0eadd 8px 16px);
}
.is-outlined-light {  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  &:hover { background: rgba(255, 255, 255, 0.28); color: #fff; }
}
.quiz-cta {
  display: flex; align-items: center; justify-content: space-between; gap: 1.5rem;
  background: #14181f; color: #f6f8f5; border-radius: 24px; padding: 2.1rem 2.5rem;
  text-decoration: none;
  &__left { display: flex; align-items: center; gap: 1.25rem; }
  &__icon { font-size: 2.5rem; line-height: 1; flex: none; }
  &__title { font-family: 'Zilla Slab', serif; font-size: clamp(1.35rem, 2.4vw, 1.9rem); margin-bottom: 0.25rem; }
  &__desc { color: rgba(246, 248, 245, 0.7); font-size: 1rem; margin: 0; }
  .button { white-space: nowrap; flex: none; }
}
</style>
