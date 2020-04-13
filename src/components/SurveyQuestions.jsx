import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";
import { postAPI } from "../utilities/postAPI";

import SingleQuestion from "./SingleQuestion";

const Survey = (props) => {
	const [questions, setQuestions] = useState([]);
	const [response, setResponse] = useState([]);

	useEffect(() => {
		const initialResponse = async (data) => {
			const setArray = [];
			for (let i = 0; i < (await data.length); i++) {
				setArray.push({
					option_1: false,
					option_2: false,
					option_3: false,
					option_4: false,
					option_5: false,
					option_6: false,
					other: "",
				});
			}
			return setArray;
		};

		const getQuestions = async () => {
			const { survey_id } = props.match.params;
			const url = `http://localhost:8100/api/survey/detail/${survey_id}`;
			const data = await getAPI(url);
			setQuestions(data);
			setResponse(initialResponse(data));
		};

		getQuestions();
	}, [props.match.params]);

	const passData = async (index, data) => {
		const newArray = await response;
		newArray.splice(index, 1, data);
		setResponse(newArray);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(response);
		console.log(props.match.params);

		addResponse();
		// response.map((element) => {
		// 	console.log(element);
		// 	addResponseQuestions(element);
		// });
	};

	const addResponse = async () => {
		const url = "http://localhost:8100/api/survey/sendresponse";
		const response = await postAPI(url, props.match.params);
		if (response.status === 200) {
			alert("Response logged!");
		}
		if (response.status !== 200) {
			alert("Response was unable to be logged. Please try again later.");
		}
	};

	const addResponseQuestions = async (data) => {
		const url = "http://localhost:8100/api/survey/sendresponsequestions";
		const response = await postAPI(url, data);
		if (response.status === 200) {
			alert("Response logged!");
		}
		if (response.status !== 200) {
			alert("Response was unable to be logged. Please try again later.");
		}
	};

	const questionList = questions.map((question, index) => {
		return question.question_type_id === 2 ? (
			<SingleQuestion detail={question} key={index} passData={passData} />
		) : (
			""
		);
	});

	return (
		<div>
			{questionList}
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default Survey;
