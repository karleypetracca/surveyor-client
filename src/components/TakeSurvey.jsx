import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

import TakeSurveyQuestions from "./TakeSurveyQuestions";

import styled from "styled-components";

const TakeSurveyStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 90vh;
	text-align: center;

	.question {
		box-shadow: 2px 8px 8px 2px var(--grey-light);
		border-radius: 4px;
		padding-top: 20px;
		padding-bottom: 5px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		margin: 20px 0;
		width: 100%;
		max-width: var(--sm-container);
	}

	.question .header {
		font-weight: bold;
		padding: 5px 10px;
	}

	img {
		max-height: 150px;
		border-radius: 4px;
		margin: 5px 10px;
		align-self: center;
	}

	.options {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 10px 5px;
	}

	.options * {
		margin-left: 5px;
		margin-right: 5px;
	}

	.submit {
		margin: 30px 0;
		padding-left: 30px;
		padding-right: 30px;
	}
`;

const Survey = (props) => {
	const [survey, setSurvey] = useState({});

	useEffect(() => {
		const getSurvey = async () => {
			const { survey_id } = props.match.params;
			const url = `https://surveyor-api.karleypetracca.com/api/survey/summary/${survey_id}`;
			const data = await getAPI(url);
			setSurvey(data);
		};

		getSurvey();
	}, [props.match.params]);

	return (
		<TakeSurveyStyled>
			<h1>{survey.name}</h1>
			<TakeSurveyQuestions match={props.match} />
		</TakeSurveyStyled>
	);
};

export default Survey;
