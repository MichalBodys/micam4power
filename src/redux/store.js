import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};



const initialState = {
    sentences:['work well', 'connect people', 'look great'],
    Cards: [
      {
        id: 1,
        title: 'Card 1',
        description: 'This is the description for card 1.',
        img: 'https://via.placeholder.com/150', // Placeholder image
      },
      {
        id: 2,
        title: 'Card 2',
        description: 'This is the description for card 2.',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        title: 'Card 3',
        description: 'This is the description for card 3.',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        title: 'Card 4',
        description: 'This is the description for card 4.',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: 5,
        title: 'Card 5',
        description: 'This is the description for card 5.',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: 6,
        title: 'Card 6',
        description: 'This is the description for card 6.',
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