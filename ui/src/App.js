import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePage from './pages/Create';
import EditPage from './pages/Edit';

function App() {
  const [toEdit, setToEdit] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Router>

          <Route path="/" exact>
            <Home setToEdit={setToEdit} />
          </Route>

          <Route path="/create">
            <CreatePage />
          </Route>

          <Route path="/edit">
            <EditPage toEdit={toEdit} />
          </Route>

        </Router>
      </header>
    </div>
  );
}

export default App;
