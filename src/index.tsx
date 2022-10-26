import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './Components/reducer';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(reducer);


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default store;
