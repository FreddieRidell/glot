import React from "react";
import ReactTestUtils from 'react-dom/test-utils';

import { Glot, GlotConsumer, GlotProvider } from "../src"

const dictionary = {
			en: {
				greetings: "'ello, govna'",
				date: "yyyy-MM-dd",
				thing_1: "number one",
				thing_2: "number two",
			},
			fra: {
				greetings: "'sup, Monsieur",
			},
}

describe("react-glot", () => {
	let wrapper

	beforeEach( () => {
		ReactTestUtils.renderIntoDocument(<GlotProvider dictionary = { dictionary } />)
	});
})
