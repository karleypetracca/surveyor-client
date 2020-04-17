import React from "react";
import icon from "../nav-icon-thin.png";

import styled from "styled-components";

const NavStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--primary);
	min-height: var(--nav - height);
	color: var(--white);
	font-size: 20px;
	box-shadow: 0 0 4px var(--grey);
	position: sticky;
	top: 0;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		height: 60px;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: var(--lg-container);
	}

	.left {
		margin: 0 5px;
		font-weight: bold;
		font-size: 22px;
	}

	.right {
		margin: 0 5px;
		display: flex;
		align-items: center;
	}

	.right * {
		margin: 0 5px;
	}

	@media only screen and (max-width: 600px) {
		.no-mobile {
			display: none;
		}
	}
`;

const Nav = () => {
	return (
		<NavStyled>
			<nav>
				<div className="left">
					<a href="/">
						<img src={icon} alt="Surveyor logo" />
						<p className="no-mobile">Surveyor</p>
					</a>
				</div>
				<div className="right">
					<a href="/createsurvey">
						<p>Create Survey</p>
					</a>
					<a href="/about">
						<p>About</p>
					</a>
				</div>
			</nav>
		</NavStyled>
	);
};

export default Nav;
