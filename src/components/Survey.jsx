import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

import SurveyQuestions from "./SurveyQuestions";

const Survey = (props) => {
	const [survey, setSurvey] = useState({});

	useEffect(() => {
		const getSurvey = async () => {
			const { survey_id } = props.match.params;
			const url = `http://localhost:8100/api/survey/summary/${survey_id}`;
			const data = await getAPI(url);
			setSurvey(data);
		};

		getSurvey();
	}, [props.match.params]);

	return (
		<>
			<h1>{survey.name}</h1>
			<SurveyQuestions match={props.match} />
		</>
	);
};

export default Survey;
