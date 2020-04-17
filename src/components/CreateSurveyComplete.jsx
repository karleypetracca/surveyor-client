import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styled from "styled-components";

const CompleteStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 90vh;
	text-align: center;

	* {
		padding: 5px;
	}

	.green {
		color: var(--green);
	}

	.red {
		color: var(--red);
	}

	.blue {
		color: var(--blue);
	}

	.survey,
	.dashboard {
		margin: 10px 0;
		box-shadow: 2px 8px 8px 2px var(--grey-light);
		border-radius: 4px;
		padding: 20px 5px;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: var(--lg-container);
	}

	.clipboard {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 5px 0;
	}

	.copy {
		font-size: 12px;
		text-align: center;
	}

	.survey input {
		border-bottom-style: none;
		background-color: var(--grey-light);
		color: var(--green);
		font-weight: bold;
	}

	.dashboard input {
		border-bottom-style: none;
		background-color: var(--grey-light);
		color: var(--blue);
		font-weight: bold;
	}

	.copied-alert {
		color: var(--red);
		font-weight: bold;
		font-size: 12px;
	}

	.fade {
		animation: fadeOut ease 6s;
		animation-fill-mode: forwards;

		@keyframes fadeOut {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
				color: var(--white);
			}
		}
	}
`;

const CreateSurveyComplete = (props) => {
	const [surveyLink, setSurveyLink] = useState("");
	const [dashboardLink, setDashboardLink] = useState("");
	const [copiedSurvey, setCopiedSurvey] = useState(false);
	const [copiedDashboard, setCopiedDashboard] = useState(false);

	useEffect(() => {
		const { survey_id } = props.match.params;
		const survey = `https://surveyor.karleypetracca.com/takesurvey/${survey_id}`;
		setSurveyLink(survey);
		const dashboard = `https://surveyor.karleypetracca.com/dashboard/${survey_id}`;
		setDashboardLink(dashboard);
	}, [props.match.params]);

	const handleCopiedSurvey = () => {
		setCopiedSurvey(true);
		setTimeout(function () {
			setCopiedSurvey(false);
		}, 7000);
	};

	const handleCopiedDashboard = () => {
		setCopiedDashboard(true);
		setTimeout(function () {
			setCopiedDashboard(false);
		}, 7000);
	};

	return (
		<CompleteStyled>
			<h1>Your survey has been created!</h1>
			<h2 className="red">
				Your survey code is: <b>{props.match.params.survey_id}</b>
			</h2>
			<p>Do not lose your code!</p>

			<div className="survey">
				<p>Share this link to have people take your survey: </p>
				<a href={surveyLink} target="_blank" rel="noopener noreferrer">
					<b className="green">{surveyLink}</b>
				</a>
				<p className="clipboard">
					Click below to copy:
					<CopyToClipboard
						className="copy"
						text={surveyLink}
						onCopy={handleCopiedSurvey}
					>
						<input className="green" type="text" value={surveyLink} readOnly />
					</CopyToClipboard>
					{!!copiedSurvey ? (
						<span className="copied-alert fade">Copied!</span>
					) : (
						<span></span>
					)}
				</p>
			</div>

			<div className="dashboard">
				<p>To see results, view at: </p>
				<a href={dashboardLink} target="_blank" rel="noopener noreferrer">
					<b className="blue">{dashboardLink}</b>
				</a>
				<p className="clipboard">
					Click below to copy:
					<CopyToClipboard
						className="copy"
						text={dashboardLink}
						onCopy={handleCopiedDashboard}
					>
						<input
							className="blue"
							type="text"
							value={dashboardLink}
							readOnly
						/>
					</CopyToClipboard>
					{!!copiedDashboard ? (
						<span className="copied-alert fade">Copied!</span>
					) : (
						<span></span>
					)}
				</p>
			</div>
		</CompleteStyled>
	);
};

export default CreateSurveyComplete;
