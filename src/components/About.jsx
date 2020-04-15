import React from "react";

import styled from "styled-components";

const AboutStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 90vh;
	text-align: center;

	img {
		border-radius: 4px;
	}

	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.buttons * {
		margin: 0 5px;
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

const About = () => {
	return (
		<AboutStyled>
			<HeroStyled>
				<h1>About Surveyor</h1>
				<p>
					Surveyor is a full stack solo project using the PERN stack
					(PostgreSQL, Express.js, React, Node.js). It is powered by a React
					frontend and a backend API server running via Express. Project goal
					was to create a survey app allowing for surveys to be quickly deployed
					and shared with no paperwork, similar to SnapChat.
				</p>
				<p>
					To see more about the code and site structure, click the link below
					for the GitHub repo.
				</p>
				<div className="buttons">
					<a href="https://github.com/karleypetracca/surveyor-client">
						<button className="green">Front End Client</button>
					</a>
					<a href="https://github.com/karleypetracca/surveyor-api">
						<button className="green">Back End API</button>
					</a>
				</div>
			</HeroStyled>
			<HeroStyled>
				<h2>About the author:</h2>

				<img src="https://avatars2.githubusercontent.com/u/39736230?s=460&u=4782f77b8eb8704e299b05cc48c8847fcb51d06b&v=4" />
				<div className="buttons">
					<a href="https://github.com/karleypetracca">
						<button className="blue">GitHub</button>
					</a>
					<a href="https://www.linkedin.com/in/karleypetracca/">
						<button className="blue">LinkedIn</button>
					</a>
				</div>
			</HeroStyled>
		</AboutStyled>
	);
};

export default About;