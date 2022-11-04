import React from 'react';
import Topbarright from'./Topbarright.js';
import Topbarleft from'./Topbarleft.js';

const Topbar=(props) => {

return(

	<div className="topbar">
	<Topbarright />
	<Topbarleft lastname={props.lastname}/>
	

	</div>
	

)
}


export default Topbar;