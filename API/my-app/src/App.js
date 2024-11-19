import logo from './logo.svg';
import './App.css';
import Create from './components/create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Read from './components/read';
import Update from './components/update';

function App() {
  return (
    <Router>

      <div className="app">
        <h1>React Crud Operation</h1>
        <Routes>
          <Route exact path='/create' Component={Create} />
          <Route exact path='/read' Component={Read} />
          <Route exact path='/update' Component={Update} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
