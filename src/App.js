import React from 'react';
import Home from './Home';
import {Switch , Route } from 'react-router-dom';
import Contact from './Contact';
import Error from './Error';
import About from './About';
import Services from './Services';
import Portfolio from './portfolio';
import Footer from './Footer';
import Note from './MyNote';
const App = () =>{
  
    return(

        <>
         

        <Switch>  
        <Route exact path="/"  component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/footer' component={Footer}/>
        <Route exext path='/note' component={Note}/>
        <Route component={Error}/>
        </Switch>
      

        </>
    )



}

export default App;