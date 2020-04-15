import React from "react";

import styled from "styled-components";

const RequiredStyled = styled.p`
	font-size: 12px;
	color: var(--red);
	display: inline-block;
	margin: 0;
	margin-left: -55px;
	padding: 0;
`;

const RequiredText = () => {
	return <RequiredStyled>Required</RequiredStyled>;
};

export default RequiredText;
