import React, { useState , useEffect} from 'react';
import Header from'./Header.js';
import Footer from'./Footer.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login =(props) => {

	 


	let colorcode="";
	if (props.color!=undefined){
		colorcode=props.color;


	}


	/*const[citems,uitems]=useState("");
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

    };*/


	const [curname ,updatename]=useState({
	
		fname:'',
		lname:'',
		mobile:'',
		email:'',
		Country:'',
		City:'',
		language:'',
		

	});
    const[errorMobile ,setErrorMobile]=useState("");
	useEffect(() => {
    	
    	console.log(curname.mobile.length);
    	if(curname.mobile.length>10){
    		setErrorMobile("enter 10 digit only");


    	}

  	},[curname.mobile]);
	const [cname ,uname]=useState();
	 


    const event =(currentname) =>{
		let value=(currentname.target.value);
	let	name=(currentname.target.name);//fname lname
	let city=(currentname.target.City);

	let language=(currentname.target.language);

	
	
	

    updatename((previous)=>{	
			return{
				...previous,
				[name]:value,
				}
			})
    



  




	/*	if(name == 'fname') {
			updatename((previous)=>{	
			return{
				fname:value,
				lastname: previous.lastname,
				mobile:previous.mobile,
				}
			})


		}
		 else if(name == 'lname'){
			updatename((previous)=>{
				return{
				fname:previous.fname,
				lastname:value,
				mobile:previous.mobile,
			}
			})



		}

		else if(name == 'mobile'){
			updatename((previous)=>{
				return{
				fname:previous.fname,
				lastname:previous.lastname,
				mobile:value,
			}
			})



		}*/

	}
const Click =()=>{
	//console.log("ki");
	uname([curname.fname, curname.lname, curname.mobile,curname.email,curname.Country,curname.City,curname.language]);

}

return(
	<>
	<Header/>
	<div className= {'heding '+ colorcode } >

	<h1>Hello{props.name}{cname} </h1><br/>
 <label for="">Name:</label>
	<input type= "text" placeholder= "Type your name " name="fname"  onChange= {event}/><br/>
	 <label for="">Last Name:</label>
	<input type= "text" placeholder= "Type your last name "name="lname" onChange= {event}/><br/>
 
{errorMobile}
 <label for="">Mobile No:</label>
	<input type= "tel" placeholder= "+91 "name="mobile" onChange= {event}/><br/>
	 <label for="">Email:</label>
	 <Form.Control type="email" placeholder="Enter email" />
	<input type= "text" placeholder= "Type your email "name="email" onChange= {event}/><br/>
	
	<label for="country">Select a country:</label>
	 <select id="Country" name="Country"onChange={event} >
	 <option value="India">India</option>
    <option value="Poland">Poland</option>
    <option value="America">America</option>
    <option value="Japan">Japan</option>
      </select>


      
     <label for="City">Select a City:</label>
   <div onChange= {event}>
	 <input type="radio" id="Meerut" name="City" value="Meerut"/>
	 <label for="meerut">Meerut</label><br/>
	  <input type="radio" id="Modinagar" name="City" value="Modinagar"/>
	 <label for="modinagar">Modinagar</label><br/>
	  <input type="radio" id="Lucknow" name="City" value="Lucknow"/>
	 <label for="lucknow">Lucknow</label><br/>
	  <input type="radio" id="Kanpur" name="City" value="Kanpur"/>
	 <label for="kanpur">Kanpur</label><br/>
	 </div>	 <br/><br/>
	

	 <label for="language">Select a Language:</label>
   <div onChange= {event}>
	 <input type="checkbox" id="l" name="language" value="Hindi"/>
	 <label for="language">Hindi</label><br/>
	 <input type="checkbox" id="l" name="language" value="English"/>
	 <label for="language">English</label><br/>
	 </div>

	  
 




      <button onClick={Click}> click </button>

	</div>

<Footer/>



 
</>



	);


}

export default Login;