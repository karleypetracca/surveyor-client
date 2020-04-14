import React, { useState } from "react";

import CreateSurveyQuestion from "./CreateSurveyQuestion";

const CreateSurvey = () => {
	const [questionCount, setQuestionCount] = useState(0);
	const [questionArray, setQuestionArray] = useState([]);
	const [RemoveFlag, setRemoveFlag] = useState(false);
	const [surveyName, setSurveyName] = useState("");

	const changeName = (event) => {
		setSurveyName(event.target.value);
		console.log(surveyName);
	};

	const handleAddQuestion = () => {
		setRemoveFlag(false);
		setQuestionCount(questionCount + 1);
		const renderQuestionsAdd = () => {
			let questions = questionArray;
			questions.push(<CreateSurveyQuestion key={questions.length} />);
			setQuestionArray(questions);
		};
		renderQuestionsAdd();
	};

	const handleRemoveQuestion = () => {
		setRemoveFlag(true);
		setQuestionCount(questionCount - 1);
		const renderQuestionsRemove = () => {
			let questions = questionArray;
			questions.pop();
			setQuestionArray(questions);
		};
		renderQuestionsRemove();
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// const addSurvey = async () => {
		// 	const url = "http://localhost:8100/api/survey/addsurvey";
		// 	const response = await postAPI(url, props.match.params);

		// 	if (response.status !== 200) {
		// 		alert("Response was unable to be logged. Please try again later.");
		// 	}
		// 	return await response.json();
		// };

		// const addSurveyQuestions = async (data) => {
		// 	const url = "http://localhost:8100/api/survey/addsurveyquestions";
		// 	const response = await postAPI(url, data);
		// 	if (response.status === 200) {
		// 		alert("Response logged!");
		// 	}
		// 	if (response.status !== 200) {
		// 		alert("Response was unable to be logged. Please try again later.");
		// 	}
		// };

		// const response_id = await addSurvey();
		// console.log("Questions: ", questions);
		// console.log("Response: ", response);
		// console.log("ID: ", response_id.response_id);
		// response.map((element) => {
		// 	addSurveyQuestions({
		// 		response_id: response_id.response_id,
		// 		...element,
		// 	});
		// });
	};

	return (
		<>
			<h1>Create a new survey</h1>
			<label>
				What should your survey be called?
				<input
					type="text"
					placeholder="Insert survey name"
					value={surveyName}
					onChange={changeName}
				/>
			</label>
			<button onClick={handleAddQuestion}>Add Question</button>
			{questionArray.map((element) => element)}
			<button className="red" onClick={handleRemoveQuestion}>
				Remove Last Question
			</button>
			<button className="blue" onClick={handleSubmit}>
				Click to Submit Survey
			</button>
		</>
	);
};

export default CreateSurvey;
