import React from "react";
import img404 from "../images/404-3.png";

import styled from "styled-components";

const PageStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 100%;
		max-width: 500px;
		border-radius: 4px;
	}

	h1 {
		font-size: 30px;
	}

	button {
		font-size: 20px;
		margin: 10px 0;
	}
`;

const PageNotFound = () => {
	return (
		<PageStyled>
			<img src={img404} alt="404" />
			<h1>404: Page not found!</h1>

			<p style={{ textAlign: "center" }}>
				<a href="/">
					<button>Return Home</button>
				</a>
			</p>
		</PageStyled>
	);
};

export default PageNotFound;
