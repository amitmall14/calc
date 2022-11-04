import React from 'react';

let a= 17;
let b= 3;
function Add(props){
let sum = a+b;
return <div className={ props.cls }>SUM is { sum }!</div>;


}
function Sub(props){
let Subtract= a-b;

return <div className={ props.cls }>Subtract is { Subtract }!</div>;

}

function Mul(props){
let Multiply= a*b;
return <span className={props.cls}>Multiply is{Multiply}</span>

}
function Divi(props){
let Division= a/b;
//console.log((Division.toFixed(props.round)));


return <div className={props.cls}>{Division.toFixed(props.round)}</div>

}
export default Add;
export {Sub,Mul,Divi};

