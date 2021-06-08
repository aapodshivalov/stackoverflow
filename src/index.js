import reportWebVitals from './reportWebVitals'; /* eslint-disable-line */

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { store } from './store/index';
import Search from './components/Search';
import Page from './components/Page';
import Info from './components/Info';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/result">
            <Page />
          </Route>
          <Route exact path="/info/:qid?">
            <Info />
          </Route>
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
