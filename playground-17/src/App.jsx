import React from 'react';
import Home from './components/Home';
import Main from './components/Main';
import About from './components/About';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className='App App-header'>
        <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/main'>Main</Link>
          </li>
          <li>
            <Link to='/main/vlog/A1V/R1-A1V'>
              Primer video del Vlog
            </Link>
          </li>
          <li>
            <Link to='/main/vlog/A1B/R1-A1B'>
              Primer artículo del Blog
            </Link>
          </li>
          <li>
            <Link to='/main/vlog/brokenlink'>
              Link roto al video de Vlog con un solo parámetro
            </Link>
          </li>
          <li>
            <Link to='/main/blog/bro/ken/link'>
              Link roto al artículo del Blog con más de dos parámetros
            </Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/brokenlink'>Link roto</Link>
          </li>
        </ul>
        <Switch> 
          <Route exact path='/'><Home /></Route>
          <Route path='/main'><Main /></Route>
          <Route path='/about'><About /></Route>
          <Route path='*'><NotFound /></Route>
        </Switch>
      </BrowserRouter>  
      </div>
  );
};

export default App;
