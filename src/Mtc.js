import React, { useState } from "react";
import ndata from './Ndata';
import Ht from './Ht.js';


const Offerlist=()=>{
	return(
		<>
			{
				ndata.map(function (val){
				
					if(val.price== "₹ 100/-"){
						console.log(val);
						const {id,imgsrc,link,price}=val
						return(
								<Ht 	key= {id} 
										 imgsrc= {imgsrc} 
										 name ={link} 
										 price= {price} 
										 />
							)
					}

				})
			}

		</>
	)
}
const Favs= "Delhi";

const Favlist = () => {
	return (
		<>
			
			{ ndata.map(function(val){

				if(val.link == Favs) {

					return (
						<>
						<Ht key= {val.id} 
							 imgsrc= {val.imgsrc} 
							 name ={val.link} 
							 price= {val.price}/>
						</>
					)
				} 
			})
			}
		</>
	)
}

const Unfavlist = () => {
	return (
		<>
			{ ndata.map(function(val){
				if(val.link != Favs) {

					let {id,imgsrc,link,price} = val;//Destructuring

					return (
						<>
						<Ht key= {id} 
							 imgsrc= {imgsrc} 
							 name ={link} 
							 price= {price}/>
						</>
					)
				} 
			})
			}
		</>	
	)
}
const Watchlist = () => {

	return(
		<>
		{	ndata.map(function (val){
			
			if(val.link== "Deharadoon" || val.link=="Delhi"){
				const {id,imgsrc,link,price}=val;
				return(
						<Ht key= {id} 
							 imgsrc= {imgsrc} 
							 name ={link} 
							 price= {price} />
						
					)
			}

			})
		}

		</>
	)
}

function Fav(){

	return (
			<>
			<h3> Offerlist</h3>
			<div className="card-container">
			      <Offerlist/>
			 </div>

			<hr/>
			<h3>My Fav List</h3>
			<div className="card-container">
				<Favlist />
			</div>
			<hr/>
			<h3>My UnFav List</h3>
			<div className="card-container">
				<Unfavlist />
			</div>
			<h3> Watchlist</h3>
			<div className="card-container">
			      <Watchlist/>
			 </div>
		</>
	)
}

export default Fav;
