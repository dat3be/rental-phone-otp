import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RentPhone from './pages/RentPhone';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RentPhone />} />
    </Routes>
  </Router>
);

export default App;
