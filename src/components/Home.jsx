import React from "react";

import icon from "../images/nav-icon.png";
import mockup from "../images/Surveyor-CreateSurvey-iphone8spacegrey-portrait.png";

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
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	img {
		max-height: 80px;
		margin-right: -10px;
	}

	em {
		color: var(--primary);
		font-style: normal;
		font-size: 35px;
		display: flex;
		align-items: center;
	}

	h2 {
		font-weight: normal;
	}
`;

const BodyStyled = styled.div`
	margin: 20px 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	max-width: var(--lg-container);
	width: 100%;

	.sample {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	h3 {
		margin: 10px 0;
		font-weight: normal;
	}

	img {
		max-width: 40%;
	}

	button {
		margin: 10px;
	}
`;

const Home = () => {
	return (
		<HomeStyled>
			<HeroStyled>
				<h1>
					Welcome to
					<em>
						<img src={icon} alt="site icon" />
						urveyor
					</em>
				</h1>
				<h2>Create a survey. No logins or signup forms. It's that simple.</h2>
				<a href="/createsurvey">
					<button className="green">Create a Survey</button>
				</a>
			</HeroStyled>
			<BodyStyled>
				<img src={mockup} alt="mockup" />
				<div className="sample">
					<h3>Want to see an example before creating your own?</h3>
					<h3>Check out our sample survey:</h3>
					<a href="/takesurvey/492338">
						<button className="blue">View Sample</button>
					</a>
				</div>
			</BodyStyled>
		</HomeStyled>
	);
};

export default Home;
