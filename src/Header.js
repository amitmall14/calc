import React,{createContext, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import Topbar from'./Topbar.js';

const midname =createContext();
const Header =() =>{
const Menu =() =>{
	console.log("ji");
	
}
return(
	

	<>
		<midname.Provider value={"Kumar"}>
			<Topbar lastname="mall"/>
		</midname.Provider>
		<nav>
			<ul>
				<NavLink exact to="/bootstrap">Bootstrap</NavLink>
				<NavLink exact to="/matarialui">Matarialui</NavLink>
				<li><NavLink exact to="/time">Time</NavLink></li>
				<li><NavLink exact to='/signup'>Signup</NavLink></li>
				<li><NavLink exact to='/todo'>Todo</NavLink></li>
				<li><NavLink exact to='/fav'>Fav</NavLink></li>
				<li><NavLink exact to='/login'>Login</NavLink></li>
				<li><NavLink exact to="/home">Home</NavLink></li>
				<li><NavLink exact to="/pnr">Check PNR</NavLink></li>
			
			</ul>
		</nav>
	</>
	)
}

export default Header;
export {midname};