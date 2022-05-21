


import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import {createStore} from "redux"

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'
import './sass/theme.scss'
import Layout from './pages/Layout';

const store = createStore(
  rootReducer
)

document.title = 'HV'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();