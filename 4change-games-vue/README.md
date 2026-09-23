# 4change Games — szkielet strony (Vue 3 + Bulma + Sass)

Szkielet strony prezentującej gry szkoleniowe 4change (gry warsztatowe, w których zespół musi się spotkać i zagrać). Zbudowany tak, aby dało się go dalej rozwijać w Vue.

## Stack
- **Vue 3** (`<script setup>`, SFC) + **Vue Router 4** (`createWebHistory`)
- **Vite 5** — dev server i build
- **Bulma 0.9** jako baza CSS, importowana i nadpisywana przez **Sass**

## Uruchomienie
```bash
cd 4change-games-vue
npm install
npm run dev      # http://localhost:5173
npm run build    # produkcyjny build -> dist/
```

## Struktura
```
4change-games-vue/
├─ index.html
├─ vite.config.js
├─ package.json
└─ src/
   ├─ main.js                 # bootstrap Vue + router + main.scss
   ├─ App.vue                 # layout: navbar + <router-view> + footer
   ├─ router/index.js         # /, /gry, /o-nas, /kontakt
   ├─ styles/main.scss        # override zmiennych Bulmy + warstwa motywu
   ├─ data/content.js         # gry, kroki, branże, opinie, zespół (jedno źródło treści)
   ├─ components/
   │  ├─ TheNavbar.vue        # navbar Bulmy, aktywna zakładka, toggle PL/EN, "Kup grę"
   │  └─ TheFooter.vue        # 4 kolumny + newsletter
   └─ views/
      ├─ HomeView.vue         # hero, staty, katalog gier, jak to działa, dla kogo, logo, opinie, o nas, CTA
      ├─ WorkshopsView.vue    # /warsztaty — warsztaty z grami (katalog + zapytanie)
      ├─ TrainingsView.vue    # /szkolenia — tematy szkoleń, pakiet + follow-up, usługi dodatkowe
      ├─ HowItWorksView.vue   # /jak-to-dziala — proces + FAQ
      ├─ FitCheckView.vue     # /sprawdz — sprawdź czy to dla Ciebie
      ├─ AboutView.vue        # /o-nas — zespół (ten sam co 4change), wartości, trenerzy
      ├─ KnowledgeView.vue    # /wiedza — Wiedza / Inspiracje, artykuły, materiały
      └─ ContactView.vue      # /kontakt — formularz + dane + mapa
```

Menu (7 pozycji): Warsztaty z grami · Szkolenia · Jak to działa · Sprawdź czy to dla Ciebie · O nas · Wiedza / Inspiracje · Kontakt.

## Motyw (Sass)
Zmienne Bulmy nadpisywane są w `src/styles/main.scss` **przed** importem `bulma/bulma.sass`.
Paleta:
- coral `#e5472b` (`$primary`), amber `#f6a623`, żółty `#f2e14c`, granat/atrament `#2b2740`, krem `#f6f2ea`
- font tekstu: **Manrope**; nagłówki: **Zilla Slab** (`$title-family`)
- zaokrąglenia: `$radius-large: 24px`, pill `999px`

Klasy pomocnicze motywu: `.title-serif`, `.eyebrow`, `.card-soft`, `.box-soft`, `.thumb--a/b/c`, `.placeholder-hatch`, `.tag-yellow`, `.cta-band`, `.bg-ink`, `.bg-shade`.

## Placeholdery (do podmiany)
Wszystkie obrazy to celowe placeholdery — nie ma jeszcze finalnych materiałów:
- `.hero-visual` / `.thumb--*` — gradientowe bloki key-art gier
- `.placeholder-hatch` — kreskowane pola na zdjęcia / mapę / logo
Podmień je na realne render/zdjęcia i loga klientów.

## Co jest zaślepką (do podłączenia przy wdrożeniu)
- Formularz kontaktowy (`ContactView.vue`) — brak backendu, tylko flaga `submitted`
- Newsletter w stopce — bez integracji
- Toggle **PL/EN** — przełącza tylko stan; wersje językowe wymagają i18n (np. `vue-i18n`)
- Płatności „Kup grę" prowadzą do formularza kontaktu — docelowo koszyk / płatności online

## Treść
Cała treść gier i sekcji siedzi w `src/data/content.js` — edytuj tam nazwy, opisy, ceny i skład zespołu, a odświeży się na wszystkich stronach.
