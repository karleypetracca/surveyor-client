import React from "react";
import mockup from "../Surveyor-CreateSurvey-iphone8spacegrey_portrait.png";

import styled from "styled-components";

const HomeStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 90vh;
	text-align: center;
`;

const HeroStyled = styled.div`
	margin-top: 10vh;
	margin-bottom: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	max-width: var(--lg-container);
	width: 100%;

	* {
		margin: 10px 0;
	}

	h1 {
		margin: 50px 0;
	}

	h2 {
		font-weight: normal;
	}
`;

const BodyStyled = styled.div`
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	max-width: var(--lg-container);
	width: 100%;

	button {
		margin: 10px;
	}
`;

const Home = () => {
	return (
		<HomeStyled>
			<HeroStyled>
				<h1>Welcome to Surveyor</h1>
				<h2>Make a survey. No logins or signup forms. It's that simple.</h2>
				<a href="/createsurvey">
					<button className="green">Create a Survey</button>
				</a>
			</HeroStyled>
			<BodyStyled>
				<img src={mockup} alt="mockup" />
				<p>Want to see an example first? Check out our sample Survey:</p>
				<a href="/takesurvey/492338">
					<button className="blue">View Sample</button>
				</a>
			</BodyStyled>
		</HomeStyled>
	);
};

export default Home;
