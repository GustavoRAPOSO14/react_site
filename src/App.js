import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Nav />
      <div className="content">
        <Main />
        <Aside />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
