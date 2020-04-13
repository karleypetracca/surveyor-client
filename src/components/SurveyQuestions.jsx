import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

const Survey = (props) => {
	const [questions, setQuestions] = useState([]);

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

	const questionList = questions.map((question, index) => {
		return (
			<div className="question" key={index}>
				<p>
					<b>{question.text}</b>
				</p>
				<ol>
					{!!question.option_1 ? <li>{question.option_1}</li> : ""}
					{!!question.option_2 ? <li>{question.option_2}</li> : ""}
					{!!question.option_3 ? <li>{question.option_3}</li> : ""}
					{!!question.option_4 ? <li>{question.option_4}</li> : ""}
					{!!question.option_5 ? <li>{question.option_5}</li> : ""}
					{!!question.option_6 ? <li>{question.option_6}</li> : ""}
					{!!question.other ? <li>{question.other}</li> : ""}
				</ol>
			</div>
		);
	});

	return <div>{questionList}</div>;
};

export default Survey;
