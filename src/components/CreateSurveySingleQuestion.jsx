import React, { useState, useEffect } from "react";

const CreateSurveyQuestion = (props) => {
	const { index, passData } = props;

	// setting initial single question state
	const [question, setQuestion] = useState({
		text: "",
		question_type_id: 2,
		question_order: index + 1,
		option_1: "",
		option_2: "",
		option_3: "",
		option_4: "",
		option_5: "",
		option_6: "",
		other: "",
		img_url: "",
	});

	// setting individual field states
	const [text, setText] = useState("");
	const [typeId, setTypeId] = useState(2);
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");
	const [option3, setOption3] = useState("");
	const [option4, setOption4] = useState("");
	const [option5, setOption5] = useState("");
	const [option6, setOption6] = useState("");
	const [imgUrl, setImgUrl] = useState("");

	// setting individual field handlers
	const handleText = (event) => {
		setText(event.target.value);
		changeQuestion();
	};

	const handleTypeId = (event) => {
		setTypeId(event.target.value);
		changeQuestion();
	};

	const handleOption1 = (event) => {
		setOption1(event.target.value);
		changeQuestion();
	};

	const handleOption2 = (event) => {
		setOption2(event.target.value);
		changeQuestion();
	};

	const handleOption3 = (event) => {
		setOption3(event.target.value);
		changeQuestion();
	};

	const handleOption4 = (event) => {
		setOption4(event.target.value);
		changeQuestion();
	};

	const handleOption5 = (event) => {
		setOption5(event.target.value);
		changeQuestion();
	};

	const handleOption6 = (event) => {
		setOption6(event.target.value);
		changeQuestion();
	};

	const handleImgUrl = (event) => {
		setImgUrl(event.target.value);
		changeQuestion();
	};

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
			other: "",
			img_url: imgUrl,
		});
	};

	useEffect(() => {
		passData(index, question);
	}, [question]);

	return (
		<div className="question">
			<label>
				Question text:
				<input
					type="text"
					placeholder="Insert text here"
					value={text}
					onChange={handleText}
				/>
			</label>
			<label>
				Question type:
				<select defaultValue="2">
					<option value="1">Boolean (True/False) [1]</option>
					<option value="2">Single-choice [2]</option>
					<option value="3">Multiple-choice [3]</option>
					<option value="4">Open Text [4]</option>
				</select>
			</label>
			<label>
				Option 1
				<input
					type="text"
					placeholder="Insert option 1 text"
					onChange={handleOption1}
				/>
			</label>
			<label>
				Option 2
				<input
					type="text"
					placeholder="Insert option 2 text"
					onChange={handleOption2}
				/>
			</label>
			<label>
				Option 3
				<input
					type="text"
					placeholder="Insert option 3 text"
					onChange={handleOption3}
				/>
			</label>
			<label>
				Option 4
				<input
					type="text"
					placeholder="Insert option 4 text"
					onChange={handleOption4}
				/>
			</label>
			<label>
				Option 5
				<input
					type="text"
					placeholder="Insert option 5 text"
					onChange={handleOption5}
				/>
			</label>
			<label>
				Option 6
				<input
					type="text"
					placeholder="Insert option 6 text"
					onChange={handleOption6}
				/>
			</label>
			<label>
				Add an image? (please enter URL):
				<input
					type="text"
					placeholder="Insert image url"
					onChange={handleImgUrl}
				/>
			</label>
		</div>
	);
};

export default CreateSurveyQuestion;
