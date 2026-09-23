// Central content source — swap copy / prices / assets here.
export const games = [
  {
    slug: 'kryjowka',
    name: 'Kryjówka',
    en: 'Hide & Seek',
    tag: 'Współpraca · Strategia',
    thumb: 'thumb--a',
    focus: 'Zespół chowa i szuka — trening szybkich decyzji, zaufania i podziału ról w terenie.',
    long: 'Terenowa gra szkoleniowa, w której zespół na zmianę chowa się i szuka, realizując ukryte cele. Uczestnicy ćwiczą podział ról, komunikację pod presją czasu i budowanie zaufania — bez sztucznych scenariuszy.',
    goals: ['Budowanie zespołu', 'Zaufanie', 'Szybkie decyzje'],
    formats: ['Stacjonarnie u klienta', 'Warsztat w naszej sali', 'Box do samodzielnej gry'],
    players: '8–24 osób',
    duration: '2–3 godz.',
    price: 'od 1 200 zł'
  },
  {
    slug: 'talia-decyzji',
    name: 'Talia Decyzji',
    en: 'Card Game',
    tag: 'Komunikacja · Negocjacje',
    thumb: 'thumb--b',
    focus: 'Gra w karty o zasoby i informacje — negocjacje, wywieranie wpływu i praca pod presją.',
    long: 'Karciana gra negocjacyjna: gracze wymieniają zasoby i informacje, budują sojusze i podejmują decyzje przy niepełnej wiedzy. Idealna do treningu komunikacji, negocjacji i sprzedaży.',
    goals: ['Komunikacja', 'Negocjacje', 'Wpływ'],
    formats: ['Warsztat w naszej sali', 'Online / zdalnie', 'Talia do samodzielnej gry'],
    players: '4–16 osób',
    duration: '1,5–2 godz.',
    price: 'od 890 zł'
  },
  {
    slug: 'berek',
    name: 'Berek',
    en: 'Tag',
    tag: 'Przywództwo · Sprzedaż',
    thumb: 'thumb--c',
    focus: 'Dynamiczna gra w ganianego — role liderskie, energia grupy i adaptacja do zmian.',
    long: 'Energetyczna gra w ganianego z regułami zmieniającymi się w trakcie rozgrywki. Uczy przywództwa sytuacyjnego, adaptacji do zmian i utrzymania energii zespołu — świetna jako otwarcie lub domknięcie warsztatu.',
    goals: ['Przywództwo', 'Adaptacja', 'Energia zespołu'],
    formats: ['Stacjonarnie u klienta', 'Warsztat w naszej sali'],
    players: '10–30 osób',
    duration: '1–2 godz.',
    price: 'od 990 zł'
  }
]

export const steps = [
  { no: '01', icon: '🎯', title: 'Poznajemy Twoje wyzwanie', desc: 'Nie zaczynamy od wyboru gry. Zaczynamy od zrozumienia tego, co ma zmienić się w Twoim zespole.' },
  { no: '02', icon: '🧩', title: 'Projektujemy doświadczenie', desc: 'Dobieramy grę, scenariusz i sposób prowadzenia do celu, uczestników oraz charakteru wydarzenia.' },
  { no: '03', icon: '🎮', title: 'Gramy i uczymy się', desc: 'Gra staje się narzędziem doświadczania, współpracy i wyciągania wniosków, które od razu można przenieść do codziennej pracy.' },
  { no: '04', icon: '🚀', title: 'Przenosimy zmianę do rzeczywistości', desc: 'Każdy projekt kończymy rekomendacjami i pomysłami na wdrożenie. Bo najważniejsze nie jest to, co wydarzyło się podczas gry, ale to, co wydarzy się po niej.' }
]

export const industries = [  'Techniczna', 'Dystrybucja', 'Energetyka',
  'Finanse i nieruchomości', 'IT', 'Startupy i e-commerce'
]

export const logos = ['LOGO 01', 'LOGO 02', 'LOGO 03', 'LOGO 04', 'LOGO 05', 'LOGO 06']

export const testimonials = [
  { quote: 'Zespół gadał o tej grze jeszcze przez tydzień — i faktycznie zmieniło się to, jak podejmują decyzje.', name: 'Imię Nazwisko', role: 'HR Business Partner' },
  { quote: 'Wreszcie warsztat, na który ludzie chcieli przyjść. Konkretny cel, świetna energia.', name: 'Imię Nazwisko', role: 'Team Lead, IT' },
  { quote: 'Dopasowali scenariusz pod nasze realia sprzedażowe. Zero gotowców z półki.', name: 'Imię Nazwisko', role: 'Dyrektor Sprzedaży' }
]

export const team = [
  { name: 'Imię Nazwisko', role: 'Współwłaścicielka · trenerka', kind: 'owner' },
  { name: 'Imię Nazwisko', role: 'Współwłaścicielka · trenerka', kind: 'owner' },
  { name: 'Imię Nazwisko', role: 'Trener współpracujący', kind: 'trainer' },
  { name: 'Imię Nazwisko', role: 'Trener współpracujący', kind: 'trainer' }
]

