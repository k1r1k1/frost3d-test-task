import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './app.css'
import MainPage from '../../pages/MainPage';
import DeformationControlPage from '../../pages/DeformationControlPage';
import TermistorChainPage from '../../pages/TermistorChainPage';

function Router() {

  return (
    <>
      <Helmet>
        <title>Frost3D | Main</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="deformation" element={<DeformationControlPage />} />
        <Route path="termistor" element={<TermistorChainPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
