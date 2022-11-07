import React,{useState} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from './Header.js';
import Footer from './Footer.js';

const Todo =() => {

const[citems,uitems]=useState("");
	const[acitems,auitems]=useState([""]); 
    

    const items=(event)=>{
    	uitems(event.target.value);
    }
    
    
    const menu = ()=> {
    	console.log("ki")
     	auitems((oldarrayitems)=> {
     	console.log(oldarrayitems);	
    		return[ ... oldarrayitems, citems];

    	});

    };
return(

	<>
  <Header/>
	 <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    
    <div className= "hed">

	<div className="container">
	
		<h1>Todo List</h1> 
<div>
		<input type="text" placeholder="Type your product" onChange={items}/>

        <button onClick={menu}> + </button>
        </div>

       <ol>
         
         {acitems.map((itemarray)=> {
return(
<li>{itemarray}</li>
)


 }
 )
 		 }
       </ol>
     </div>
</div>
 <Footer/>
</>



	);


}






export default Todo;