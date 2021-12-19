import React from "react";
import { Link } from "react-router-dom";

function Soda() {
	return (
		<div>
			<h1>REFRESHING SODA</h1>
			<Link exact to="/">
				Vending Machine
			</Link>
		</div>
	);
}

export default Soda;
