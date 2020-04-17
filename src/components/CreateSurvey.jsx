import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postAPI } from "../utilities/postAPI";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDoubleRight,
	faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

import RequiredText from "./RequiredText";
import CreateSurveySingleQuestion from "./CreateSurveySingleQuestion";

import styled from "styled-components";

const CreateSurveyStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 90vh;
	text-align: center;

	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.buttons * {
		margin: 20px 5px;
	}

	.submit {
		margin: 30px 0;
	}

	.arrows {
		margin: 0 5px;
		color: var(--secondary);
	}

	.question {
		box-shadow: 2px 8px 8px 2px var(--grey-light);
		border-radius: 4px;
		padding: 20px 5px;
		margin: 20px 0;
		display: flex;
		flex-direction: column;
	}

	.question .header {
		font-weight: bold;
		text-align: left;
		padding: 5px;
	}

	.question .small-text {
		font-size: 12px;
	}

	img {
		width: 100%;
		max-width: 400px;
		border-radius: 4px;
	}
`;

const CreateSurvey = () => {
	const [questionCount, setQuestionCount] = useState(0);
	const [questionArray, setQuestionArray] = useState([]);
	const [surveyName, setSurveyName] = useState("");
	const [surveyObject, setSurveyObject] = useState([]);
	const history = useHistory();

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
					className="question"
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
			const url =
				"https://surveyor-api.karleypetracca.com/api/survey/addsurvey";
			const data = {
				name: surveyName,
				survey_type_id: "2",
				user_id: "0",
			};
			const response = await postAPI(url, data);
			if (response.status !== 200) {
				alert("Response was unable to be logged. Please try again later.");
			}
			return await response.json();
		};

		const addSurveyQuestions = async (data) => {
			const url =
				"https://surveyor-api.karleypetracca.com/api/survey/addsurveyquestions";
			const response = await postAPI(url, data);
			if (response.status === 200) {
				history.push(`/createsurvey/complete/${survey_id.survey_id}`);
			}
			if (response.status !== 200) {
				alert("Response was unable to be logged. Please try again later.");
			}
		};

		const survey_id = await addSurvey();
		surveyObject.map((element) =>
			addSurveyQuestions({
				survey_id: survey_id.survey_id,
				...element,
			})
		);
	};

	return (
		<CreateSurveyStyled>
			<h1>Create a new survey</h1>
			<label>
				What should your survey be called?
				<input
					type="text"
					required
					placeholder="Insert survey name"
					value={surveyName}
					onChange={changeName}
					className="center"
				/>
				<RequiredText />
			</label>
			<div className="questions">{questionArray.map((element) => element)}</div>
			<div className="buttons">
				<button className="green" onClick={handleAddQuestion}>
					Add Question
				</button>
				<button className="red" onClick={handleRemoveQuestion}>
					Remove Last
				</button>
			</div>
			<div>
				<FontAwesomeIcon icon={faAngleDoubleRight} className="arrows" />
				<button className="blue submit" onClick={handleSubmit}>
					Click to Submit Survey
				</button>
				<FontAwesomeIcon icon={faAngleDoubleLeft} className="arrows" />
			</div>
		</CreateSurveyStyled>
	);
};

export default CreateSurvey;
