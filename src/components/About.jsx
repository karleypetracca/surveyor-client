import React from "react";

import styled from "styled-components";

const AboutStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 90vh;
	text-align: center;
	padding: 10px;

	img {
		border-radius: 4px;
		max-width: 200px;
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

const AuthorStyled = styled.div`
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	box-shadow: 2px 8px 8px 2px var(--grey-light);
	border-radius: 4px;
	padding: 20px;
	width: 100%;
	max-width: var(--sm-container);

	* {
		margin: 10px 0;
	}

	h3 {
		font-size: 24px;
		font-weight: bold;
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
					and shared with no login necessary.
				</p>
				<p>
					To see more about the code and site structure, click the link below
					for the GitHub repo.
				</p>
				<div className="buttons">
					<a
						href="https://github.com/karleypetracca/surveyor-client"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="green">Frontend Client</button>
					</a>
					<a
						href="https://github.com/karleypetracca/surveyor-api"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="grey">Backend API</button>
					</a>
				</div>
			</HeroStyled>

			<AuthorStyled>
				<h2>More on the author:</h2>

				<img
					src="https://avatars2.githubusercontent.com/u/39736230?s=460&u=4782f77b8eb8704e299b05cc48c8847fcb51d06b&v=4"
					alt="author"
				/>
				<h3>Karley Petracca</h3>
				<div className="buttons">
					<a
						href="https://www.karleypetracca.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="blue">Portfolio</button>
					</a>
					<a
						href="https://github.com/karleypetracca"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="blue">GitHub</button>
					</a>
					<a
						href="https://www.linkedin.com/in/karleypetracca/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="blue">LinkedIn</button>
					</a>
				</div>
			</AuthorStyled>
		</AboutStyled>
	);
};

export default About;
