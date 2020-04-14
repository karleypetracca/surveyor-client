import React, { useState, useEffect } from "react";

const SingleQuestion = (props) => {
	const { detail, passData } = props;

	const [responseObject, setResponseObject] = useState({
		question_id: detail.question_id,
		option_1: false,
		option_2: false,
		option_3: false,
		option_4: false,
		option_5: false,
		option_6: false,
		other: "",
	});

	useEffect(() => {
		passData(detail.question_order - 1, responseObject);
	}, [responseObject]);

	const handleOption1 = () => {
		setResponseObject({
			question_id: detail.question_id,
			option_1: true,
			option_2: false,
			option_3: false,
			option_4: false,
			option_5: false,
			option_6: false,
			other: "",
		});
	};

	const handleOption2 = () => {
		setResponseObject({
			question_id: detail.question_id,
			option_1: false,
			option_2: true,
			option_3: false,
			option_4: false,
			option_5: false,
			option_6: false,
			other: "",
		});
	};

	const handleOption3 = () => {
		setResponseObject({
			question_id: detail.question_id,
			option_1: false,
			option_2: false,
			option_3: true,
			option_4: false,
			option_5: false,
			option_6: false,
			other: "",
		});
	};

	const handleOption4 = () => {
		setResponseObject({
			question_id: detail.question_id,
			option_1: false,
			option_2: false,
			option_3: false,
			option_4: true,
			option_5: false,
			option_6: false,
			other: "",
		});
	};

	const handleOption5 = () => {
		setResponseObject({
			question_id: detail.question_id,
			option_1: false,
			option_2: false,
			option_3: false,
			option_4: false,
			option_5: true,
			option_6: false,
			other: "",
		});
	};

	const handleOption6 = () => {
		setResponseObject({
			question_id: detail.question_id,
			option_1: false,
			option_2: false,
			option_3: false,
			option_4: false,
			option_5: false,
			option_6: true,
			other: "",
		});
	};

	const handleOtherText = (event) => {
		setResponseObject({
			question_id: detail.question_id,
			option_1: false,
			option_2: false,
			option_3: false,
			option_4: false,
			option_5: false,
			option_6: false,
			other: event.target.value,
		});
	};

	return (
		<div>
			{!!detail.img_url ? <img src={detail.img_url} alt="question" /> : ""}
			<p>
				<b>{detail.text}</b>
			</p>
			<div className="question">
				{!!detail.option_1 ? (
					<label>
						<input type="radio" name={detail.text} onChange={handleOption1} />
						{detail.option_1}
					</label>
				) : (
					""
				)}
				{!!detail.option_2 ? (
					<label>
						<input type="radio" name={detail.text} onChange={handleOption2} />
						{detail.option_2}
					</label>
				) : (
					""
				)}
				{!!detail.option_3 ? (
					<label>
						<input type="radio" name={detail.text} onChange={handleOption3} />
						{detail.option_3}
					</label>
				) : (
					""
				)}
				{!!detail.option_4 ? (
					<label>
						<input type="radio" name={detail.text} onChange={handleOption4} />
						{detail.option_4}
					</label>
				) : (
					""
				)}
				{!!detail.option_5 ? (
					<label>
						<input type="radio" name={detail.text} onChange={handleOption5} />
						{detail.option_5}
					</label>
				) : (
					""
				)}
				{!!detail.option_6 ? (
					<label>
						<input type="radio" name={detail.text} onChange={handleOption6} />
						{detail.option_6}
					</label>
				) : (
					""
				)}
				{!!detail.other ? (
					<label>
						{detail.other}
						<input
							type="text"
							onChange={handleOtherText}
							value={responseObject.other}
						/>
					</label>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default SingleQuestion;
