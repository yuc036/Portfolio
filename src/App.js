import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

import Footer from './components/Footer';

import NotFound from './pages/NotFound';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

import RedesignPage from './pages/RedesignPage';
import BartPage from './pages/BartPage';
import ShuttlePage from './pages/ShuttlePage';
import BrandPage from './pages/BrandPage';
import MoodPage from './pages/MoodPage';
import WeatherPage from './pages/WeatherPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tracy Chen',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hello, I\'m',
        subTitle: 'Tracy Chen'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg" style={{fontFamily: "fantasy"}}>
            <Navbar.Brand style={{fontWeight: "600"}}>Tracy Chen</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

            <Route path="/macys-homepage-redesign" render={() => <RedesignPage />} />
            <Route path="/bart-better" render={() => <BartPage />} />
            <Route path="/ucsd-shuttle-tracker" render={() => <ShuttlePage />} />
            <Route path="/macys-profile-building" render={() => <BrandPage />} />
            <Route path="/mood" render={() => <MoodPage />} />
            <Route path="/weather" render={() => <WeatherPage />} />

            <Route path="*" render={() => <NotFound />} />
          </Switch>
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
