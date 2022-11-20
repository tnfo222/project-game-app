import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import HomePage from './Component/Pages/HomePage';
import AboutUs from './Component/Pages/AboutUs';


function App() {
  
  //const games = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">The Arcade</h1>

          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Nav.Link href="/"> 
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link eventKey={"aboutPage"}> 
                  <Link to="/about">About Us</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>

        </header>

        <div className="display">
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutUs} />
        </div>

      </Router>

    </div>
  );
}

export default App;