import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import CreateSurvey from "./components/CreateSurvey";
import Survey from "./components/Survey";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="App-main">
				<Router>
					<Route path="/" exact component={Home} />
					<Route path="/createsurvey" exact component={CreateSurvey} />
					<Route path="/takesurvey/:survey_id?" exact component={Survey} />
				</Router>
			</div>
		</div>
	);
}

export default App;
