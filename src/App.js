import React from 'react';
import './styles.css';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div>
        <NavBar/>
        <Hero />
        <Analytics/>
        <NewsLetter/>
        <Cards/>
        <Footer/>
    </div>
  );
}

export default App;
