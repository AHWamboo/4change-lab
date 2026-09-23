<template>
  <section class="section">
    <div class="container">
      <div class="columns is-variable is-8">
        <!-- FORM -->
        <div class="column is-7">
          <span class="eyebrow">Kontakt</span>
          <h1 class="title title-serif" style="font-size: clamp(2.25rem, 4.5vw, 3.5rem)">Zamów grę lub warsztat</h1>
          <p class="subtitle is-5 text-muted mt-3 mb-5" style="max-width: 560px">
            Napisz, czego potrzebuje Twój zespół — odezwiemy się z propozycją gry i formy warsztatu.
          </p>

          <form class="box-soft p-5" @submit.prevent="submitted = true">
            <div class="columns">
              <div class="column field">
                <label class="label">Imię *</label>
                <div class="control"><input class="input" type="text" required /></div>
              </div>
              <div class="column field">
                <label class="label">Nazwisko *</label>
                <div class="control"><input class="input" type="text" required /></div>
              </div>
            </div>
            <div class="columns">
              <div class="column field">
                <label class="label">E-mail *</label>
                <div class="control"><input class="input" type="email" required /></div>
              </div>
              <div class="column field">
                <label class="label">Firma</label>
                <div class="control"><input class="input" type="text" /></div>
              </div>
            </div>
            <div class="field">
              <label class="label">Interesująca gra</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option value="">Dowolna / doradźcie</option>
                    <option v-for="g in games" :key="g.slug" :value="g.slug">{{ g.name }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Wiadomość</label>
              <div class="control">
                <textarea class="textarea" rows="4" placeholder="Wielkość zespołu, cel warsztatu, termin…"></textarea>
              </div>
            </div>
            <div class="field mt-4">
              <button class="button is-primary is-rounded is-medium">Wyślij zapytanie</button>
            </div>
            <p v-if="submitted" class="text-muted mt-3">
              To szkielet — podłącz obsługę formularza (np. endpoint / usługa e-mail) na etapie wdrożenia.
            </p>
          </form>
        </div>

        <!-- INFO -->
        <div class="column is-5">
          <div class="box-soft p-5 mb-5">
            <h3 class="title is-5 title-serif mb-4">Dane kontaktowe</h3>
            <div class="info-links">
              <span><span class="info-label">E-mail</span>kontakt@4change.games</span>
              <span><span class="info-label">Telefon</span>+48 123 456 789</span>
              <span><span class="info-label">Adres</span>ul. Warsztatowa 4<br />00-001 Warszawa, Polska</span>
            </div>
          </div>
          <div class="placeholder-hatch" style="aspect-ratio: 4/3">[ MAPA / LOKALIZACJA ]</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { games } from '../data/content.js'
const submitted = ref(false)
</script>

<style scoped lang="scss">
.info-links {
  display: flex; flex-direction: column; gap: 1.25rem; font-weight: 600;
  span { display: flex; flex-direction: column; gap: 0.2rem; }
  .info-label { color: #9a927f; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; }
}
</style>
