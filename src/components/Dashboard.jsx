import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

import DashboardQuestion from "./DashboardQuestion";

import styled from "styled-components";

const DashboardStyled = styled.div`
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
		align-items: center;
		text-align: center;
		margin: 20px 0;
		width: 100%;
		padding-left: 5px;
	}

	.question .header {
		font-weight: bold;
	}

	.question .id {
		font-weight: bold;
		color: var(--green);
		margin: 5px 0;
		margin-top: 20px;
	}

	.question .id button {
		background-color: var(--green);
	}

	li {
		margin-left: 30px;
	}
`;

const Dashboard = (props) => {
	const { survey_id } = props.match.params;
	const [surveyName, setSurveyName] = useState("");
	const [surveyDetail, setSurveyDetail] = useState([]);
	const [surveyCount, setSurveyCount] = useState(0);

	useEffect(() => {
		const getSurveyDetail = async () => {
			const { survey_id } = props.match.params;
			const url = `https://surveyor-api.karleypetracca.com/api/survey/detail/${survey_id}`;
			const data = await getAPI(url);
			setSurveyDetail(data);
			setSurveyName(data[0].name);
		};

		const getSurveyCount = async () => {
			const { survey_id } = props.match.params;
			const url = `https://surveyor-api.karleypetracca.com/api/survey/responses/count/${survey_id}`;
			const data = await getAPI(url);
			setSurveyCount(data.count);
		};

		getSurveyDetail();
		getSurveyCount();
	}, [props.match.params]);

	const questions = surveyDetail.map((question, index) => {
		return (
			<DashboardQuestion
				key={index}
				question={question}
				match={props.match}
				surveyCount={surveyCount}
			/>
		);
	});

	return (
		<DashboardStyled>
			<h1>Dashboard for Survey #{survey_id}</h1>
			<p>Survey Title: {surveyName}</p>
			<p>Number of responses received: {surveyCount}</p>
			{questions}
		</DashboardStyled>
	);
};

export default Dashboard;
