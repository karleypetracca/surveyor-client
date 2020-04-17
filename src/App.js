import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import CreateSurvey from "./components/CreateSurvey";
import CreateSurveyComplete from "./components/CreateSurveyComplete";
import TakeSurvey from "./components/TakeSurvey";
import Dashboard from "./components/Dashboard";

import PageNotFound from "./components/PageNotFound";

import styled from "styled-components";

const AppStyled = styled.div`
	width: calc(100vw - (100vw - 100%));

	.main {
		min-height: 90vh;
		margin: 0 auto;
		padding: 10px;
		width: 100%;
		max-width: var(--lg-container);
	}
`;

function App() {
	return (
		<AppStyled>
			<Nav />
			<div className="main">
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" exact component={About} />
						<Route path="/createsurvey" exact component={CreateSurvey} />
						<Route
							path="/createsurvey/complete/:survey_id?"
							exact
							component={CreateSurveyComplete}
						/>
						<Route
							path="/takesurvey/:survey_id?"
							exact
							component={TakeSurvey}
						/>
						<Route path="/dashboard/:survey_id?" exact component={Dashboard} />
						{/* <Route path="/404" component={PageNotFound} /> */}
						{/* <Redirect to="/404" /> */}
					</Switch>
				</Router>
			</div>
		</AppStyled>
	);
}

export default App;
