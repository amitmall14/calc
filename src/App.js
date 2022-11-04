import React from 'react';
import { BrowserRouter,Routes, Route,Link,Navigate } from "react-router-dom";
import logo from './logo.svg';
import './index.css';
import ndata from './Ndata.js';
import Fav from './Mtc.js';
import Ht from './Ht.js';
import Timee from './Timee.js';
import Todo from './Todo.js';
import Routdd from './Routdd.js';
import Login from './Login.js';
import Home from './Home.js';
import HomePage from'./HomePage.js';
import NoPage from'./NoPage.js';
import Bootstrap from'./Bootstrap.js';
import Matarialui from'./Matarialui.js';
import Pokimon from'./Pokimon.js';
import Pnr from'./Pnr.js';



function App(props) {
  return(
    <>
    
    
    <Pokimon/>

   
        <BrowserRouter>
          <Routes>  
          <Route  exact path= "/bootstrap" element= {<Bootstrap />} /> 
          <Route  exact path= "/matarialui" element= {<Matarialui />} /> 
            
            <Route  exact path= "/www" element= {<Routdd />} /> 
             <Route  exact path= "/pnr" element= {<Pnr />} />   
            <Route  exact path= "/login" element= {<Login name="amit" color="green"/>} /> 
             <Route  exact path= "/signup" element= {<Login />} /> 
            <Route  exact path= "/time" element= {<Timee />} />   
            <Route  exact path= "/todo" element= {<Todo />} />  
            <Route  exact path= "/fav" element= {<Fav />} />  
            <Route  exact path= "/todo" element= {<Todo />} /> 
            <Route  exact path= "/" element= {<HomePage />} /> 
            {/* <Route path="*" element={<NoPage />} /> 

            load Error page


            */

          }

        {/*Redirect to the another Page*/}
             <Route exact path ="*" element= {<Navigate to="/"replace={true} />} />

             <Route  exact path= "/home" element= {<HomePage />} />      
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
