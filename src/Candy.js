import React from "react";
import { Link } from "react-router-dom";

function Candy() {
	return (
		<div>
			<h1>SUGARY CANDY</h1>
			<Link exact to="/">
				Vending Machine
			</Link>
		</div>
	);
}

export default Candy;
