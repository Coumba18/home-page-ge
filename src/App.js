import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Event1 from './components/Event1';
import Event2 from './components/Event2';
import Event3 from './components/Event3';
import Events4 from './components/Events4';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app ">
      <Navbar/>
      <div className='container-fluid'>
      <Menu/>
      <Event1/>
      <Event2/>
      <Event3/>
      <Events4/>
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;
