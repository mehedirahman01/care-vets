import './App.css';
import Home from './Pages/Homepage/Home/Home';
import Header from './Pages/Homepage/Header/Header';
import Footer from './Pages/Homepage/Footer/Footer';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Services from './Pages/ServicesPage/Services/Services';
import LocationPage from './Pages/LocationPage/LocationPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Header></Header>
          <Switch>
            {/* Home Page */}
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            {/* Services Page */}
            <Route exact path="/services">
              <Services></Services>
            </Route>

            {/* Location Page */}
            <PrivateRoute exact path="/location">
              <LocationPage></LocationPage>
            </PrivateRoute>

            {/* Contact Page */}
            <Route exact path="/contact">
              <ContactPage></ContactPage>
            </Route>

            {/* Register Page */}
            <Route exact path="/register">
              <RegisterPage></RegisterPage>
            </Route>

            {/* Login Page */}
            <Route exact path="/login">
              <LoginPage></LoginPage>
            </Route>



            {/* Error Page */}
            {/* <Route exact path="*">
            <NotFound></NotFound>
          </Route> */}

          </Switch>

          <Footer></Footer>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
