// src/App.tsx
import React from 'react';
import RentPhone from './components/RentPhone';
import './styles/style.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Rental Phone OTP</h1>
      <RentPhone />
    </div>
  );
};

export default App;
