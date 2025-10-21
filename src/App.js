import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Properties from './components/Properties';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Properties />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;