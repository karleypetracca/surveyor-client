import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";
import { postAPI } from "../utilities/postAPI";

import SingleQuestion from "./SingleQuestion";

const Survey = (props) => {
	const [questions, setQuestions] = useState([]);
	const [response, setResponse] = useState([]);

	// set up for initial page
	useEffect(() => {
		const initialResponse = async (data) => {
			const setArray = [];
			for (let i = 0; i < (await data.length); i++) {
				setArray.push({
					question_id: 0,
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

	// function for children to pass up new data based on index through props
	const passData = async (index, data) => {
		const newArray = await response;
		newArray.splice(index, 1, data);
		setResponse(newArray);
	};

	// submit handler to create new response and add specific question responses
	const handleSubmit = async (event) => {
		event.preventDefault();

		const addResponse = async () => {
			const url = "http://localhost:8100/api/survey/sendresponse";
			const response = await postAPI(url, props.match.params);

			if (response.status !== 200) {
				alert("Response was unable to be logged. Please try again later.");
			}
			return await response.json();
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

		const response_id = await addResponse();
		response.map((element) => {
			addResponseQuestions({
				response_id: response_id.response_id,
				...element,
			});
		});
	};

	// children mapping based on questions in survey
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
