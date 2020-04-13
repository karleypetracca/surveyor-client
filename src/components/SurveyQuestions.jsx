import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

import SingleQuestion from "./SingleQuestion";

const Survey = (props) => {
	const [questions, setQuestions] = useState([]);
	const [response, setResponse] = useState([]);

	useEffect(() => {
		const getQuestions = async () => {
			const { post_id } = props.match.params;
			const id = 492338;
			const url = `http://localhost:8100/api/survey/detail/${id}`;
			const data = await getAPI(url);
			setQuestions(data);
		};

		getQuestions();
	}, [props.match.params]);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target.value);
	};

	const questionList = questions.map((question, index) => {
		return question.question_type_id === 2 ? (
			<SingleQuestion detail={question} key={index} />
		) : (
			""
		);
	});

	return (
		<div>
			<form>
				{questionList}
				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Survey;
