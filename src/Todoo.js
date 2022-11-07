import React,{useState} from 'react';
import Header from'./Header.js';
import Footer from'./Footer.js';
import todoimg from'./images/download.jpeg';


import {faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Todoo =()=> {
	const[currentData , updateData]= useState();
	const[newData , newupdateData]= useState([]);

	const idata =(event)=>{
		updateData(event.target.value)

	}
	const menuData= ()=>{

		if(currentData == undefined || currentData == "") {
			alert("please enter item");
		} else {
			
			newupdateData((arrayItems)=>{
				return[...arrayItems,currentData]
				
			})
			updateData("");

		}
	}

	const dele =(index)=> {
		console.log(index);
		console.log(newData);
		const filterData = newData.filter((ele , ind)=>{
		
			return ind!= index;
		})
		console.log(filterData);
		newupdateData(filterData);	

	}
	return(
		<>
			<Header />
			<div className="main">
				<div className="containers">
					<figure>

					<h3>My Todo List</h3>
				
						<img src= {todoimg} alt= "amit"/>
					</figure>
					<input type="text" placeholder="Type your product"  onChange={idata} value={currentData}/>
					<button onClick={menuData}> + </button>

					{
						newData.map((arrayItems,index) => {
							return(
							<>
								<div className="todo-list" key= {index}>
								{index+ 1}. {arrayItems}

								 <button onClick= {() => dele(index)}> <FontAwesomeIcon icon={faTrash} /></button>
								</div>
							</>

						)}
						)
					}
				</div>

			</div>
			<Footer/>
		</>

	)


}

export default Todoo;