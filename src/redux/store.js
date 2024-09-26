import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};



const initialState = {
    projects: [
        {
            id: 1,
            title: 'speach therapist website',
            release: '04.2023',
            tech: 'javascript, nunjucks, css, netlify cms',
            url: 'https://logopeda-dialog.pl/',
            photos: [
              {
                 nmb: 4,
              src: './assets/img/magda1.png',
              description: 'custom made layout'
            },
            {
               nmb: 5,
              src: './assets/img/magda2.png',
              description: 'headless cms connected'
            },
            {
               nmb: 6,
              src: './assets/img/magda3.png',
              description: 'responsive layout in all devices'
            }

          ]

        },
        {
            id: 2,
            title: 'simple todo list',
            release: '11.2022',
            tech: 'react, redux, react router, scss',
            url: 'https://silver-sawine-23a225.netlify.app',
            photos: [
              {
              nmb: 1,
              src: './assets/img/todo1.png',
              description: 'multiple cards variety'
            },
            {
              nmb: 2,
              src: './assets/img/todo2.png',
              description: 'highlighting favorite positions'
            },
            {
              nmb: 3,
              src: './assets/img/todo3.png',
              description: 'posibility to adding new lists'
            }

          ]
        },
        {
          id: 3,
          title: 'music app',
          release: '26.07.2023',
          tech: 'vue, pinia, firebase, vite, tailwind',
          url: 'https://music-app-michalbodys.vercel.app/',
          photos: [
            {
            nmb: 1,
            src: './assets/img/ma1.png',
            description: 'playing, adding ,commenting songs and translation of website language'
          },
          {
            nmb: 2,
            src: './assets/img/ma2.png',
            description: 'account making and authorisation via firebase'
          },
          {
            nmb: 3,
            src: './assets/img/ma3.png',
            description: 'posibility to upload your own music, changing genre and titles'
          }

        ]
      }
    ],

    sentences:['work well', 'connect people', 'look great'],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;