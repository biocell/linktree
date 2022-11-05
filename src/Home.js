import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
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
      <Link to={"/contact"}>
        <button id="contact">Contact Me</button>
      </Link>

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

      
      

    </main>
  );
}

export default Homepage;
