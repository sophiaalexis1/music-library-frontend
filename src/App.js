import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';

function App() {

  
  
  return (
    <div>
      <NavBar />
      <MusicTable />
      <Footer />
    </div>
  );
}

export default App;
