import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";

import Modal from "./Modal";

const DashboardQuestion = (props) => {
	const { question, surveyCount } = props;

	const [showModal, setShowModal] = useState(false);
	const [responses, setResponses] = useState([]);
	const [aggResponses, setAggResponses] = useState({});

	const modalHandler = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		const getResponses = async () => {
			const url = `https://surveyor-api.karleypetracca.com/api/survey/responses/question/${question.question_id}`;
			const data = await getAPI(url);
			setResponses(data);
			let o1 = 0,
				o2 = 0,
				o3 = 0,
				o4 = 0,
				o5 = 0,
				o6 = 0,
				other = [];
			data.map((response) => {
				return (
					!!response.option_1 ? (o1 += 1) : "",
					!!response.option_2 ? (o2 += 1) : "",
					!!response.option_3 ? (o3 += 1) : "",
					!!response.option_4 ? (o4 += 1) : "",
					!!response.option_5 ? (o5 += 1) : "",
					!!response.option_6 ? (o6 += 1) : "",
					!!response.other ? other.push(response.other) : ""
				);
			});
			setAggResponses({
				option_1_true: o1,
				option_2_true: o2,
				option_3_true: o3,
				option_4_true: o4,
				option_5_true: o5,
				option_6_true: o6,
			});
		};

		getResponses();
	}, [props.match.params]);

	return (
		<div className="question">
			<p className="header">{question.text}</p>
			<p className="id">
				Question ID:
				<button onClick={modalHandler}>#{question.question_id}</button>
			</p>
			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				detail={question}
				surveyCount={surveyCount}
				responses={responses}
				aggResponses={aggResponses}
			/>
		</div>
	);
};

export default DashboardQuestion;
