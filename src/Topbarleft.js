import React,{useContext} from 'react';
import {midname} from "./Header";

const Topbarleft=(props)=>{
	const mname = useContext(midname);




return(
	<>
	<div>
	<p> Welcome Amit{mname}{props.lastname} </p>
	</div>
	
	</>






	)
}
export default Topbarleft;