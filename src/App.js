import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Pages/Layout'

import Acceuil from './Pages/Acceuil/Acceuil'
import Logement from './Pages/Logement/Logement'
import Apropos from './Pages/A-propos/Apropos'
import Erreur404 from './Pages/Erreur404/Erreur404'

import './App.css'


const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />} >

          <Route path='/' element={<Acceuil />} />

          <Route path='logement/:id' element={<Logement />} />

          <Route path='a-propos' element={<Apropos />} />

          <Route path='*' element={<Erreur404 />} />

        </Route>



      </Routes>

    </BrowserRouter>
  );
};

export default App;