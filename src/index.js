import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './assets/styles/styles.scss';
import Home from './routes/home/index';
import Product from './routes/products/index';
import ContactUs from './routes/contact/index';
import Cart from './routes/cart/index';
import PageNotFound from './routes/pageNotFound/index';
import reducer from './store/reducer';

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Product} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/cart" component={Cart} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);



ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));
