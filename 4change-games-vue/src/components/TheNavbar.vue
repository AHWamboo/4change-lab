<template>
  <nav class="navbar is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item brand-badge" to="/">
          4change<span>Lab</span>
        </router-link>
        <a
          class="navbar-burger"
          :class="{ 'is-active': open }"
          role="button"
          aria-label="menu"
          @click="open = !open"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': open }">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/warsztaty" @click="open = false">Warsztaty z grami</router-link>
          <router-link class="navbar-item" to="/szkolenia" @click="open = false">Szkolenia</router-link>
          <router-link class="navbar-item" to="/o-nas" @click="open = false">O nas</router-link>
          <router-link class="navbar-item" to="/wiedza" @click="open = false">Wiedza / Inspiracje</router-link>
          <router-link class="navbar-item quiz-link" to="/dobierz-gre" @click="open = false">Dobierz grę</router-link>
          <router-link class="navbar-item" to="/kontakt" @click="open = false">Kontakt</router-link>

          <div class="navbar-item">
            <div class="lang-toggle">
              <button :class="{ 'is-active': lang === 'PL' }" @click="lang = 'PL'">PL</button>
              <button :class="{ 'is-active': lang === 'EN' }" @click="lang = 'EN'">EN</button>
            </div>
          </div>
          <div class="navbar-item">
            <router-link class="button is-primary is-rounded" to="/warsztaty" @click="open = false">
              Kup grę
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
const lang = ref('PL')
</script>

<style scoped lang="scss">
.navbar {
  background: rgba(246, 242, 234, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e7e0d3;
}
.brand-badge {
  background: #12b76a;
  color: #fff !important;
  border-radius: 12px;
  font-family: 'Zilla Slab', serif;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  span { font-weight: 500; font-size: 0.9rem; opacity: 0.85; margin-left: 0.2rem; }
  &:hover { background: #0e9257; color: #fff !important; }
}
.navbar-item { font-weight: 600; font-size: 0.95rem; }
.navbar-item:not(.brand-badge):not(.button).router-link-exact-active {
  color: #0e9257;
  font-weight: 700;
}
.navbar-item:hover:not(.brand-badge) { background: transparent; color: #12b76a; }
.quiz-link { color: #0e9257 !important; }
.lang-toggle {
  display: flex;
  border: 1px solid #d8d0c1;
  border-radius: 999px;
  overflow: hidden;
  button {
    border: none; cursor: pointer; background: transparent;
    padding: 0.35rem 0.75rem; font-weight: 700; font-size: 0.85rem;
    color: #9a927f; font-family: inherit;
    &.is-active { background: #2b2740; color: #fff; }
  }
}
</style>
