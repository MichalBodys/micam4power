import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};



const initialState = {
    sentences:['work well', 'connect people', 'look great'],
    Cards: [
      {
        id: 1,
        svg:'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-arrow-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M8 12l4 4" /><path d="M12 8v8" /><path d="M16 12l-4 4" /></svg>',
        title: 'Kein regelmäßiger Kundenzufluss?',
        description1: 'Bleibt der Neukundenzufluss oft hinter Deinen Erwartungen zurück?',
        description2: 'Wir helfen Dir mit maßgeschneiderten Aktionen qualifizierte Neukundenanfragen zu generieren und Deinen Verkaufstrichter zu optimieren.',
        result:'',
        img: 'https://via.placeholder.com/150', // Placeholder image
      },
      {
        id: 2,
        svg:'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-speakerphone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 8a3 3 0 0 1 0 6" /><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" /><path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" /></svg>',
        title: 'Ineffektive Zielgruppenansprache?',
        description1: 'Ist Deine Kommunikation zu allgemein oder nicht optimal auf die richtige Zielgruppe ausgerichtet?',
        description2: 'Wir verwenden datengestützte Ansätze, damit Deine Werbeinhalte auf spezifische Kunden- oder Bewerbersegmente zugeschnitten sind.',
        result:'',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        svg:'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trending-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>',
        title: 'Komplexität und Ressourcenmangel?',
        description1: 'Dir fehlen Ressourcen, um das Social-Media-Marketing erfolgreich zu betreiben?',
        description2: 'Wir übernehmen die Planung, Umsetzung und Analyse Deiner Werbekampagnen, damit Du Zeit und Kosten sparst und optimale Ergebnisse erzielst.',
        result:'',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        svg:'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>',
        title: 'Schwierigkeiten im Personalrecruiting?',
        description1: 'Benötigst Du, in Zeiten von Fachkräftemangel, fachliche Unterstützung, um die Herausforderung der Mitarbeiterfindung zu meistern?',
        description2: 'Mit unseren Sozial-Media-Maßnahmen unterstützen wir Dich, damit Du kosteneffizient und erfolgreich die passenden Talente findest.',
        result:'',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: 5,
        svg:'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>',
        title: 'Weinig Reichweite und Sichtbarkeit?',
        description1: 'Versuchst Du Deine Zielgruppe zu erreichen und fragst Dich, wie das am effektivsten geht?',
        description2: 'Wir entwickeln für Dich gezielte Sozial-Media-Strategien, damit Du Deine Markenbekanntheit steigerst, und sowohl Kunden als auch Bewerber affektiv ansprichst.',
        result:'',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: 6,
        title: 'Unzureichende Markenwahrnehmung',
        svg:'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-sparkles"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" /></svg>',
        description1: 'Hast Du Schwierígkeiten Deine Arbeitgebermarke so zu positionieren, dass sie als attraktiver Arbeitsplatz wahrgenommen wird?',
        description2: 'Wir  stärken Deine Employer Brand, und sorgen für mehr qualifizierte Bewerber.',
        result:'',
        img: 'https://via.placeholder.com/150',
      },
    ],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;