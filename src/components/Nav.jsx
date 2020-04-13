import React from "react";
import icon from "../android-chrome-512x512.png";

import "../App.css";

const Nav = () => {
	return (
		<div className="App-nav">
			<a href="/">
				<img src={icon} alt="Surveyor logo" />
				<h1>Surveyor</h1>
			</a>
		</div>
	);
};

export default Nav;
