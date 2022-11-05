import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <Router>
    <main>
      <img id="profile__img" alt="my profile" src="./img/profile.jpg" />
      <p id="slack">bioc3ll</p>
      <p className="fullname">Abiodun Abolarinwa</p>
      <a 
      href="https://twitter.com/BIOCELL_"
      target="_blank"
      rel="noopener noreferrer"
      >

      <button id="twitter">Twitter Link</button>
      </a>

      <a
        href="https://training.zuri.team"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="btn__zuri">Zuri Team</button>
      </a>
      <a
        href="http://books.zuri.team"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="books">Zuri Books</button>
      </a>

      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=<bioc3ll>"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="book__python">Python Books</button>
      </a>
      <a
        href="https://background.zuri.team"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="pitch">Background Check for Coders</button>
      </a>

      <a
        href="https://books.zuri.team/design-rules"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="book__design">Design Books</button>
      </a>
      <a
        href="/Contact.js"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="contact">Contact Me</button>
      </a>

      <Switch>
      <Route exact path="/Contact.js">
      <Contact />
      </Route>
      </Switch>

      <div id="logo">
        <img
          className="image"
          src="./img/slack.svg"
          alt="slack logo"
        />
        <img
          className="image"
          src="./img/github.svg"
          alt="github logo"
        />
      </div>

      <div id="footer">
        <img className="zuri" alt="i4g logo" src="./img/Zuri.Internship_Logo.svg" />
        <p className="HNG">HNG Internship 9 Frontend Task</p>
        <img
          className="footer"
          src="./img/I4G.svg"
          alt="ingressive for good"
        />
      </div>
      

    </main>
    </Router>
  );
}

export default App;
