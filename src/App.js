
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import Hotels from './components/Hotels/Hotels';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import City from './components/City/City';
import Services from './components/Services/Services';
import SingleDetails from './components/SingleDetails/SingleDetails';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/city">
              <City></City>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <PrivateRoute path="/hotels">
              <Hotels></Hotels>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <SingleDetails></SingleDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
