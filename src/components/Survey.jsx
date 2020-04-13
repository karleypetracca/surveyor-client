import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

import SurveyQuestions from "./SurveyQuestions";

const Survey = (props) => {
	const [survey, setSurvey] = useState({});

	useEffect(() => {
		const getSurvey = async () => {
			const { post_id } = props.match.params;
			const id = 492338;
			const url = `http://localhost:8100/api/survey/summary/${id}`;
			const data = await getAPI(url);
			setSurvey(data);
		};

		getSurvey();
	}, [props.match.params]);

	return (
		<>
			<h1>{survey.name}</h1>
			<h2>Created by: {survey.username}</h2>
			<SurveyQuestions match={props.match} />
		</>
	);
};

export default Survey;
