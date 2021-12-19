import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
	return (
		<div className="VendingMachine">
			<h1>Vending Machine</h1>
			<Link exact to="/soda">
				Soda
			</Link>
			<Link exact to="/chips">
				Chips
			</Link>
			<Link exact to="/candy">
				Candy
			</Link>
		</div>
	);
};

export default VendingMachine;