export const trainingTopics = [
  { title: 'Komunikacja i współpraca', desc: 'Metoda warsztatowa: informacja zwrotna, słuchanie, praca w zespole.' },
  { title: 'Negocjacje i wywieranie wpływu', desc: 'Ćwiczenia sytuacyjne i symulacje rozmów handlowych.' },
  { title: 'Przywództwo i zarządzanie zespołem', desc: 'Przywództwo sytuacyjne, delegowanie, prowadzenie zmiany.' },
  { title: 'Sprzedaż i obsługa klienta', desc: 'Warsztaty sprzedażowe dopasowane do realiów branży.' },
  { title: 'Rozwój osobisty i postawy', desc: 'Nastawienie, odporność, praca z przekonaniami.' },
  { title: 'Strategia i podejmowanie decyzji', desc: 'Decyzje przy niepełnej informacji, priorytetyzacja.' }
]

export const faqs = [
  { q: 'Stacjonarnie, online czy box do samodzielnej gry?', a: 'Każdą grę prowadzimy stacjonarnie u klienta, w naszej sali lub online. Wybrane tytuły kupisz też jako gotowy box.' },
  { q: 'Jak dużą grupę można przeszkolić?', a: 'Od kilku osób do ok. 30 na jedną rozgrywkę — przy większych zespołach dzielimy grupy i prowadzimy równolegle.' },
  { q: 'Czy scenariusz jest dopasowywany do firmy?', a: 'Tak. Poznajemy cel rozwojowy i realia zespołu, a następnie szyjemy scenariusz pod te oczekiwania.' },
  { q: 'Co daje follow-up?', a: 'Sesja wdrożeniowa po warsztacie utrwala nowe postawy i przekłada je na codzienną pracę zespołu.' }
]

export const fitYes = [
  'Twój zespół zna się na teorii, ale brakuje przełożenia na praktykę',
  'Standardowe warsztaty i klasyczny team building już „nie chwytają"',
  'Chcesz, żeby ludzie faktycznie się spotkali i wspólnie działali',
  'Zależy Ci na trwałej zmianie postaw, nie na jednorazowej atrakcji'
]
export const fitNo = [
  'Szukasz wyłącznie kursu online do samodzielnego odklikania',
  'Zależy Ci tylko na integracyjnej imprezie bez celu rozwojowego',
  'Nie masz przestrzeni na spotkanie zespołu na żywo lub online'
]

export const gameTypes = [
  { icon: '🤝', name: 'Kooperacyjna', desc: 'Uczestnicy osiągają wspólny cel — wygrywa cały zespół.' },
  { icon: '⚔️', name: 'Rywalizacyjna', desc: 'Zespoły lub uczestnicy konkurują ze sobą.' },
  { icon: '⚖️', name: 'Kooperacyjno-rywalizacyjna', desc: 'Współpraca wewnątrz zespołów połączona z rywalizacją między zespołami.' },
  { icon: '📊', name: 'Symulacja biznesowa', desc: 'Odzwierciedla realne wyzwania organizacyjne i procesy biznesowe.' },
  { icon: '🧭', name: 'Gra strategiczna', desc: 'Wymaga planowania, analizy i podejmowania decyzji w dłuższej perspektywie.' },
  { icon: '🎯', name: 'Gra decyzyjna', desc: 'Koncentruje się na wyborach i konsekwencjach podejmowanych decyzji.' },
  { icon: '🎭', name: 'Gra fabularna', desc: 'Uczestnicy wcielają się w role i pracują na realistycznych scenariuszach.' },
  { icon: '🔐', name: 'Escape Game', desc: 'Zadania i zagadki prowadzące do wspólnego celu pod presją czasu.' },
  { icon: '🧱', name: 'LEGO® Serious Play®', desc: 'Metafora i modele z klocków LEGO® do pracy nad komunikacją, strategią i rozwojem zespołów.' },
  { icon: '💭', name: 'Gra refleksyjna', desc: 'Analiza doświadczeń, wymiana perspektyw i wyciąganie wniosków.' }
]

export const gameTypeTags = [
  { icon: '⚡', name: 'Energizer', desc: 'Krótka gra aktywizująca, otwierająca lub zamykająca warsztat.' },
  { icon: '🧩', name: 'Icebreaker', desc: 'Gra integracyjna pomagająca przełamać pierwsze lody i rozpocząć współpracę.' }
]

export const articles = [
  { tag: 'Współpraca', title: 'Dlaczego gra uczy szybciej niż slajdy', teaser: 'Co się dzieje w mózgu, gdy zespół gra, a nie słucha wykładu.' },
  { tag: 'Przywództwo', title: 'Lider w grze w ganianego', teaser: 'Czego berek uczy o przywództwie sytuacyjnym.' },
  { tag: 'Negocjacje', title: 'Karty na stół: trening negocjacji', teaser: 'Jak gra karciana odsłania style negocjacyjne zespołu.' },
  { tag: 'HR', title: 'Jak zmierzyć efekt warsztatu', teaser: 'Proste wskaźniki, które pokażą, że zmiana została w zespole.' }
]
