import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Home from "../components/Home";

describe("<Home/>", () => {
	let getByTestId;

	afterEach(cleanup);

	describe("clicking the radio button", () => {
		let changeHandler;

		beforeEach(() => {
			changeHandler = jest.fn();
			({ getByTestId } = render(<Home />));

			fireEvent.click(getByTestId("radio1"));
		});

		it("selects option 1 as true", () => {
			expect(getByTestId("radio1").value).toEqual(true);
		});
	});
});
