import React, { useState } from 'react';

const Npnr=(props)=>{


	console.log( props.trainres);// undefined // status=true/false
	
		if(props.trainres !=undefined) {
			if(props.trainres.status==true) {
				return (
					<>
					<table>
					<tr>
					<th>Platform</th>
					<th>Train Name</th>
					<th>Boarding Date</th>
					<th>From </th>
					<th> To</th>
					<th> Reserved Upto</th>
					</tr>


					<tr>
					<td>{ props.trainres.data.boardingInfo.platform}</td>
					<td>{ props.trainres.data.trainInfo.name}</td>
					<td> { props.trainres.data.boardingInfo.arrivalTime }</td>
					<td>{ props.trainres.data.boardingInfo.stationName }</td>
					<td> To</td>
					<td> Reserved Upto</td>
					</tr>

					</table>
					<table>
						<tr>
							<th>s.no</th>
							<th>currentCoach</th>
							<th>Berth</th>
							<th>Status</th>
						</tr>
				

						
						
						
						{ props.trainres.data.passengerInfo.map(function (val,index){
							console.log(val);

							return(
							<tr>
							<td>Passenger {index+1}</td>
							<td>{val.currentCoach}</td>
							<td>{val.currentBerthNo}</td>
							<td>CNF</td>

							</tr>
							)

						}
						)
						}
							</table>

							<table>
						<tr>
						<td>ArrivalTime</td>
						<td>DepartureTime</td>
						<td>TrainRoutes</td>
						<td>StationCode</td>
						<td>Distance</td>



						
							
							
						</tr>

							{ props.trainres.data.trainRoutes.map(function (cuu){
							console.log(cuu);
							return(
							<tr>
							
							<td>{cuu.arrivalTime}</td>
							<td>{cuu.departureTime}</td>
							<td>{cuu.stationName}</td>
							<td>{cuu.stationCode}</td>
							<td>{cuu.distance}</td>
							
						

							</tr>
							)

						}
						)
						}

</	table>
						</>
				)
			} 
			else {
				return (
					<>
						<p> { props.trainres.error }</p>

						</>
				)
			
			}

		}
	
		

		
}
export default Npnr;