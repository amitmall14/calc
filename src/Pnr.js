import React, {useState,useEffect} from 'react';
import axios from "axios";
import Npnr from'./Npnr.js';
import Header from'./Header.js';



const Pnr =() => {
	const [loading, setLoading] = useState(false);
	const [data , updateData]= useState();
	const [train , updatetrain]=useState();
	const [error , setError]=useState();
	
	const event=(e)=>{
		updateData(e.target.value)

	}

const clear =(y)=>{

	

		updateData("");
		}
	



const submit =(y)=>{
	//y.currentTarget.disabled = true;
	

	
	 

	

		setLoading(true);

		updatetrain("");







		
		const options = {
			  method: 'GET',
			  url: `https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${data}`,
			  
			   headers: {
			    'X-RapidAPI-Key': '198fb30f6emsh90efa7b71e9c422p1b4238jsnb019f471ad0a',
			    'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'


			  }




		};
console.log(y);
		axios.request(options).then(function (response) {
			
		console.log(y);
		console.log("ko");
		
			updatetrain(response.data);

			setLoading(false);
		}).catch(function (error) {
			setError(error.message)
			console.error(error);


setLoading(false);

		});	


}

return(
	<>

   
    <Header/>
<div className="main">
	<h1>Enter PNR No. </h1>
	<input type="number" placeholder="Enter PNR." min="0" value={data} onChange={event}/>
	<button  onClick={clear}>Clear </button>
	<button  onClick={submit}>Submit </button>

	 <Npnr trainres={train}/>{loading ? <div className= 'loader'><span className='lod'>Loading....</span></div> :""}
	 <h2>{error}</h2>
</div>


</>
	)
}

export default Pnr;