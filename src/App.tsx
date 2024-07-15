import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RentPhone from './pages/RentPhone';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={RentPhone} />
    </Switch>
  </Router>
);

export default App;
