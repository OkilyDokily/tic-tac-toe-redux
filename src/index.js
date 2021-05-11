import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game'
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/game-state-reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
