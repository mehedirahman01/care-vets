import './App.css';
import Home from './Pages/Homepage/Home/Home';
import Header from './Pages/Homepage/Header/Header';
import Footer from './Pages/Homepage/Footer/Footer';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Services from './Pages/ServicesPage/Services/Services';
import LocationPage from './Pages/LocationPage/LocationPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>


        <Switch>
          {/* Home Page */}
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/services">
            <Services></Services>
          </Route>

          <Route exact path="/location">
            <LocationPage></LocationPage>
          </Route>


          {/* Error Page */}
          {/* <Route exact path="*">
            <NotFound></NotFound>
          </Route> */}

        </Switch>

        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
