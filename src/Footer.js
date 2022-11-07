import React from 'react';


import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer =()=>{






return(
	<>
	<footer>
	<p> <marquee> Boom Guys!!!!!!</marquee></p>
	<div className="social">
		<div>Powered By Amit Kumar Mall</div> 
		<div>
			<a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
			<a href=""><FontAwesomeIcon icon={faTwitter} /></a>
			<a href=""><FontAwesomeIcon icon={faInstagram} /></a>
		</div>
	</div>
	</footer>
	</>


	)



}

export default Footer;