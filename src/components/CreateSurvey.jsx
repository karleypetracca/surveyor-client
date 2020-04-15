import React, { useState } from "react";
import { postAPI } from "../utilities/postAPI";

import CreateSurveySingleQuestion from "./CreateSurveySingleQuestion";

import styled from "styled-components";

const CreateSurveyStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 90vh;
	text-align: center;
`;

const CreateSurvey = () => {
	const [questionCount, setQuestionCount] = useState(0);
	const [questionArray, setQuestionArray] = useState([]);
	const [surveyName, setSurveyName] = useState("");
	const [surveyObject, setSurveyObject] = useState([]);

	const initialQuestionObject = {
		text: "",
		question_type_id: 2,
		question_order: 1,
		option_1: "",
		option_2: "",
		option_3: "",
		option_4: "",
		option_5: "",
		option_6: "",
		other: "",
		img_url: "",
	};

	const changeName = (event) => {
		setSurveyName(event.target.value);
	};

	const handleAddQuestion = () => {
		setQuestionCount(questionCount + 1);
		const renderQuestionsAdd = () => {
			let questions = questionArray;
			questions.push(
				<CreateSurveySingleQuestion
					key={questionCount}
					index={questionCount}
					passData={passData}
				/>
			);
			setQuestionArray(questions);
		};
		renderQuestionsAdd();
		const addSurveyObject = () => {
			let newSurveyObject = surveyObject;
			newSurveyObject.push(initialQuestionObject);
			setSurveyObject(newSurveyObject);
		};
		addSurveyObject();
	};

	const handleRemoveQuestion = () => {
		setQuestionCount(questionCount - 1);
		const renderQuestionsRemove = () => {
			let questions = questionArray;
			questions.pop();
			setQuestionArray(questions);
		};
		renderQuestionsRemove();
		const RemoveSurveyObject = () => {
			let newSurveyObject = surveyObject;
			newSurveyObject.pop();
			setSurveyObject(newSurveyObject);
		};
		RemoveSurveyObject();
	};

	const passData = async (index, data) => {
		const newArray = await surveyObject;
		newArray.splice(index, 1, data);
		setSurveyObject(newArray);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const addSurvey = async () => {
			const url = "http://localhost:8100/api/survey/addsurvey";
			const data = {
				name: surveyName,
				survey_type_id: "2",
				user_id: "0",
			};
			const response = await postAPI(url, data);
			console.log(data);
			if (response.status !== 200) {
				alert("Response was unable to be logged. Please try again later.");
			}
			return await response.json();
		};

		const addSurveyQuestions = async (data) => {
			const url = "http://localhost:8100/api/survey/addsurveyquestions";
			const response = await postAPI(url, data);
			if (response.status === 200) {
				alert("Response logged!");
			}
			if (response.status !== 200) {
				alert("Response was unable to be logged. Please try again later.");
			}
		};

		const survey_id = await addSurvey();
		console.log("Survey: ", surveyObject);
		console.log("ID: ", survey_id.survey_id);
		surveyObject.map((element) => {
			addSurveyQuestions({
				survey_id: survey_id.survey_id,
				...element,
			});
		});
	};

	return (
		<CreateSurveyStyled>
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
		</CreateSurveyStyled>
	);
};

export default CreateSurvey;
