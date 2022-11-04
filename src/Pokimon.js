import React, {useState,useEffect} from 'react';
import axios from "axios";


const Pokimon =()=>{
	const[data , updateData]= useState();

	const[n_name , updateName]= useState();

	useEffect(() =>{

		if(data > 0){
			getData();
		} else {
			updateName("");
		}
		
		async function getData(){
			const res = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${data}`
				);
			updateName(res.data.name);
			
		}
		
		const options = {
		  method: 'GET',
		  url: 'https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/2607462229',
		   headers: {
		    'X-RapidAPI-Key': '0c4ce669cemsh5c0894e867dd4e4p1a3960jsn4c9f07535bd4',
		    'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
		  }
		};

		axios.request(options).then(function (response) {
			console.log(response.data);
		}).catch(function (error) {
			console.error(error);
		});

	});
	
	const event=(e)=>{
		if(e.target.value > 0) {
			updateData(e.target.value)
		} else {
			updateData("");
		}
		
		
	}

return(
	<>
	
<h1> {data}  {n_name} </h1>

<select value= {data} onChange = {event}>
<option value= "0"> please select</option>
<option value= "1"> 1 </option>
<option value= "2"> 2</option>
<option value= "3"> 3 </option>
<option value= "4"> 4 </option>
<option value= "5"> 5 </option>
<option value= "6"> 6 </option>

</select>




</>
	)
}

export default Pokimon;