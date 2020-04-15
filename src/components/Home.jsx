import React from "react";

import styled from "styled-components";

const HomeStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 90vh;
	text-align: center;

	*:last-child {
		margin-top: 10px;
	}
`;

const HeroStyled = styled.div`
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	* {
		margin: 10px 0;
	}
`;

const Home = () => {
	return (
		<HomeStyled>
			<HeroStyled>
				<h1>Welcome to Surveyor</h1>
				<h2>Make a survey, no logins or signup forms. It's that simple.</h2>
				<a href="/createsurvey">
					<button>Create a SnapSurvey</button>
				</a>
			</HeroStyled>
			<p>
				Want to see an example first? Check out our sample SnapSurvey below:
			</p>
			<a href="/takesurvey/492338">
				<button className="blue">View Sample</button>
			</a>
		</HomeStyled>
	);
};

export default Home;
