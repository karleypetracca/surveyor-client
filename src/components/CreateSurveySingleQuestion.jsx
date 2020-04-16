import React, { useState, useEffect } from "react";

import RequiredText from "./RequiredText";

const CreateSurveyQuestion = (props) => {
	const { index, passData } = props;

	// setting initial single question state
	const [question, setQuestion] = useState({});

	// setting individual field states
	const [text, setText] = useState("");
	const [typeId, setTypeId] = useState(2);
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");
	const [option3, setOption3] = useState("");
	const [option4, setOption4] = useState("");
	const [option5, setOption5] = useState("");
	const [option6, setOption6] = useState("");
	const [other, setOther] = useState(false);
	const [imgUrl, setImgUrl] = useState("");

	// setting individual field handlers
	const changeQuestion = () => {
		setQuestion({
			text: text,
			question_type_id: typeId,
			question_order: index + 1,
			option_1: option1,
			option_2: option2,
			option_3: option3,
			option_4: option4,
			option_5: option5,
			option_6: option6,
			other: other,
			img_url: imgUrl,
		});
	};

	const handleText = (event) => {
		setText(event.target.value);
	};

	const handleTypeId = (event) => {
		setTypeId(event.target.value);
	};

	const handleOption1 = (event) => {
		setOption1(event.target.value);
	};

	const handleOption2 = (event) => {
		setOption2(event.target.value);
	};

	const handleOption3 = (event) => {
		setOption3(event.target.value);
	};

	const handleOption4 = (event) => {
		setOption4(event.target.value);
	};

	const handleOption5 = (event) => {
		setOption5(event.target.value);
	};

	const handleOption6 = (event) => {
		setOption6(event.target.value);
	};

	const handleOther = (event) => {
		setOther(event.target.value);
	};

	const handleImgUrl = (event) => {
		setImgUrl(event.target.value);
	};

	useEffect(() => {
		changeQuestion();
	}, [
		text,
		typeId,
		option1,
		option2,
		option3,
		option4,
		option5,
		option6,
		other,
		imgUrl,
	]);

	useEffect(() => {
		passData(index, question);
	}, [question]);

	return (
		<div className="question">
			<p className="header">Question #{index + 1}</p>
			<label>
				Question text:
				<input
					type="text"
					placeholder="Ex: What's your favorite color?"
					value={text}
					onChange={handleText}
					className="center"
					required
				/>
				<RequiredText />
			</label>
			<label>
				Question type:
				<select defaultValue="2" onChange={handleTypeId}>
					<option value="1">Boolean (True/False)</option>
					<option value="2">Single-choice</option>
					<option value="3">Multiple-choice</option>
					<option value="4">Open Text</option>
				</select>
			</label>
			<label className="option">
				Option 1:
				<input
					type="text"
					placeholder="Insert option 1 text"
					onChange={handleOption1}
				/>
			</label>
			<label className="option">
				Option 2:
				<input
					type="text"
					placeholder="Insert option 2 text"
					onChange={handleOption2}
				/>
			</label>
			<label className="option">
				Option 3:
				<input
					type="text"
					placeholder="Insert option 3 text"
					onChange={handleOption3}
				/>
			</label>
			<label className="option">
				Option 4:
				<input
					type="text"
					placeholder="Insert option 4 text"
					onChange={handleOption4}
				/>
			</label>
			<label className="option">
				Option 5:
				<input
					type="text"
					placeholder="Insert option 5 text"
					onChange={handleOption5}
				/>
			</label>
			<label className="option">
				Option 6:
				<input
					type="text"
					placeholder="Insert option 6 text"
					onChange={handleOption6}
				/>
			</label>
			<label className="option">
				Would you like to include an other field?
				<select
					type="text"
					placeholder="Insert option 6 text"
					onChange={handleOther}
					defaultValue="false"
				>
					<option value="true">Yes</option>
					<option value="false">No</option>
				</select>
			</label>
			<label>
				If you would like to add an image to this question, please enter image
				URL:
				<input
					type="text"
					placeholder="Insert image url"
					onChange={handleImgUrl}
				/>
				{imgUrl === "" ? "" : <img src={imgUrl} alt="question header" />}
				<p className="small-text">
					Note: Image will be placed above the question text.
				</p>
			</label>
		</div>
	);
};

export default CreateSurveyQuestion;
