import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Survey from "./components/Survey";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="App-main">
				<Router>
					<Route path="/" exact component={Home} />
					<Route path="/survey" exact component={Survey} />
				</Router>
			</div>
		</div>
	);
}

export default App;
