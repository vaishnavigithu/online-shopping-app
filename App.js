
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Photos from './Components/Photos';
import AboutUs from './Components/AboutUS';
import ContactUs from './Components/ContactUs';
import Mycart from './Components/Mycart';
// import RegistrationForm from './Components/RegistrationForm';

function App() {
  
  return (
    
    <BrowserRouter>
     <NavigationBar />
       <Switch> 
          <Route exact path="/">
            <Photos />
          </Route>
          
       </Switch>
       <Switch>
         <Route path="/about">
            <AboutUs />
         </Route>
       </Switch>
      <Switch>
        <Route path="/contact">
           <ContactUs />
        </Route>
        <Route path="/photos/:id">
           <Photos />
        </Route>

      </Switch>
      <Switch>
         <Route path="/mycart">
            <Mycart />
         </Route>
       </Switch>
  
      
    </BrowserRouter>
  );
}

export default App;

