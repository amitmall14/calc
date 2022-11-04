import React, { useState } from 'react';
const Timee =() => {

	let Times = new Date().toLocaleTimeString();
	const [currentTime, updateTime] = useState(Times);


	const timeChange=()=>{
	
	 	let Timess = new Date().toLocaleTimeString();

		updateTime(Timess);
	} 
	setInterval(() => {
		let Timesss = new Date().toLocaleTimeString();

		updateTime(Timesss);
    
  	}, 1000);

	return(
	<>
		<h2>{ currentTime }</h2>
		<button onClick={timeChange}>Time</button>
		</>
		)


}

export default Timee;