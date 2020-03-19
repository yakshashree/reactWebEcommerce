import React from 'react';
import {Switch,Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Productlist from './component/Productlist';
// import Product from './component/Product'
import Details from './component/Details';
import Cart from './component/Cart'
import PageNotFound from './component/PageNotFound'
import Model from './component/Model'

class App extends React.Component{
  render()
  {
    return(
     <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Productlist} />
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={PageNotFound}/>  
      </Switch>

      <Model/>
     
     </React.Fragment>
    );
  }
}

export default App;
