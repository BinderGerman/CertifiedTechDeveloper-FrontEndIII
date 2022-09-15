import React from 'react';
import Home from './components/Home';
import Main  from './components/Main';
import Article  from './components/Article';
import Faq from './components/Faq';
import About from './components/About';
import NotFound from './components/NotFound';
import { Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router  >
        <Route path= '/' component= {Home}>
          <Route path= '/main' component= {Main}>
              <Route path= '/main/article/:titleId' component= {Article} />
          </Route>
          <Route path= '/faq' component= {Faq} />
          <Route path= '/about' component= {About} />
          <Route path= '*' component= {NotFound} />
        </Route>
      </Router>
    );
  }
}

export default App;
