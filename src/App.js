import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/politica_privacidade" element={<PoliticaPrivacidade />} />
        </Routes>
      </Router>
  );
}

export default App;
