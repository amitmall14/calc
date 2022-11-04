import React from 'react';

import Add ,{Sub,Mul,Divi} from './Calc.js';
import ndata from './Ndata.js';

import Ht from './Ht.js';
const Home =() => {

  return(
      <>     
        <Add cls="green"/><br/>
        <Sub cls="red"/><br/>
        <Mul  cls="blue"/><br/>
        <Divi cls = "gray" round="1"/>
        <h3>All List</h3>
     

       <div className="card-container">
  
          { 
            ndata.map(function(val){
              let cls;
              if (val.id==2||val.id==4){ 
                cls="hilights";
              } else {
                cls="";
              }
              return(
                <Ht key= {val.id} cls={cls} key= {val.id} imgsrc= {val.imgsrc} name ={val.link} price= {val.price}/>
              )
          })
        }
      </div>
     </>
  );

}
export default Home;