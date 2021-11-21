import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ModifyPage from './pages/Modify';

function App() {
  const [exercisetoEdit, setExerciseToEdit] = useState([])
  const [mode, setMode] = useState([])


  return (
    <div className="App">
      <header className="App-header">
        <Router>

          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} setMode={setMode} />
          </Route>

          <Route path="/modifyExercise">
            <ModifyPage exercisetoEdit={exercisetoEdit} mode={mode} />
          </Route>

        </Router>
      </header>
    </div>
  );
}

export default App;
