import React from "react";
import { Link } from "react-router-dom";

function Chips() {
	return (
		<div>
			<h1>YUMMY CHIPS</h1>
			<Link exact to="/">
				Vending Machine
			</Link>
		</div>
	);
}

export default Chips;
