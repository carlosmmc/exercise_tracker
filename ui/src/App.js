import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/Create';
import ModifyPage from './pages/Modify';

function App() {
  const [exercisetoEdit, setExerciseToEdit] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Router>

          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>

          <Route path="/create">
            <CreatePage />
          </Route>

          <Route path="/edit">
            <ModifyPage exercisetoEdit={exercisetoEdit} />
          </Route>

        </Router>
      </header>
    </div>
  );
}

export default App;
