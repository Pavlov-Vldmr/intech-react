import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';

import Header from './components/Header/Header';
import PageHome from './components/PageHome/PageHome';
import PageResearchLab from './components/PageResearchLab/PageResearchLab';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/research-lab' element={<PageResearchLab />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
