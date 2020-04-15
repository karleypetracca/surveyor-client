import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import CreateSurvey from "./components/CreateSurvey";
import TakeSurvey from "./components/TakeSurvey";

import styled from "styled-components";

const AppStyled = styled.div`
	width: 100vw;

	.main {
		min-height: 90vh;
		margin: 0 auto;
		padding: 10px;
	}
`;

function App() {
	return (
		<AppStyled>
			<Nav />
			<div className="main">
				<Router>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/createsurvey" exact component={CreateSurvey} />
					<Route path="/takesurvey/:survey_id?" exact component={TakeSurvey} />
				</Router>
			</div>
		</AppStyled>
	);
}

export default App;
