import './index.css';
import React, { useState } from 'react';
function Ht(props){

const [count, setCount] = useState(0);
 const Cart=() =>{
       ;

   };



   const AddCart=() =>{
      setCount(count+1);

   };
   const AddCarts=()=>{
      setCount(count-1)

      }

   return(
      <>
         <div>
            <img src= {props.imgsrc}/>
            <h1 className={props.cls}>{props.name}</h1>
            {props.price}

           
            <h1>{count}</h1>
            <button onClick={Cart}>AddCart</button>
            <button onClick={ AddCart }>+</button>
            <button onClick={ AddCarts }>-</button>

            
         </div>


          
      </>
   )
}


    export default Ht;


