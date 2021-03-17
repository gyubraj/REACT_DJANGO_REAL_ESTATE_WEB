import Layout from './hocs/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Contact from './containers/Contact';
import ListingDetail from './containers/ListingDetail';
import Listings from './containers/Listings';
import NotFound from './components/NotFound';

import './sass/components/_nofound.scss';
import './sass/main.scss';

import { Provider } from 'react-redux';
import store from './store'
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/login' exact component={Login} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/listings' exact component={Listings} />
            <PrivateRoute path='/Listings/:id' exact component={ListingDetail} />
            <Route component={NotFound} />

          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
