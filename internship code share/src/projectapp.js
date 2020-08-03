import React from 'react';
import Nav from './projectnav';
import Forum from './projectforum';
import Form from './projectform';
import Contact from './projectcontact';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

function App(){
  return(
    <Router>
      <Nav/>
      <Switch>
      <Route path="/form"  component={Form}/>
      <Route path="/forum" component={Forum}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
      </Router>
  );
}


export default App;
