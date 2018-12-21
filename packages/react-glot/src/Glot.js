import React from "react";

import GlotConsumer from "./GlotConsumer";

const Glot = ({ children, lang, mkFn, value }) => (
	<GlotConsumer>
		{glot =>
			[lang && { lang }, mkFn && value && { mkFn }, [children], value]
				.filter(Boolean)
				.reduce((acc, val) => acc(val), glot)
		}
	</GlotConsumer>
);

export default Glot;
