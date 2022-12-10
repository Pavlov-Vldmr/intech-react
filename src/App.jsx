import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';

import Header from './components/Header/Header';
import PageHome from './components/PageHome/PageHome';
import PageResearchLab from './components/PageResearchLab/PageResearchLab';
import PageResearch from './components/PageResearch/PageResearch';
import PageRepair from './components/PageRepair/PageRepair';
import PageInstallation from './components/PageInstallation/PageInstallation';
import PageProduction from './components/PageProduction/PageProduction';
import PageItSolutions from './components/PageItSolutions/PageItSolutions';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/research-lab' element={<PageResearchLab />} />
        <Route path='/research' element={<PageResearch />} />
        <Route path='/repair' element={<PageRepair />} />
        <Route path='/installation' element={<PageInstallation />} />
        <Route path='/production' element={<PageProduction />} />
        <Route path='/it-solutions' element={<PageItSolutions />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
