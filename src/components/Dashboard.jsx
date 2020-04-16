import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

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
		align-items: flex-start;
		text-align: left;
		margin: 20px 0;
		width: 100%;
		padding-left: 5px;
	}

	.question .header {
		font-weight: bold;
		text-align: left;
		color: var(--secondary);
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
	const [surveyResponses, setSurveyResponses] = useState([]);

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

		const getSurveyResponses = async () => {
			const { survey_id } = props.match.params;
			const url = `https://surveyor-api.karleypetracca.com/api/survey/responses/all/${survey_id}`;
			const data = await getAPI(url);
			setSurveyResponses(data);
		};

		getSurveyDetail();
		getSurveyCount();
		// getSurveyResponses();
	}, [props.match.params]);

	const questions = surveyDetail.map((question, index) => {
		return (
			<div key={index} className="question">
				<p className="header">{question.text}</p>
				<ol>
					{!!question.option_1 ? <li>{question.option_1}</li> : ""}
					{!!question.option_2 ? <li>{question.option_2}</li> : ""}
					{!!question.option_3 ? <li>{question.option_3}</li> : ""}
					{!!question.option_4 ? <li>{question.option_4}</li> : ""}
					{!!question.option_5 ? <li>{question.option_5}</li> : ""}
					{!!question.option_6 ? <li>{question.option_6}</li> : ""}
					{!!question.other ? <li>{question.other}</li> : ""}
				</ol>
				<p className="">Question ID: #{question.question_id}</p>
			</div>
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
