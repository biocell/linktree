import Home from './Home'
import Contact from './contact';
import Footer from './Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { React } from 'react';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
