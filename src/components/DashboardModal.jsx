import React, { useRef } from "react";

import styled from "styled-components";

const DashboardModalStyled = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.7);
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
	visibility: visible;
	opacity: 1;
	pointer-events: auto;
	transition: all 0.3s;

	.container {
		border-radius: 4px;
		padding: 5px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--white);
		width: 100%;
		max-width: var(--sm-container);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		margin: 20px 0;
		width: 100%;
		padding-left: 5px;
	}

	img {
		max-height: 150px;
		border-radius: 4px;
		margin: 5px 10px;
		align-self: center;
	}

	h2 {
		font-size: 20px;
		text-align: center;
	}

	button {
		align-self: flex-end;
	}
`;

const DashboardModal = (props) => {
	const modal = useRef(null);
	const { showModal, setShowModal, detail, surveyCount, aggResponses } = props;

	const closeHandler = () => {
		setShowModal(!showModal);
	};

	const handleClick = (event) => {
		if (modal.current.contains(event.target)) {
			return;
		} else {
			setShowModal(false);
		}
	};

	return (
		<>
			{!!showModal ? (
				<DashboardModalStyled onClick={handleClick}>
					<div className="container" ref={modal}>
						{!!detail.img_url ? (
							<img src={detail.img_url} alt={detail.text} />
						) : (
							""
						)}
						<h2>{detail.text}</h2>
						<p>
							<b>Response breakdown:</b>
						</p>
						{!!detail.option_1 ? (
							<p>
								{(aggResponses.option_1_true / surveyCount) * 100}% -{" "}
								{detail.option_1}
							</p>
						) : (
							""
						)}
						{!!detail.option_2 ? (
							<p>
								{(aggResponses.option_2_true / surveyCount) * 100}% -{" "}
								{detail.option_2}
							</p>
						) : (
							""
						)}
						{!!detail.option_3 ? (
							<p>
								{(aggResponses.option_3_true / surveyCount) * 100}% -{" "}
								{detail.option_3}
							</p>
						) : (
							""
						)}
						{!!detail.option_4 ? (
							<p>
								{(aggResponses.option_4_true / surveyCount) * 100}% -{" "}
								{detail.option_4}
							</p>
						) : (
							""
						)}
						{!!detail.option_5 ? (
							<p>
								{(aggResponses.option_5_true / surveyCount) * 100}% -{" "}
								{detail.option_5}
							</p>
						) : (
							""
						)}
						{!!detail.option_6 ? (
							<p>
								{(aggResponses.option_2_true / surveyCount) * 100}% -{" "}
								{detail.option_6}
							</p>
						) : (
							""
						)}
						{!!detail.other ? (
							<p>
								{detail.option_6}:
								<ul>
									{aggResponses.other.map((element) => (
										<li>{element}</li>
									))}
								</ul>
							</p>
						) : (
							""
						)}

						{!!detail.other ? <p>{detail.other}</p> : ""}

						<button className="red actions" onClick={closeHandler}>
							Close
						</button>
					</div>
				</DashboardModalStyled>
			) : (
				""
			)}
		</>
	);
};

export default DashboardModal;
