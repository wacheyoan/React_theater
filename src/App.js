import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';
import Movies from './Movies';
import 'bootswatch/dist/lux/bootstrap.css';



function App() {



  return (
      <BrowserRouter>
        <div className={'container'}>
          <header>
                      </header>
          <Switch>
            About
            <Route exact={true} path='/about' component={About}/>
          </Switch>
          <Switch>
            Accueil
            <Route exact={true} path='/home' component={Home}/>
            <Route exact={true} path='/' component={Home}/>
          </Switch>
          <Switch>
            <Route exact={true} path='/movies' component={Movies}/>
          </Switch>

          <footer>
          </footer>
        </div>
      </BrowserRouter>


  );
}

export default App;
