<template>
  <footer class="footer">
    <div class="container">
      <div class="has-text-centered mb-6">
        <router-link class="brand-badge" to="/">4change<span>Lab</span></router-link>
        <p class="is-size-5 text-muted mt-4">Gry i warsztaty szkoleniowe, które naprawdę wciągają zespoły.</p>
      </div>

      <hr class="rule" />

      <div class="columns is-multiline mt-4">
        <div class="column is-3">
          <h4 class="title is-5 title-serif">Kontakt</h4>
          <div class="foot-links">
            <span>kontakt@4change.games</span>
            <span>+48 123 456 789</span>
            <span>ul. Warsztatowa 4<br />00-001 Warszawa, Polska</span>
          </div>
        </div>
        <div class="column is-3">
          <h4 class="title is-5 title-serif">Nawigacja</h4>
          <div class="foot-links">
            <router-link to="/warsztaty">Warsztaty z grami</router-link>
            <router-link to="/szkolenia">Szkolenia</router-link>
            <router-link to="/o-nas">O nas</router-link>
            <router-link to="/wiedza">Wiedza / Inspiracje</router-link>
            <router-link to="/dobierz-gre">Dobierz grę</router-link>
            <router-link to="/kontakt">Kontakt</router-link>
          </div>
        </div>
        <div class="column is-3">
          <h4 class="title is-5 title-serif">Social</h4>
          <div class="foot-links">
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div class="column is-3">
          <h4 class="title is-5 title-serif">Newsletter</h4>
          <p class="text-muted mb-4">Nowe gry i scenariusze warsztatów — raz w miesiącu.</p>
          <form class="field has-addons" @submit.prevent>
            <div class="control is-expanded">
              <input class="input is-rounded" type="email" placeholder="Twój e-mail" />
            </div>
            <div class="control">
              <button class="button is-dark is-rounded">Zapisz</button>
            </div>
          </form>
        </div>
      </div>

      <hr class="rule" />
      <div class="powered">
        <span>© 2026 4change Lab · powered by</span>
        <a href="https://4change.pl" target="_blank" rel="noopener">
          <img src="https://4change.pl/wp-content/uploads/2021/01/logo_nowe-2020_4CHANGE-1.png" alt="4change" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped lang="scss">
.footer { background: #f6f8f5; padding: 4.5rem 1.5rem 2.5rem; }
.brand-badge {
  display: inline-flex; align-items: baseline; gap: 0.3rem;
  background: #12b76a; color: #fff; border-radius: 14px;
  font-family: 'Zilla Slab', serif; font-weight: 700; font-size: 1.4rem;
  padding: 0.6rem 1.25rem;
  span { font-weight: 500; font-size: 1rem; opacity: 0.85; }
}
.rule { background: #dbe4dd; height: 1px; margin: 3rem 0; }
.foot-links {
  display: flex; flex-direction: column; gap: 0.75rem;
  color: #5c6470; font-size: 0.95rem; font-weight: 500;
  a { color: #14181f; }
  a:hover { color: #0e9257; }
}
.pw { color: #0e9257; font-weight: 700; }
.pw:hover { color: #14181f; }
.powered {
  display: flex; align-items: center; justify-content: center; gap: 0.6rem;
  color: #8a93a0; font-size: 0.85rem;
  img { height: 22px; display: block; filter: grayscale(1); opacity: 0.7; }
  a:hover img { filter: none; opacity: 1; }
}
</style>
