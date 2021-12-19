import logo from "./logo.svg";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";
import NavBar from "./Nav";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Route exact path="/soda">
					<Soda />
				</Route>
				<Route exact path="/chips">
					<Chips />
				</Route>
				<Route exact path="/candy">
					<Candy />
				</Route>
				<Route exact path="/">
					<VendingMachine />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
