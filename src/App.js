import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productcontainer from './component/Product/Productcontainer';
import Modal from './component/Modal'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Productcontainer}/>
          <Route path='/:id' component={Modal}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
