import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';

import './assets/styles/styles.scss';
import Home from './components/Home/index';
import Product from './components/Products/index';
import ContactUs from './components/ContactUs/index';
import PageNotFound from './components/PageNotFound/index';
import reducer from './store/reducer';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const routing = (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/" component={Product} />
        <Route path="/contact/" component={ContactUs} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
    <Footer />
  </Router>
);



ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));
