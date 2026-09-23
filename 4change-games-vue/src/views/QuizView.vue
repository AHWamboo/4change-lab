<template>
  <section class="section">
    <div class="container" style="max-width: 820px">
      <div class="has-text-centered mb-5">
        <span class="tag-yellow">Krótka ankieta</span>
        <h1 class="title title-serif mt-4" style="font-size: clamp(2rem, 4.5vw, 3rem)">Szukasz gry dla swojego zespołu?</h1>
        <p class="subtitle is-5 text-muted mt-3">
          Odpowiedz na kilka krótkich pytań, a pokażemy Ci rozwiązania najlepiej dopasowane do Twojego wydarzenia.
        </p>
      </div>

      <div class="box-soft quiz p-6">
        <!-- RESULT -->
        <div v-if="isResult" class="has-text-centered">
          <div class="emoji">🎉</div>
          <h2 class="title title-serif is-3 mb-2">Mamy dla Ciebie kilka propozycji.</h2>
          <p class="subtitle is-5 text-muted">Zobacz gry dopasowane do celu, liczby uczestników i formatu wydarzenia.</p>
          <div class="buttons is-centered mb-5">
            <router-link to="/warsztaty" class="button is-primary is-rounded is-medium">Pokaż dopasowane gry</router-link>
            <router-link to="/kontakt" class="button is-rounded is-medium">Umów bezpłatną konsultację</router-link>
          </div>
          <div class="note">
            <span>💬</span>
            <p>Nie masz pewności, która gra najlepiej sprawdzi się w Twoim zespole? Podczas bezpłatnej konsultacji dobierzemy rozwiązanie do celu wydarzenia, doświadczenia uczestników i oczekiwanego efektu.</p>
          </div>
          <button class="link-btn mt-4" @click="restart">↺ Wypełnij ankietę ponownie</button>
        </div>

        <!-- QUESTION -->
        <div v-else>
          <div class="is-flex is-justify-content-space-between mb-2">
            <span class="eyebrow mb-0">Pytanie {{ step + 1 }} / {{ total }}</span>
            <span class="text-muted is-size-7" style="font-weight:600">{{ q.multi ? 'Zaznacz maks. ' + q.max : 'Wybierz jedną' }}</span>
          </div>
          <div class="bar"><div class="bar-fill" :style="{ width: (step / total * 100) + '%' }"></div></div>

          <h2 class="title title-serif is-4 mb-4">{{ q.title }}</h2>

          <div class="opts">
            <button
              v-for="opt in q.opts"
              :key="opt"
              class="opt"
              :class="{ 'is-sel': isSelected(opt), 'is-dis': isDisabled(opt) }"
              @click="toggle(opt)"
            >
              <span class="mark" :class="q.multi ? 'sq' : 'ci'">{{ isSelected(opt) ? '✓' : '' }}</span>
              <span>{{ opt }}</span>
            </button>
          </div>

          <div class="is-flex is-justify-content-space-between mt-5">
            <button class="button is-rounded" :disabled="step === 0" @click="step--">← Wstecz</button>
            <button class="button is-dark is-rounded" :disabled="!canProceed" @click="next">
              {{ step === total - 1 ? 'Zobacz wynik →' : 'Dalej →' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const questions = [
  { key: 'cel', multi: true, max: 3, title: 'Co chcesz osiągnąć?', opts: ['poprawić komunikację','wzmocnić współpracę','zintegrować zespół','rozwinąć liderów','przygotować zespół do zmiany','poprawić organizację pracy','wesprzeć sprzedaż lub obsługę klienta','przeprowadzić warsztat strategiczny','rozwiązać konkretny problem w zespole','jeszcze nie wiem – potrzebuję rekomendacji'] },
  { key: 'dlaKogo', title: 'Dla kogo szukasz gry?', opts: ['dla liderów lub menedżerów','dla zarządu','dla handlowców','dla HR','dla zespołu projektowego','dla nowego zespołu','dla zespołu produkcyjnego','dla różnych działów organizacji','dla całej firmy'] },
  { key: 'ilu', title: 'Ilu będzie uczestników?', opts: ['do 20 osób','20–40 osób','40–100 osób','ponad 100 osób'] },
  { key: 'formula', title: 'W jakiej formule ma odbyć się wydarzenie?', opts: ['stacjonarnie','online','nie mam jeszcze ustalonej formuły'] },
  { key: 'czas', title: 'Ile czasu możesz przeznaczyć?', opts: ['do 2 godzin','2–4 godziny','4–8 godzin','cały dzień'] },
  { key: 'doswiadczenie', title: 'Jakiego doświadczenia szukasz?', opts: ['dynamicznej gry z dużą ilością energii','współpracy wokół wspólnego celu','rywalizacji między zespołami','symulacji biznesowej','gry strategicznej lub decyzyjnej','escape game','spokojnej pracy i refleksji','nie wiem – dobierzcie rozwiązanie do celu'] },
  { key: 'sposob', title: 'Jak chcesz skorzystać z gry?', opts: ['chcę kupić grę i poprowadzić ją samodzielnie','chcę kupić grę wraz z licencją i materiałami','chcę zamówić warsztat prowadzony przez trenera','rozważam obie możliwości'] },
  { key: 'jezyk', title: 'W jakim języku?', opts: ['polskim','angielskim','gra powinna być niezależna językowo','potrzebuję instrukcji w języku portugalskim'] }
]

const total = questions.length
const step = ref(0)
const answers = reactive({})

const q = computed(() => questions[step.value])
const isResult = computed(() => step.value >= total)

function isSelected(opt) {
  const a = answers[q.value.key]
  return q.value.multi ? Array.isArray(a) && a.includes(opt) : a === opt
}
function isDisabled(opt) {
  if (!q.value.multi || isSelected(opt)) return false
  return (answers[q.value.key] || []).length >= q.value.max
}
function toggle(opt) {
  const cur = q.value
  if (cur.multi) {
    if (isDisabled(opt)) return
    const arr = Array.isArray(answers[cur.key]) ? answers[cur.key].slice() : []
    const i = arr.indexOf(opt)
    if (i >= 0) arr.splice(i, 1)
    else arr.push(opt)
    answers[cur.key] = arr
  } else {
    answers[cur.key] = opt
    if (step.value < total) step.value++
  }
}
const canProceed = computed(() => {
  const a = answers[q.value?.key]
  return q.value?.multi ? Array.isArray(a) && a.length > 0 : !!a
})
function next() { if (canProceed.value) step.value++ }
function restart() { step.value = 0; Object.keys(answers).forEach(k => delete answers[k]) }
</script>

<style scoped lang="scss">
.quiz { box-shadow: 0 20px 40px -30px rgba(20,24,31,.4); }
.emoji { font-size: 2.75rem; }
.bar { height: 6px; background: #eaf1ec; border-radius: 999px; overflow: hidden; margin-bottom: 1.4rem; }
.bar-fill { height: 100%; background: linear-gradient(90deg, #12b76a, #2b7cff); border-radius: 999px; transition: width .2s ease; }
.opts { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.6rem; }
.opt {
  display: flex; align-items: center; gap: 0.75rem; text-align: left;
  padding: 0.85rem 1rem; border: 2px solid #e6ece7; border-radius: 14px;
  background: #fff; font-family: inherit; font-size: 0.95rem; font-weight: 600;
  cursor: pointer; color: #14181f; transition: all .12s ease;
  &:hover { border-color: #c7d0c9; }
  &.is-sel { border-color: #12b76a; color: #0e9257; }
  &.is-dis { opacity: .45; cursor: not-allowed; }
}
.mark {
  width: 20px; height: 20px; flex: none; border: 2px solid #c7d0c9;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.7rem; font-weight: 700;
  &.sq { border-radius: 6px; }
  &.ci { border-radius: 50%; }
}
.opt.is-sel .mark { background: #12b76a; border-color: #12b76a; }
.note {
  display: flex; gap: 0.9rem; align-items: flex-start; text-align: left;
  background: #eaf1ec; border-radius: 18px; padding: 1.4rem 1.5rem;
  span { font-size: 1.5rem; flex: none; }
  p { color: #3a424e; font-size: 0.95rem; line-height: 1.55; margin: 0; }
}
.link-btn { background: none; border: none; color: #5c6470; font-weight: 600; font-size: 0.85rem; cursor: pointer; text-decoration: underline; font-family: inherit; }
</style>
