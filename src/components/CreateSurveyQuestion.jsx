import React, { useState, useEffect } from "react";

const CreateSurveyQuestion = (props) => {
	return (
		<div className="question">
			<label>
				Question text
				<input type="text" placeholder="Insert text here" />
			</label>
			<label>
				Option 1
				<input type="text" placeholder="Insert option 1" />
			</label>
			<label>
				Option 2
				<input type="text" placeholder="Insert option 2" />
			</label>
			<label>
				Option 3
				<input type="text" placeholder="Insert option 3" />
			</label>
			<label>
				Option 4
				<input type="text" placeholder="Insert option 4" />
			</label>
			<label>
				Option 5
				<input type="text" placeholder="Insert option 5" />
			</label>
			<label>
				Option 6
				<input type="text" placeholder="Insert option 6" />
			</label>
			<label>
				Do you want to use other?
				<input type="text" placeholder="Other" />
			</label>
		</div>
	);
};

export default CreateSurveyQuestion;
