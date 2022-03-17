import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {store} from './utils/ReduxStore'
import { Provider } from 'react-redux';
import { PrismicProvider } from '@prismicio/react';
import { client } from './utils/prismic'
import reportWebVitals from './reportWebVitals';

// PrismicLoader()
// react.development.js:1476 Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
